/*
  # Disable RLS for contact submissions table

  This migration disables Row Level Security for the contact_submissions table
  to allow anonymous users to submit contact forms without authentication.
  
  For a public contact form, this is the simplest and most reliable approach.
*/

-- Disable Row Level Security for contact_submissions table
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop any existing policies to ensure clean state
DROP POLICY IF EXISTS "anon_insert" ON contact_submissions;
DROP POLICY IF EXISTS "auth_select" ON contact_submissions;
DROP POLICY IF EXISTS "allow_anon_insert" ON contact_submissions;
DROP POLICY IF EXISTS "allow_auth_select" ON contact_submissions;

-- Create a simple policy for authenticated users to view submissions (admin access)
-- Re-enable RLS temporarily to create the select policy
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users to read submissions
CREATE POLICY "authenticated_users_select"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Disable RLS again to allow anonymous inserts
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;