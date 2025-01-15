revoke delete on table "public"."blog_posts" from "anon";

revoke insert on table "public"."blog_posts" from "anon";

revoke references on table "public"."blog_posts" from "anon";

revoke select on table "public"."blog_posts" from "anon";

revoke trigger on table "public"."blog_posts" from "anon";

revoke truncate on table "public"."blog_posts" from "anon";

revoke update on table "public"."blog_posts" from "anon";

revoke delete on table "public"."blog_posts" from "authenticated";

revoke insert on table "public"."blog_posts" from "authenticated";

revoke references on table "public"."blog_posts" from "authenticated";

revoke select on table "public"."blog_posts" from "authenticated";

revoke trigger on table "public"."blog_posts" from "authenticated";

revoke truncate on table "public"."blog_posts" from "authenticated";

revoke update on table "public"."blog_posts" from "authenticated";

revoke delete on table "public"."blog_posts" from "service_role";

revoke insert on table "public"."blog_posts" from "service_role";

revoke references on table "public"."blog_posts" from "service_role";

revoke select on table "public"."blog_posts" from "service_role";

revoke trigger on table "public"."blog_posts" from "service_role";

revoke truncate on table "public"."blog_posts" from "service_role";

revoke update on table "public"."blog_posts" from "service_role";

alter table "public"."blog_posts" drop constraint "blog_posts_pkey";

drop index if exists "public"."blog_posts_pkey";

drop table "public"."blog_posts";

alter table "public"."workflows" alter column "enabled" set default true;



