alter table "public"."workflows" drop constraint "workflows_pkey";

drop index if exists "public"."workflows_pkey";

alter table "public"."workflows" drop column "uuid";

alter table "public"."workflows" add column "id" uuid not null default gen_random_uuid();

CREATE UNIQUE INDEX workflows_pkey ON public.workflows USING btree (id);

alter table "public"."workflows" add constraint "workflows_pkey" PRIMARY KEY using index "workflows_pkey";



