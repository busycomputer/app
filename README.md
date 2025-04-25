## BUSYCOMPUTER

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)
[![Build Status](https://github.com/busycomputer/app/actions/workflows/CI.yml/badge.svg)](https://github.com/busycomputer/app/actions/workflows/ci.yml)
[![Docker Support](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)](https://github.com/busycomputer/app)

Durable Visual AI Workflow Infrastructure

Install devbox:

```sh
curl -fsSL https://get.jetpack.io/devbox | bash
```

Start the devbox shell:

```sh
devbox shell
```

Run a script in the devbox environment:

```sh
devbox run <script>
```

## Scripts

Scripts are custom commands that can be run using this project's environment. This project has the following scripts:

- [dev](#devbox-run-dev)
- [prepare](#devbox-run-prepare)
- [supabase:db:push](#devbox-run-supabase:db:push)
- [supabase:db:push:dry-run](#devbox-run-supabase:db:push:dry-run)
- [supabase:functions:deploy](#devbox-run-supabase:functions:deploy)
- [supabase:link](#devbox-run-supabase:link)
- [vercel:deploy:preview](#devbox-run-vercel:deploy:preview)
- [vercel:deploy:production](#devbox-run-vercel:deploy:production)
- [vercel:env:pull](#devbox-run-vercel:env:pull)
- [vercel:link](#devbox-run-vercel:link)

## Environment

```sh
SUPABASE_ACCESS_TOKEN="${SUPABASE_ACCESS_TOKEN}"
SUPABASE_DB_PASSWORD="${SUPABASE_DB_PASSWORD}"
SUPABASE_PROJECT_REF="${SUPABASE_PROJECT_REF}"
VERCEL_PROJECT_ID="${VERCEL_PROJECT_ID}"
VERCEL_TOKEN="${VERCEL_TOKEN}"
```

## Shell Init Hook

The Shell Init Hook is a script that runs whenever the devbox environment is instantiated. It runs
on `devbox shell` and on `devbox run`.

```sh
test -z $DEVBOX_COREPACK_ENABLED || corepack enable --install-directory "/Users/aloshy/busycomputer/app/.devbox/virtenv/nodejs_22/corepack-bin/"
test -z $DEVBOX_COREPACK_ENABLED || export PATH="/Users/aloshy/busycomputer/app/.devbox/virtenv/nodejs_22/corepack-bin/:$PATH"
export PATH=$(pwd)/node_modules/.bin:$PATH
```

## Packages

- [nodejs_22@latest](https://www.nixhub.io/packages/nodejs_22)
- [corepack@latest](https://www.nixhub.io/packages/corepack)
- [coreutils@latest](https://www.nixhub.io/packages/coreutils)
- [docker@latest](https://www.nixhub.io/packages/docker)
- [toml-cli@latest](https://www.nixhub.io/packages/toml-cli)

## Script Details

### devbox run dev

```sh
pnpx inngest-cli@latest dev & pnpm dev
```

&ensp;

### devbox run prepare

```sh
corepack install
alias pnpm='corepack pnpm'
alias pnpx='corepack pnpx'
pnpm install --force
pnpx supabase start
pnpm types
pnpm format
pnpm lint
pnpm build
pnpm test
```

&ensp;

### devbox run supabase:db:push

```sh
pnpx supabase db push --password ${SUPABASE_DB_PASSWORD}
```

&ensp;

### devbox run supabase:db:push:dry-run

```sh
pnpx supabase db push --dry-run --password ${SUPABASE_DB_PASSWORD}
```

&ensp;

### devbox run supabase:functions:deploy

```sh
pnpx supabase functions deploy --token ${SUPABASE_ACCESS_TOKEN}
```

&ensp;

### devbox run supabase:link

```sh
pnpx supabase link --project-ref ${SUPABASE_PROJECT_REF} --password ${SUPABASE_DB_PASSWORD}
```

&ensp;

### devbox run vercel:deploy:preview

```sh
pnpx vercel deploy --token=${VERCEL_TOKEN}
```

&ensp;

### devbox run vercel:deploy:production

```sh
pnpx vercel deploy --token=${VERCEL_TOKEN} --prod
```

&ensp;

### devbox run vercel:env:pull

```sh
pnpx vercel env pull .env --environment=preview --token=${VERCEL_TOKEN}
```

&ensp;

### devbox run vercel:link

```sh
pnpx vercel link --yes --project ${VERCEL_PROJECT_ID} --token=${VERCEL_TOKEN}
```

&ensp;

<!-- gen-readme end -->
