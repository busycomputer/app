{
  description = "aloshy.🅰🅸 | NextJS Dev Shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
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
          app = "3000";
        };

        env = {
          PROJECT_NAME = "busycomputer";
          SUPABASE_API_URL = "http://localhost:${ports.supabase-api}";
          INNGEST_URL = "http://localhost:${ports.inngest}";
          DIRENV_WARN_TIMEOUT = "60s";
        };

        makeScript = name: text: pkgs.writeScriptBin name text;

        scripts = {
          setup-direnv = makeScript "setup-direnv" ''
            #!/usr/bin/env bash
            if [ ! -f .envrc ]; then
             echo "Creating .envrc..."
             echo "use flake" > .envrc
             echo "☑ Created .envrc!"
             direnv allow || exit 1
             echo "☑ Direnv active"
            else
             echo "☑ Found .envrc"
            fi

            exit 0
          '';

          setup-yarn = makeScript "setup-yarn" ''
            #!/usr/bin/env bash
            if ! yarn --version &>/dev/null; then
             npm i -g yarn || exit 1
            fi

            if [ ! -d "node_modules" ]; then
             echo "Installing Node Modules..."
             yarn install || exit 1
             echo "☑ Node Modules Installed!"
            else
             echo "☑ Node modules found"
            fi

            exit 0
          '';

          setup-docker = makeScript "setup-docker" ''
            #!/usr/bin/env bash
            timeout=30
            start_time=$(date +%s)

            while ! docker info &>/dev/null; do
             if [ $(($(date +%s) - start_time)) -gt $timeout ]; then
              echo "☒ Docker daemon is not running. Please start Docker Desktop first."
              exit 1
             fi
             sleep 1
            done

            echo "☑ Docker is up"
            exit 0
          '';

          setup-supabase = makeScript "setup-supabase" ''
            #!/usr/bin/env bash
            if ! curl -s http://localhost:${ports.supabase-api}/health > /dev/null; then
             echo "Starting Supabase..."
             supabase start || exit 1

             wait4x postgresql "postgresql://postgres:postgres@localhost:${ports.supabase-db}/postgres?sslmode=disable" -t 60s -q || exit 1
             wait4x http "http://localhost:${ports.supabase-api}/health" -t 60s -q || exit 1
             wait4x http "http://localhost:${ports.supabase-studio}" -t 60s -q || exit 1
             wait4x http "http://localhost:${ports.supabase-inbucket}" -t 60s -q || exit 1
             echo "☑ Supabase Ready!"
            else
             echo "☑ Supabase is up"
            fi

            exit 0
          '';

          setup-inngest = makeScript "setup-inngest" ''
            #!/usr/bin/env bash
            if ! curl -s http://localhost:${ports.inngest}/runs > /dev/null; then
             echo "Starting Inngest..."
             docker rm -f inngest-dev &>/dev/null || true
             docker run -d --name inngest-dev \
              -p ${ports.inngest}:${ports.inngest} \
              inngest/inngest inngest dev \
              -u http://host.docker.internal:${ports.app}/api/inngest || exit 1

             wait4x http "http://localhost:${ports.inngest}/runs" -t 60s -q || exit 1
             echo "☑ Inngest Dev Ready!"
            else
             echo "☑ Inngest Dev is up"
            fi

            exit 0
          '';

          ascii-art = makeScript "ascii-art" ''
                                  #!/usr/bin/env bash
                                   echo "
            ▄▀█ █░░ █▀█ █▀ █░█ █▄█ ░ ▄▀█ █
            █▀█ █▄▄ █▄█ ▄█ █▀█ ░█░ ▄ █▀█ █"
          '';
        };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs;
            [ nodejs_22 docker wait4x direnv supabase-cli nixfmt ]
            ++ (builtins.attrValues scripts);

          inherit env;

          shellHook = ''
            setup-direnv || exit 1
            setup-yarn || exit 1
            setup-docker || exit 1
            setup-supabase || exit 1
            setup-inngest || exit 1
            ascii-art || exit 1
          '';
        };
      });
}
