/*
  # Simplify RLS Policy for Contact Form

  1. Security Changes
    - Remove all existing policies
    - Disable and re-enable RLS to reset state
    - Create simple policy allowing all anonymous inserts
    - Allow authenticated users to read all data
*/

-- Disable RLS temporarily
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can read own data" ON contact_submissions;
DROP POLICY IF EXISTS "Enable anonymous contact form submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable authenticated users to read all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read access" ON contact_submissions;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create simple insert policy for anonymous users
CREATE POLICY "anon_insert" ON contact_submissions
    FOR INSERT TO anon
    WITH CHECK (true);

-- Create select policy for authenticated users
CREATE POLICY "auth_select" ON contact_submissions
    FOR SELECT TO authenticated
    USING (true);