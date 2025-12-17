-- Update tables for semillero registration with new fields

-- Drop the old registrations table since we're changing the structure completely
DROP TABLE IF EXISTS registrations;

-- Create new semillero_registrations table for semillero applications
CREATE TABLE IF NOT EXISTS semillero_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Semillero Information
  semillero_name TEXT NOT NULL,
  semillero_description TEXT NOT NULL,
  semillero_faculty TEXT NOT NULL,
  semillero_type TEXT NOT NULL CHECK (semillero_type IN ('Investigación', 'Creación', 'Investigación y creación')),
  semillero_image_url TEXT,
  
  -- Leader Information
  leader_name TEXT NOT NULL,
  leader_email TEXT NOT NULL,
  leader_role TEXT NOT NULL,
  
  -- Second Leader Information (optional replacement)
  second_leader_name TEXT,
  second_leader_email TEXT,
  second_leader_role TEXT,
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_semillero_registrations_status ON semillero_registrations(status);
CREATE INDEX IF NOT EXISTS idx_semillero_registrations_faculty ON semillero_registrations(semillero_faculty);
CREATE INDEX IF NOT EXISTS idx_semillero_registrations_type ON semillero_registrations(semillero_type);
CREATE INDEX IF NOT EXISTS idx_semillero_registrations_created_at ON semillero_registrations(created_at DESC);
