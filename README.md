# BusyComputer

Durable Visual AI Workflow Infrastructure

## Development

### Get Started

1. Clone and prepare the repo

   ```zsh
   git clone https://github.com/busycomputer/app.git
   cd app
   cp .env.example .env.local
   ```

2. Install Devbox (if not already installed)

   ```zsh
   curl -fsSL https://get.jetify.com/devbox | bash
   ```

   > You can skip this step if you prefer manually installing the dependencies instead of using `devbox`.
   > Make sure you have `Docker Desktop` or `Colima` installed and running.
   > Check `package.json` for the `Node.js` and `pnpm` versions and install them if not already installed.
   > Run `pnpm install && start supabase && pnpm types && pnpm format && pnpm lint && pnpm build && pnpm dev` to install the dependencies and start the supabase server.

3. Direnv Setup (Optional)

   Install `direnv`, add it's hook to the shell, and generate the `.envrc` file in the root of the project (if doesn't exist already).

   ```zsh
   devbox global add direnv
   echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
   echo 'eval "$(direnv hook bash)"' >> ~/.bashrc
   devbox generate direnv -f
   ```

   > You can skip this step if you prefer using `devbox shell` manually to start the shell, instead of `direnv` to automatically start it when entering the project directory.

4. Colima Setup (Optional)

   Install Colima and start it as Docker Daemon (if not already running). Make sure at least 4 CPUs and 8GB Memory is allocated for containers to prevent errors.

   ```zsh
   devbox global add colima
   echo 'export DOCKER_HOST="unix:///Users/aloshy/.colima/default/docker.sock"' >> ~/.zshrc
   colima start --cpu 4 --memory 8
   ```

   > You can skip this step if you prefer using Docker Desktop instead of Colima. But Colima is recommended for better performance and easier management.

5. Clear Docker System (Optional)

   This will remove all Docker images, containers, volumes, networks, and build cache.

   ```zsh
   docker system prune -a
   ```

   > ⚠️ **Warning:** Be careful with these commands if you have other Docker containers/images you want to keep.
   > You can skip this step if you prefer not to cleanup Docker.

6. Prepare the project

   ```zsh
   devbox install
   devbox run prepare
   devbox shell
   ```

### Development

```zsh
devbox run dev
```

### Build and Run Docker Container

```zsh
docker --host "unix://$HOME/.colima/docker.sock" build -t busycomputer .
```

### Links

1. App: http://localhost:3000
2. Inngest Dev: http://localhost:8288
3. Supabase Studio: http://localhost:54323
