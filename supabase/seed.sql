SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '7368c099-e707-4d5d-a434-7d4167317c1f', '{"action":"user_signedup","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"team","traits":{"provider":"github"}}', '2025-01-15 11:50:21.070881+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ca79f00-1ad7-47f7-bd58-62ca12c21ce9', '{"action":"login","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"github"}}', '2025-01-15 11:50:21.363297+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd082ed53-f78a-4c87-995b-3a9451904736', '{"action":"user_signedup","actor_id":"ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17","actor_name":"TonVilleGod","actor_username":"admin@tonville.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"github"}}', '2025-01-15 11:57:00.328101+00', ''),
	('00000000-0000-0000-0000-000000000000', '6b026070-3ff5-478c-a5f6-57ad955ea3d4', '{"action":"login","actor_id":"ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17","actor_name":"TonVilleGod","actor_username":"admin@tonville.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"github"}}', '2025-01-15 11:57:00.606165+00', ''),
	('00000000-0000-0000-0000-000000000000', '95003ed1-c7a4-4f34-84f9-53cb956d8990', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 12:51:33.40586+00', ''),
	('00000000-0000-0000-0000-000000000000', '46c3b54e-bde2-4c27-8e42-c3d5b3bf68d1', '{"action":"token_revoked","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 12:51:33.407225+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e6e49fe-a66e-4bc5-bac8-7c77d596ee3c', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 13:51:34.517628+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a34aaea-fede-4e5c-9b59-7609cc7b5771', '{"action":"token_revoked","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 13:51:34.518738+00', ''),
	('00000000-0000-0000-0000-000000000000', '330c12fa-80c8-4a61-9666-fa5a61bd8c22', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 13:51:34.592346+00', ''),
	('00000000-0000-0000-0000-000000000000', '6750e72a-b60a-44cc-9704-25f01b31567e', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 14:52:39.187183+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9e4dd17-79a1-46a7-92a5-c583b99b9723', '{"action":"token_revoked","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 14:52:39.187951+00', ''),
	('00000000-0000-0000-0000-000000000000', '12e05666-e168-42d6-8fa9-6805f25a0ccb', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 19:52:13.995196+00', ''),
	('00000000-0000-0000-0000-000000000000', '40f5d97c-9ba3-4500-9411-1dbc723a3afd', '{"action":"token_revoked","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 19:52:13.995874+00', ''),
	('00000000-0000-0000-0000-000000000000', '54b608b2-3140-479c-aec9-5d2d26eb9eef', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 19:52:15.019925+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ef6e39b-3f80-497b-89c1-b804f3b25bc4', '{"action":"login","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"account","traits":{"provider":"github"}}', '2025-01-15 19:52:17.861351+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4511dda-8126-4722-8e02-403521befd96', '{"action":"token_refreshed","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"token"}', '2025-01-15 19:52:18.100137+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbf8d532-4289-4e2d-9c5b-d3b895352190', '{"action":"login","actor_id":"c8e84cfc-ead4-45d2-a7f5-1f084125fd2b","actor_name":"aloshy.🅰🅸","actor_username":"noreply@aloshy.ai","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"github"}}', '2025-01-15 19:52:18.105175+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('f2e4ae9c-8c63-4654-bf9b-be53a767e1c2', NULL, '0a0b042d-fa1d-48c7-891b-578c2df98c8c', 's256', 'LBhONiQRYLWbs61yOuJUs0c8wUTNpbv4UWiVBGdK-5w', 'github', '', '', '2025-01-15 11:50:18.830427+00', '2025-01-15 11:50:18.830427+00', 'oauth', NULL),
	('9ba99cc3-7ad2-4a8c-bd4d-0c5ba0e6a86b', NULL, '24ae12a9-bd15-4bea-b40a-171b3bcc5adc', 's256', 'Ra1upHNfNSqaPPp2-8NqdmASwTWljhlK1SV2ev74PeY', 'github', '', '', '2025-01-15 11:56:48.295291+00', '2025-01-15 11:56:48.295291+00', 'oauth', NULL),
	('31030385-57dc-4de3-91d9-837fdc5acf2a', NULL, 'ac999bc2-44a7-48fb-9fbb-ee4f1f49da33', 's256', 'BnXNqVb1UGBDnKYWHAtP6xSKB0ccWakLHFlsOIGOhN0', 'github', '', '', '2025-01-15 19:52:13.980854+00', '2025-01-15 19:52:13.980854+00', 'oauth', NULL),
	('b7f31bce-26cd-49f2-a34a-f30097807483', NULL, 'eea6b855-981c-4390-b738-f6d5da85f00e', 's256', 'GLmG1Co8TozUqHiDs34gANrmKiZ6Ds9uNElwZX_nddY', 'github', '', '', '2025-01-15 19:52:18.408471+00', '2025-01-15 19:52:18.408471+00', 'oauth', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', 'authenticated', 'authenticated', 'admin@tonville.com', NULL, '2025-01-15 11:57:00.328638+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-01-15 11:57:00.606465+00', '{"provider": "github", "providers": ["github"]}', '{"iss": "https://api.github.com", "sub": "171122064", "name": "TonVilleGod", "email": "admin@tonville.com", "full_name": "TonVilleGod", "user_name": "tonvillegod", "avatar_url": "https://avatars.githubusercontent.com/u/171122064?v=4", "provider_id": "171122064", "email_verified": true, "phone_verified": false, "preferred_username": "tonvillegod"}', NULL, '2025-01-15 11:57:00.32178+00', '2025-01-15 11:57:00.607209+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', 'authenticated', 'authenticated', 'noreply@aloshy.ai', NULL, '2025-01-15 11:50:21.071909+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-01-15 19:52:18.10582+00', '{"provider": "github", "providers": ["github"]}', '{"iss": "https://api.github.com", "sub": "88331242", "name": "aloshy.🅰🅸", "email": "noreply@aloshy.ai", "full_name": "aloshy.🅰🅸", "user_name": "aloshy-ai", "avatar_url": "https://avatars.githubusercontent.com/u/88331242?v=4", "provider_id": "88331242", "email_verified": true, "phone_verified": false, "preferred_username": "aloshy-ai"}', NULL, '2025-01-15 11:50:21.061414+00', '2025-01-15 19:52:18.107724+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('171122064', 'ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', '{"iss": "https://api.github.com", "sub": "171122064", "name": "TonVilleGod", "email": "admin@tonville.com", "full_name": "TonVilleGod", "user_name": "tonvillegod", "avatar_url": "https://avatars.githubusercontent.com/u/171122064?v=4", "provider_id": "171122064", "email_verified": true, "phone_verified": false, "preferred_username": "tonvillegod"}', 'github', '2025-01-15 11:57:00.32499+00', '2025-01-15 11:57:00.325037+00', '2025-01-15 11:57:00.325037+00', '5b238b63-88d9-47eb-bc88-bbcf58cd59c9'),
	('88331242', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', '{"iss": "https://api.github.com", "sub": "88331242", "name": "aloshy.🅰🅸", "email": "noreply@aloshy.ai", "full_name": "aloshy.🅰🅸", "user_name": "aloshy-ai", "avatar_url": "https://avatars.githubusercontent.com/u/88331242?v=4", "provider_id": "88331242", "email_verified": true, "phone_verified": false, "preferred_username": "aloshy-ai"}', 'github', '2025-01-15 11:50:21.067617+00', '2025-01-15 11:50:21.067675+00', '2025-01-15 19:52:17.857056+00', '30ac2a6d-2f80-4010-8c2a-04e57e0c440a');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('473e0af4-41f0-458c-bc43-186e405fca55', 'ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', '2025-01-15 11:57:00.6065+00', '2025-01-15 11:57:00.6065+00', NULL, 'aal1', NULL, NULL, 'node', '172.21.0.1', NULL),
	('d0951742-04c6-478d-a56e-a32581d0acc8', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', '2025-01-15 11:50:21.363689+00', '2025-01-15 19:52:18.101192+00', NULL, 'aal1', NULL, '2025-01-15 19:52:18.101146', 'node', '172.21.0.1', NULL),
	('bb2df02e-560d-44b6-9975-4e1f97960b45', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', '2025-01-15 19:52:18.105887+00', '2025-01-15 19:52:18.105887+00', NULL, 'aal1', NULL, NULL, 'node', '172.21.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('d0951742-04c6-478d-a56e-a32581d0acc8', '2025-01-15 11:50:21.365814+00', '2025-01-15 11:50:21.365814+00', 'oauth', '34c89f16-81e6-4174-a614-b2325236a724'),
	('473e0af4-41f0-458c-bc43-186e405fca55', '2025-01-15 11:57:00.60732+00', '2025-01-15 11:57:00.60732+00', 'oauth', 'd663fa82-4533-43d7-af3a-1b8f74730e46'),
	('bb2df02e-560d-44b6-9975-4e1f97960b45', '2025-01-15 19:52:18.108096+00', '2025-01-15 19:52:18.108096+00', 'oauth', 'f9cc3434-0f00-4228-b54e-31bb7293d9b2');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 2, 'TEsJ60kyrZztLVV3lV0j0g', 'ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', false, '2025-01-15 11:57:00.606828+00', '2025-01-15 11:57:00.606828+00', NULL, '473e0af4-41f0-458c-bc43-186e405fca55'),
	('00000000-0000-0000-0000-000000000000', 1, 'P0A8Z-q3H9-uoDUdBY4DQg', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', true, '2025-01-15 11:50:21.364877+00', '2025-01-15 12:51:33.408011+00', NULL, 'd0951742-04c6-478d-a56e-a32581d0acc8'),
	('00000000-0000-0000-0000-000000000000', 3, 'nU_3OuZKz7MWuVSaerAJpw', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', true, '2025-01-15 12:51:33.409023+00', '2025-01-15 13:51:34.519472+00', 'P0A8Z-q3H9-uoDUdBY4DQg', 'd0951742-04c6-478d-a56e-a32581d0acc8'),
	('00000000-0000-0000-0000-000000000000', 4, 's-xGUqqWN6lnuyAMWkeWDA', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', true, '2025-01-15 13:51:34.520319+00', '2025-01-15 14:52:39.188397+00', 'nU_3OuZKz7MWuVSaerAJpw', 'd0951742-04c6-478d-a56e-a32581d0acc8'),
	('00000000-0000-0000-0000-000000000000', 5, 'vbvLv1EdG23nNhNPEMfDvg', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', true, '2025-01-15 14:52:39.188879+00', '2025-01-15 19:52:13.996409+00', 's-xGUqqWN6lnuyAMWkeWDA', 'd0951742-04c6-478d-a56e-a32581d0acc8'),
	('00000000-0000-0000-0000-000000000000', 6, 'gmmwjWFL1RDUjewY0C_2dg', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', false, '2025-01-15 19:52:13.998927+00', '2025-01-15 19:52:13.998927+00', 'vbvLv1EdG23nNhNPEMfDvg', 'd0951742-04c6-478d-a56e-a32581d0acc8'),
	('00000000-0000-0000-0000-000000000000', 7, 'dKVu3Qhhq2p7bgxwjkLk1Q', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', false, '2025-01-15 19:52:18.106926+00', '2025-01-15 19:52:18.106926+00', NULL, 'bb2df02e-560d-44b6-9975-4e1f97960b45');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "first_name", "last_name") VALUES
	('c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', NULL, NULL),
	('ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', NULL, NULL);


--
-- Data for Name: workflows; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."workflows" ("created_at", "workflow", "enabled", "description", "name", "user_id", "id") VALUES
	('2024-09-14 15:46:53.822922+00', '{"edges": [{"to": "1", "from": "$source"}], "actions": [{"id": "1", "kind": "generate_linkedin_posts", "name": "Generate LinkedIn posts"}]}', true, 'Getting a review from AI', 'When a blog post is moved to review', 'c8e84cfc-ead4-45d2-a7f5-1f084125fd2b', '746d6b46-c206-4231-a798-5e39775845fa'),
	('2024-09-14 20:19:41.892865+00', '{"edges": [{"to": "1", "from": "$source"}], "actions": [{"id": "1", "kind": "generate_tweet_posts", "name": "Generate Twitter posts"}]}', true, 'Actions performed to optimize the distribution of blog posts', 'When a blog post is published', 'ee136acd-31f0-4e8c-ae1d-7bb9bd1f5c17', 'ee24d1e0-7f07-4c0c-8ff5-e56a9300e04f');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 7, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
