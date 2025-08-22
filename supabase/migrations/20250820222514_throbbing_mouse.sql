/*
  # Fix Row Level Security Policy for Contact Submissions

  1. Security Updates
    - Drop existing policies to ensure clean state
    - Recreate policy to allow anonymous contact form submissions
    - Ensure anon role can insert data into contact_submissions table
*/

-- Drop existing policies to start clean
drop policy if exists "Allow anonymous contact submissions" on contact_submissions;
drop policy if exists "Allow authenticated users to read submissions" on contact_submissions;

-- Ensure RLS is enabled
alter table contact_submissions enable row level security;

-- Create policy allowing anonymous users to insert contact submissions
create policy "Enable anonymous contact form submissions"
  on contact_submissions
  for insert
  to anon
  with check (true);

-- Create policy allowing authenticated users to read submissions (for admin)
create policy "Enable authenticated users to read all submissions"
  on contact_submissions
  for select
  to authenticated
  using (true);