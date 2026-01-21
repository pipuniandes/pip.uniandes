-- Agregar política para que todos puedan ver documentos públicos
DROP POLICY IF EXISTS "Anyone can view documents" ON documents;

CREATE POLICY "Anyone can view documents"
ON documents
FOR SELECT
TO public
USING (true);

-- Verificar que los documentos existen
SELECT id, title, category, file_url FROM documents ORDER BY upload_date DESC;
