alter table "public"."workflows" drop constraint "workflows_trigger_key";

drop index if exists "public"."workflows_trigger_key";

alter table "public"."workflows" drop column "trigger";



