-- Update documents table with real PIP documents
DELETE FROM documents;

INSERT INTO documents (title, description, category, author, file_type, file_url, upload_date) VALUES
(
  'Programa de Investigación y Creación en Pregrado y Posgrado',
  'Documento oficial que describe el Programa de Investigación y Creación en Pregrado y Posgrado de la Universidad de los Andes. Incluye objetivos, estructura y oportunidades para estudiantes.',
  'Normatividad',
  'Vicerrectoría de Investigación y Creación',
  'PDF',
  '/documents/Programa-de-Investigacion-y-Creacion-en-Pregrado-y-Posgrado.pdf',
  '2024-01-15'
),
(
  'Manual del Investigador',
  'Guía completa para estudiantes que participan en actividades de investigación. Incluye procedimientos, mejores prácticas y recursos disponibles.',
  'Manuales',
  'Vicerrectoría de Investigación y Creación',
  'PDF',
  '/documents/Manual-del-investigador.pdf',
  '2024-01-15'
),
(
  'Lineamientos Generales para Semilleros de Investigación',
  'Documento que establece el marco general para el funcionamiento de los semilleros de investigación en todas las facultades. Incluye creación, gobernanza, apoyo administrativo, recursos y reporte anual.',
  'Normatividad',
  'Vicerrectoría de Investigación y Creación',
  'PDF',
  '/documents/Lineamientos_generales_semilleros.pdf',
  '2024-01-15'
),
(
  'Manual del Consejero',
  'Guía para consejeros de investigación que acompañan a estudiantes de pregrado. Incluye cómo apoyar la investigación, identificar semilleros, orientar estudiantes y compartir aprendizajes.',
  'Manuales',
  'Vicerrectoría de Investigación y Creación',
  'PDF',
  '/documents/Manual-del-Consejero.pdf',
  '2022-01-01'
);
