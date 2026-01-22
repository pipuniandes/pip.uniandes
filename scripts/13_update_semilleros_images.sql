-- Script para actualizar las imágenes de los semilleros activos
-- Solo se asignan imágenes a semilleros que están activos

-- Semillero de Ingeniería celular y Bioimpresión (Activo - Ingeniería)
UPDATE semilleros 
SET image_url = '/images/ingenieria-celular-y-bioimpresion.png'
WHERE name ILIKE '%Ingeniería celular%' OR name ILIKE '%Bioimpresión%';

-- Semillero de Resolución de Conflictos (Activo - Derecho)
UPDATE semilleros 
SET image_url = '/images/imagen-semillero-resolucion-de-conflictos.jpg'
WHERE name ILIKE '%Resolución de Conflictos%';

-- Semillero de Liderazgo público (Activo - Gobierno)
UPDATE semilleros 
SET image_url = '/images/liderazgo-publico.jpg'
WHERE name ILIKE '%Liderazgo público%' OR name ILIKE '%Liderazgo publico%';

-- Semillero de Movilidad sostenible y territorio (Activo - ArquiDis)
UPDATE semilleros 
SET image_url = '/images/movilidad-sostenible-y-territorio.jpeg'
WHERE name ILIKE '%Movilidad sostenible%' OR name ILIKE '%territorio%';

-- Robocol (Activo - Ingeniería)
UPDATE semilleros 
SET image_url = '/images/robocol.jpg'
WHERE name ILIKE '%Robocol%';

-- Semillero de fotografía (Activo - Artes y Humanidades)
UPDATE semilleros 
SET image_url = '/images/semillero-de-fotografia.jpg'
WHERE name ILIKE '%fotografía%' OR name ILIKE '%fotografia%';

-- Semillero de investigación en neurociencia social (Activo - Ciencias Sociales)
UPDATE semilleros 
SET image_url = '/images/neurociencia-social.jpg'
WHERE name ILIKE '%neurociencia social%';

-- Laboratorio de cognición (Activo - Ciencias Sociales)
UPDATE semilleros 
SET image_url = '/images/semillero-de-cognicion-y-psicofisiologia.jpg'
WHERE name ILIKE '%Laboratorio de cognición%' OR name ILIKE '%cognicion%';

-- Grupo Uniandino de Ornitología GUO (Activo - Ciencias)
UPDATE semilleros 
SET image_url = '/images/ornitologia-guo.jpeg'
WHERE name ILIKE '%Ornitología%' OR name ILIKE '%GUO%';

-- POLAR - Semillero de Polinización en el Páramo (Activo - Ciencias)
UPDATE semilleros 
SET image_url = '/images/polar-polinizacion-paramo.png'
WHERE name ILIKE '%POLAR%' OR name ILIKE '%Polinización%';

-- Nota: Los siguientes semilleros NO están activos, por lo tanto no se les asigna imagen:
-- - Investigaciones Biomédicas
-- - Nanomateriales para aplicaciones en la industria electrónica
-- - Memoria y paz
-- - Postdesarrollo
-- - Neurociencia y comportamiento
-- - Neurofisiología del ejercicio
-- - Salud Visible
-- - Organizaciones y paz
