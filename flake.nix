{
  description = "aloshy.🅰🅸 | NextJS Supabase Devenv";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    devenv.url = "github:cachix/devenv";
    process-compose.url = "github:F1bonacc1/process-compose";
  };

  outputs = { self, nixpkgs, flake-utils, devenv, process-compose, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        ports = {
          supabase-api = "54321";
          supabase-db = "54322";
          supabase-studio = "54323";
          supabase-inbucket = "54324";
          inngest = "8288";
          nextjs = "3000";
        };

        processComposeConfig = {
          processes = {
            supabase = {
              command = "supabase start";
              readiness_probe = {
                http_get = {
                  host = "127.0.0.1";
                  port = ports.supabase-api;
                  path = "/health";
                };
                initial_delay_seconds = 5;
                period_seconds = 10;
                timeout_seconds = 5;
                success_threshold = 1;
                failure_threshold = 3;
              };
            };
            nextjs = {
              command = "bun run dev";
              depends_on = { supabase.condition = "process_healthy"; };
              readiness_probe = {
                http_get = {
                  host = "127.0.0.1";
                  port = ports.nextjs;
                  path = "/";
                };
                initial_delay_seconds = 3;
                period_seconds = 10;
                timeout_seconds = 3;
              };
            };
            inngest = {
              command = ''
                docker rm -f inngest-dev || true &&
                docker run --name inngest-dev \
                  -p 8288:8288 \
                  inngest/inngest inngest dev \
                  -u http://host.docker.internal:3000/api/inngest
              '';
              depends_on = { nextjs.condition = "process_healthy"; };
              readiness_probe = {
                http_get = {
                  host = "127.0.0.1";
                  port = ports.inngest;
                  path = "/runs";
                };
                initial_delay_seconds = 3;
                period_seconds = 10;
                timeout_seconds = 3;
              };
            };
          };
        };

        devenvConfig = {
          processes = processComposeConfig.processes;

          packages = with pkgs; [
            bun # Modern JavaScript runtime and package manager
            nodejs # For compatibility and tooling
            gh # GitHub CLI
            act # Local GitHub Actions testing
            nodePackages.vercel # Vercel CLI
            docker # Container runtime
            supabase-cli # Supabase CLI
            jq # JSON processing
            httpie # API testing
          ];

          languages = { javascript.enable = true; };

          services.docker = {
            enable = true;
            package = pkgs.docker;
          };

          scripts = {
            setup.exec = ''
              if [ ! -f .envrc ]; then
                echo "Creating .envrc..."
                echo "use flake" > .envrc
              fi
            '';

            start.exec = ''
              echo "Starting development environment..."
              process-compose up || { echo "Failed to start services"; exit 1; }
            '';

            stop.exec = ''
              echo "Stopping development environment..."
              process-compose down || echo "Warning: Some services may not have stopped cleanly"
            '';

            clean.exec = ''
              echo "Stopping Supabase..."
              supabase stop || echo "Warning: Supabase may not have been running"
              echo "Cleaning Docker resources..."
              docker system prune -f || echo "Warning: Failed to clean Docker resources"
              echo "Removing Inngest container..."
              docker rm -f inngest-dev || echo "Warning: Inngest container may not exist"
            '';

            reset-db.exec = ''
              echo "Resetting Supabase database..."
              supabase db reset || { echo "Error: Failed to reset database"; exit 1; }
            '';
          };

          env = {
            NODE_ENV = "development";
            SUPABASE_API_URL = "http://localhost:${ports.supabase-api}";
            INNGEST_URL = "http://localhost:${ports.inngest}";
            DIRENV_WARN_TIMEOUT = "60s";
            HUSKY = "1";
            INNGEST_DEV = "1";
            NEXT_PUBLIC_SUPABASE_ANON_KEY =
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
            NEXT_PUBLIC_SUPABASE_URL = "http://127.0.0.1:${ports.supabase-api}";
            POSTGRES_DATABASE = "postgres";
            POSTGRES_HOST = "127.0.0.1";
            POSTGRES_PASSWORD = "postgres";
            POSTGRES_PRISMA_URL =
              "postgresql://postgres:postgres@127.0.0.1:${ports.supabase-db}/postgres";
            POSTGRES_URL =
              "postgresql://postgres:postgres@127.0.0.1:${ports.supabase-db}/postgres";
            POSTGRES_URL_NON_POOLING =
              "postgresql://postgres:postgres@127.0.0.1:${ports.supabase-db}/postgres";
            POSTGRES_USER = "postgres";
            SUPABASE_ANON_KEY =
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
            SUPABASE_JWT_SECRET =
              "super-secret-jwt-token-with-at-least-32-characters-long";
            SUPABASE_SERVICE_ROLE_KEY =
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU";
            SUPABASE_URL = "http://127.0.0.1:${ports.supabase-api}";
          };

          pre-commit.hooks = {
            nixpkgs-fmt.enable = true;
            prettier.enable = true;
            eslint.enable = true;
            markdownlint.enable = true;
            typo-check.enable = true;

            local = {
              enable = true;
              entry = "${pkgs.writeScript "check-env" ''
                #!${pkgs.bash}/bin/bash
                if ! grep -q "NEXT_PUBLIC_SUPABASE_URL" .env; then
                  echo "Missing required environment variables"
                  exit 1
                fi
              ''}";
              pass_filenames = false;
            };
          };

          enterShell = ''
            echo "🚀 NextJS Development Environment Ready!"
            echo ""
            echo "Available commands:"
            echo "  start     - Start all services"
            echo "  stop      - Stop all services"
            echo "  clean     - Clean up Docker resources"
            echo "  reset-db  - Reset Supabase database"
            echo ""
            echo "Services:"
            echo "  NextJS    - http://localhost:3000"
            echo "  Supabase  - http://localhost:54321"
            echo "  Inngest   - http://localhost:8288"
          '';
        };
      in {
        devShells.default = pkgs.mkShell {
          inherit pkgs;
          modules = [
            devenvConfig
          ];

          shellHook = ''
            echo "
            ▄▀█ █░░ █▀█ █▀ █░█ █▄█ ░ ▄▀█ █
            █▀█ █▄▄ █▄█ ▄█ █▀█ ░█░ ▄ █▀█ █
            "
          '';
        };
      });
}
