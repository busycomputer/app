# BusyComputer

Durable Visual AI Workflow Infrastructure

## Development

### Get Started

1. Install Devbox

   ```zsh
   curl -fsSL https://get.jetify.com/devbox | bash
   ```

2. Install Direnv

   ```zsh
   devbox global add direnv
   ```

3. Add Direnv Hook in `~/.zshrc`

   ```zsh
   eval "$(direnv hook zsh)"
   ```

4. Clone and prepare the repo

   ```zsh
   git clone https://github.com/busycomputer/app.git
   cd app
   cp .env.example .env.local
   ```

5. Install Packages

   ```zsh
   devbox generate direnv -f
   devbox run install
   ```

6. Install Services

   ```zsh
   devbox run supabase
   devbox run inngest
   ```

7. Try Build

   ```zsh
   pnpm run types
   pnpm run format
   pnpm run lint
   pnpm run build
   ```

8. Run Dev

   ```zsh
   pnpm run dev
   ```

### Links

1. App: http://localhost:3000
2. Inngest Dev: http://localhost:8288
3. Supabase Studio: http://localhost:54323
