alter table "public"."workflows" drop constraint "workflows_pkey";

drop index if exists "public"."workflows_pkey";

alter table "public"."workflows" add column "user_id" uuid not null;

alter table "public"."workflows" add column "uuid" uuid not null default gen_random_uuid();

alter table "public"."workflows" alter column "enabled" set not null;

alter table "public"."workflows" alter column "id" drop identity;

alter table "public"."workflows" alter column "id" drop not null;

alter table "public"."workflows" alter column "trigger" set not null;

alter table "public"."workflows" enable row level security;

CREATE UNIQUE INDEX workflows_trigger_key ON public.workflows USING btree (trigger);

CREATE UNIQUE INDEX workflows_pkey ON public.workflows USING btree (uuid);

alter table "public"."workflows" add constraint "workflows_pkey" PRIMARY KEY using index "workflows_pkey";

alter table "public"."workflows" add constraint "workflows_trigger_key" UNIQUE using index "workflows_trigger_key";

alter table "public"."workflows" add constraint "workflows_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."workflows" validate constraint "workflows_user_id_fkey";

create policy "Enable insert for authenticated users only"
on "public"."workflows"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable users to delete their own data only"
on "public"."workflows"
as permissive
for delete
to authenticated
using ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable users to update their own data only"
on "public"."workflows"
as permissive
for update
to authenticated
using ((( SELECT auth.uid() AS uid) = user_id))
with check ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable users to view their own data only"
on "public"."workflows"
as permissive
for select
to authenticated
using ((( SELECT auth.uid() AS uid) = user_id));

