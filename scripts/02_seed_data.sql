-- Seed data for PIP website

-- Insert sample news
INSERT INTO news (title, excerpt, content, image_url, author, category) VALUES
('Grabación Taller #4 PIP 2023-10', 'Conoce los detalles del último taller de investigación', 'En este taller abordamos las metodologías de investigación cualitativa y cuantitativa, con énfasis en el análisis de datos y la presentación de resultados. Los estudiantes pudieron participar activamente en ejercicios prácticos y recibir retroalimentación de expertos.', '/placeholder.svg?height=400&width=800', 'Coordinación PIP', 'Talleres'),
('Convocatoria 2024-1 ya está abierta', 'Inscríbete a los semilleros de investigación', 'La convocatoria para el semestre 2024-1 está oficialmente abierta. Los estudiantes interesados en participar en proyectos de investigación pueden inscribirse hasta el 15 de enero. Se ofrecen oportunidades en todas las facultades de la universidad.', '/placeholder.svg?height=400&width=800', 'Vicerrectoría de Investigación', 'Convocatorias'),
('Resultados destacados de semilleros 2023', 'Nuestros estudiantes brillan en investigación', 'Durante el año 2023, los semilleros de investigación de la Universidad de los Andes lograron publicar 45 artículos en revistas indexadas, presentar 78 ponencias en congresos nacionales e internacionales, y ganar 12 premios en diferentes competencias académicas.', '/placeholder.svg?height=400&width=800', 'Coordinación PIP', 'Logros');

-- Insert sample semilleros
INSERT INTO semilleros (name, description, faculty, area, coordinator, email, is_funded) VALUES
('Semillero de Inteligencia Artificial', 'Investigación en machine learning, deep learning y aplicaciones de IA en diferentes dominios. Trabajamos con herramientas como TensorFlow, PyTorch y desarrollamos proyectos innovadores.', 'Ingeniería', 'Ciencia', 'Dr. Juan Pérez', 'j.perez@uniandes.edu.co', true),
('Semillero de Arte Digital', 'Exploración de nuevas formas de expresión artística mediante tecnologías digitales, realidad virtual y aumentada. Creamos instalaciones interactivas y experiencias inmersivas.', 'Artes y Humanidades', 'Arte', 'Dra. María García', 'm.garcia@uniandes.edu.co', true),
('Semillero de Sostenibilidad Urbana', 'Investigación en desarrollo sostenible, urbanismo ecológico y soluciones innovadoras para ciudades del futuro. Colaboramos con comunidades locales.', 'Arquitectura y Diseño', 'Desarrollo sostenible', 'Dr. Carlos Rodríguez', 'c.rodriguez@uniandes.edu.co', true),
('Semillero de Economía Comportamental', 'Estudio del comportamiento humano en contextos económicos, tomando decisiones financieras y políticas públicas basadas en evidencia.', 'Economía', 'Ciencia', 'Dra. Ana Martínez', 'a.martinez@uniandes.edu.co', false),
('Semillero de Narrativas Transmedia', 'Creación de historias que se expanden a través de múltiples plataformas y medios, explorando nuevas formas de contar historias.', 'Artes y Humanidades', 'Arte', 'Dr. Luis Fernández', 'l.fernandez@uniandes.edu.co', false),
('Semillero de Biología Molecular', 'Investigación en genética, biología celular y molecular aplicada a la medicina y biotecnología.', 'Ciencias', 'Ciencia', 'Dra. Sofia López', 's.lopez@uniandes.edu.co', true);

-- Insert sample documents
INSERT INTO documents (title, description, file_url, category, author, file_type) VALUES
('Guía de Investigación en Pregrado', 'Manual completo para estudiantes que desean iniciar en investigación', '/documents/guia-investigacion.pdf', 'Guías', 'Coordinación PIP', 'PDF'),
('Formato de Inscripción', 'Formato oficial para inscripción a semilleros', '/documents/formato-inscripcion.docx', 'Formatos', 'Coordinación PIP', 'DOCX'),
('Reglamento PIP 2024', 'Reglamento actualizado del programa de investigación', '/documents/reglamento-pip-2024.pdf', 'Reglamentos', 'Vicerrectoría', 'PDF'),
('Metodología de Investigación Cualitativa', 'Documento de apoyo sobre métodos cualitativos', '/documents/metodologia-cualitativa.pdf', 'Guías', 'Dr. Pedro Sánchez', 'PDF');
