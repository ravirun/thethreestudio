-- Run this in Supabase SQL editor to create the contact_messages table

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  phone text not null,
  email text not null,
  project_details text not null,
  source text default 'website',
  created_at timestamptz not null default now()
);

-- Recommended RLS (allow inserts from service role only)
alter table public.contact_messages enable row level security;

-- Optional: Create a policy to allow service role to insert
-- (This is usually not needed as service role bypasses RLS)
-- create policy "Service role can insert contact messages" on contact_messages
--   for insert to service_role using (true);
