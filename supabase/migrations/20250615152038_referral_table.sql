create table "public"."referrals" (
    "id" uuid not null default uuid_generate_v4(),
    "referral_code" character varying(6) not null default ''::character varying,
    "wallet_address" character varying(255) not null,
    "wallet_type" text not null,
    "referred_by" character varying(6),
    "is_wallet_verified" boolean default false,
    "created_at" timestamp without time zone default CURRENT_TIMESTAMP
);


alter table "public"."referrals" enable row level security;

CREATE INDEX idx_referrals_code ON public.referrals USING btree (referral_code);

CREATE INDEX idx_referrals_created_at ON public.referrals USING btree (created_at);

CREATE INDEX idx_referrals_is_wallet_verified ON public.referrals USING btree (is_wallet_verified);

CREATE INDEX idx_referrals_referred_by ON public.referrals USING btree (referred_by);

CREATE INDEX idx_referrals_wallet ON public.referrals USING btree (wallet_address);

CREATE INDEX idx_referrals_wallet_type ON public.referrals USING btree (wallet_type);

CREATE UNIQUE INDEX referrals_pkey ON public.referrals USING btree (id);

CREATE UNIQUE INDEX referrals_referral_code_key ON public.referrals USING btree (referral_code);

alter table "public"."referrals" add constraint "referrals_pkey" PRIMARY KEY using index "referrals_pkey";

alter table "public"."referrals" add constraint "referrals_referral_code_key" UNIQUE using index "referrals_referral_code_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.auto_generate_referral_code()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    -- Only generate code if it's empty or null
    IF NEW.referral_code IS NULL OR NEW.referral_code = '' THEN
        NEW.referral_code := generate_referral_code();
    END IF;
    
    RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.generate_referral_code()
 RETURNS character varying
 LANGUAGE plpgsql
AS $function$
DECLARE
    chars TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    result VARCHAR(6) := '';
    i INTEGER;
    code_exists BOOLEAN := TRUE;
BEGIN
    WHILE code_exists LOOP
        result := '';
        -- Generate 6 random characters
        FOR i IN 1..6 LOOP
            result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
        END LOOP;
        
        -- Check if code already exists
        SELECT EXISTS(SELECT 1 FROM referrals WHERE referral_code = result) INTO code_exists;
    END LOOP;
    
    RETURN result;
END;
$function$
;

grant delete on table "public"."referrals" to "anon";

grant insert on table "public"."referrals" to "anon";

grant references on table "public"."referrals" to "anon";

grant select on table "public"."referrals" to "anon";

grant trigger on table "public"."referrals" to "anon";

grant truncate on table "public"."referrals" to "anon";

grant update on table "public"."referrals" to "anon";

grant delete on table "public"."referrals" to "authenticated";

grant insert on table "public"."referrals" to "authenticated";

grant references on table "public"."referrals" to "authenticated";

grant select on table "public"."referrals" to "authenticated";

grant trigger on table "public"."referrals" to "authenticated";

grant truncate on table "public"."referrals" to "authenticated";

grant update on table "public"."referrals" to "authenticated";

grant delete on table "public"."referrals" to "service_role";

grant insert on table "public"."referrals" to "service_role";

grant references on table "public"."referrals" to "service_role";

grant select on table "public"."referrals" to "service_role";

grant trigger on table "public"."referrals" to "service_role";

grant truncate on table "public"."referrals" to "service_role";

grant update on table "public"."referrals" to "service_role";

create policy "Allow anonymous insert on referrals"
on "public"."referrals"
as permissive
for insert
to anon
with check (true);


create policy "Allow anonymous select on referrals"
on "public"."referrals"
as permissive
for select
to anon
using (true);


CREATE TRIGGER trigger_auto_generate_referral_code BEFORE INSERT ON public.referrals FOR EACH ROW EXECUTE FUNCTION auto_generate_referral_code();


