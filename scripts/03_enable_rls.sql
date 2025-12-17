-- Enable Row Level Security (RLS) for all tables

ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE semilleros ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- News policies: Everyone can read, only authenticated users can create/update
CREATE POLICY "Anyone can view news" ON news FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert news" ON news FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update news" ON news FOR UPDATE USING (auth.role() = 'authenticated');

-- Semilleros policies: Everyone can read, only authenticated users can create/update
CREATE POLICY "Anyone can view semilleros" ON semilleros FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert semilleros" ON semilleros FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update semilleros" ON semilleros FOR UPDATE USING (auth.role() = 'authenticated');

-- Documents policies: Everyone can read, only authenticated users can create
CREATE POLICY "Anyone can view documents" ON documents FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert documents" ON documents FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Registrations policies: Users can only see their own registrations, authenticated users can create
CREATE POLICY "Users can view their own registrations" ON registrations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Authenticated users can create registrations" ON registrations FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update their own registrations" ON registrations FOR UPDATE USING (auth.uid() = user_id);
