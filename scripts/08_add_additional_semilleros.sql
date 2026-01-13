-- Add status column to semilleros table
ALTER TABLE semilleros ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'Activo';

-- Update existing semilleros to have 'Activo' status
UPDATE semilleros SET status = 'Activo' WHERE status IS NULL;

-- Insert additional semilleros from the new list
INSERT INTO semilleros (name, description, faculty, area, coordinator, email, image_url, status, is_funded) VALUES
-- Economía
('Macro', 'El semillero macro nació en 2017 por la iniciativa de un grupo de estudiantes que querían reunirse a profundizar en temas de frontera en la investigación macroeconómica.', 'Economía', 'Investigación', 'David Perez-Reyna', 'd.perez-reyna@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('EconoMÍA y Género', 'Desde MÍA Uniandes creamos el Semillero de Investigación EconoMÍA y Género, el cual busca tener un espacio de discusión de artículos académicos de economía sobre temas de género.', 'Economía', 'Investigación', 'Daniela Vlasak', 'd.vlasak@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Investigación de Adam Smith', 'El semillero nació este semestre 2023-1 para estudiar la teoría moral y estética de Adam Smith y comprender sus vínculos con la teoría del valor.', 'Economía', 'Investigación', 'Jimena Hurtado', 'jihurtad@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Medicina
('Ciencias Básicas Médicas', 'Aplicaciones de la citometría de flujo, Neuroinmmunología, Respuesta inmune a enfermedades infecciosas.', 'Medicina', 'Investigación', 'John Mario González Escobar', 'johgonza@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Diabetes, lípidos y metabolismo UniAndes', 'Grupo de investigación enfocado en temáticas relacionadas con el metabolismo humano y sus alteraciones, desde las perspectivas básica, clínica y epidemiológica.', 'Medicina', 'Investigación', 'Carlos Olimpo Mendivil Anaya', 'cmendivi@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Grupo de epidemiología de la Universidad de los Andes (Epiandes)', 'Actividad física y nutrición, Economía de la Salud, Enfermedades crónicas y estilo de vida, Epidemiología Clínica.', 'Medicina', 'Investigación', 'Olga Lucía Sarmiento', 'osarmien@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Neurociencia Traslacional', 'Semillero interdisciplinario en medicina que integra las ciencias básicas en la medicina humana aplicada a modelo animal pez cebra.', 'Medicina', 'Investigación', 'Natalia Mejía Gaviria', 'nmejia@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('REUMAVANCE', 'Grupo inter y transdisciplinar que busca responder a vacíos del conocimiento en el área de la autoinmunidad y enfermedades reumatológicas.', 'Medicina', 'Investigación', 'Gerardo Quintana López', 'g.quintana20@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Neurofisiología Celular', 'Trabajamos proyectos enfocados al estudio de los procesos neuroinflamatorios de las enfermedades neurodegenerativas.', 'Medicina', 'Investigación', 'Karina Vargas Sanchez', 'j.vargass@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Laboratorio de Ciencias Básicas Médicas (CBMU)', 'El grupo cuenta con un laboratorio en el cual se pueden desarrollar técnicas relacionadas con biología celular, y pruebas de la inmunidad celular y humoral.', 'Medicina', 'Investigación', 'John M. González', 'johgonza@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Investigación en Ortopedia y Traumatología', 'El semillero busca fomentar la formación académica e investigativa de estudiantes y profesionales interesados en profundizar en esta especialidad médica.', 'Medicina', 'Investigación', 'Manuela Lorduy Ariza', 'm.lorduy@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Derecho
('Estudios Interdisciplinarios en Tributación (SEIT)', 'Semillero dedicado a la investigación en estudios interdisciplinarios de la tributación con participación de estudiantes de Derecho, Economía y Especialización en Tributación.', 'Derecho', 'Investigación', 'Eleonora Lozano', 'elozano@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Público Administrativo (SPA)', 'Espacio de encuentro para la discusión y reflexión de temas relacionados con el derecho administrativo.', 'Derecho', 'Investigación', 'Carolina Moreno', 'camoreno@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Resolución de Conflictos', 'Espacio diseñado para la creación de una comunidad académica dedicada a la reflexión crítica sobre el conflicto y los mecanismos de resolución de controversias.', 'Derecho', 'Investigación', 'Emilce Coy', 'cj.conciliacion@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Ingeniería
('Robocol', 'Iniciativa estudiantil enfocada en el desarrollo de proyectos de robótica para competencias internacionales.', 'Ingeniería', 'Investigación', 'Maria Camila Martinez', 'robocol@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de la línea de investigación de Ingeniería celular y Bioimpresión', 'Línea de investigación en ingeniería celular y bioimpresión.', 'Ingeniería', 'Investigación', 'Carolina Muñoz camargo', 'c.munoz2016@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de investigación en Biomecánica - IBIOMECH', 'Espacio destinado al estudio del movimiento humano, especialmente enfocado en el análisis de gestos deportivos y diseño de dispositivos ortopédicos.', 'Ingeniería', 'Investigación', 'Christian Javier Cifuentes De la Portilla', 'cc.cifuentes@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Ciencias Sociales
('Geografías del Poder', 'El Semillero tiene como centro el trabajo con comunidades para promover el empoderamiento territorial, la organización y la capacidad de acción comunitaria.', 'Ciencias Sociales', 'Investigación', 'Luis Sánchez', 'ld.sanchez20@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Laboratorio Urbano. NextGenC Generacion Conectada', 'Laboratorio urbano enfocado en la nueva generación conectada.', 'Ciencias Sociales', 'Investigación', 'Friederike Fleischer', 'f.fleischer406@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Narcolombia', 'Semillero de investigación y creación sobre narcotráfico en Colombia.', 'Ciencias Sociales', 'Investigación y creación', 'Xavier Andrade', 'sj.andrade@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Laboratorio de cognición', 'El laboratorio de cognición es un espacio de formación e investigación con énfasis en habilidades básicas de investigación mediante análisis de datos cuantitativos.', 'Ciencias Sociales', 'Investigación', 'William Jiménez', 'w.jimenezleal@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de investigación en neurociencia social', 'Espacio que pretende propiciar el desarrollo de habilidades investigativas en neurociencia social.', 'Ciencias Sociales', 'Investigación', 'Sandra Jimena Báez Buitrago', 'sj.baez@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Psicogerontología', 'Este semillero tiene como finalidad fomentar el desarrollo de habilidades en investigación para el estudio del envejecimiento y la vejez.', 'Ciencias Sociales', 'Investigación', 'Maria Fernanda Reyes', 'm.reyes8@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('EcoBites', 'Este semillero tiene como objetivo discutir algunos conceptos propios de la teoría ecológica de la percepción.', 'Ciencias Sociales', 'Investigación', 'Tomás Barrero Guzmán', 'ta.barrero32@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- ArquiDis
('Movilidad sostenible y territorio', 'Semillero de investigación en movilidad sostenible y territorio.', 'ArquiDis', 'Investigación', 'C. ERIK VERGEL-TOVAR', 'c.vergel@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Cuerpo y movimiento expandido', 'Este semillero se centra en el papel inaugural que juega el movimiento del cuerpo en la conformación del espacio y la experiencia del tiempo.', 'ArquiDis', 'Investigación y creación', 'Lucas Ariza Parada', 'l.ariza48@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Diseño inspirado en Emociones', 'El objetivo general del semillero es consolidar un espacio para compartir, discutir, construir y desarrollar proyectos relacionados al Diseño Inspirado en las Emociones.', 'ArquiDis', 'Investigación y creación', 'Angie Henríquez Martínez', 'a.henriquez1291@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Observatorio de Arquitectura en Colombia', 'Observatorio dedicado al estudio de la arquitectura en Colombia.', 'ArquiDis', 'Investigación y creación', 'Ingrid Quintana Guerrero', 'i.quintana20@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Artes y Humanidades
('Lo leve y lo curatorial', 'Este semillero es una pequeña comunidad flotante de personas interesadas en indagar por lo curatorial y sus dispositivos más allá del vehículo del formato expositivo.', 'Artes y Humanidades', 'Creación', 'Carolina Cerón', 'c.ceron50@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Escritura experimental', 'Semillero dedicado a la escritura experimental.', 'Artes y Humanidades', 'Creación', 'Carolina Cerón', 'c.ceron50@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero VVV', 'El semillero de creación con electrónica es un espacio informal para el desarrollo de proyectos creativos con herramientas electrónicas y de programación.', 'Artes y Humanidades', 'Creación', 'David Peña', 'd.penal@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Estudios de Japón', 'El semillero de Estudios de Japón tiene como objetivo general contribuir a la consolidación de esta área de estudio en la Universidad y el país.', 'Artes y Humanidades', 'Investigación', 'Betsy Forero Montoya', 'betsy@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de fotografía', 'El semillero de fotografía es un espacio interdisciplinar en donde se analiza y piensa el medio fotográfico desde diferentes perspectivas.', 'Artes y Humanidades', 'Investigación', 'Juanita Solano', 'juani-so@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero la Imagen Colonial', 'El semillero busca analizar cómo se produjeron, usaron y se pensaron las imágenes durante la Colonia especialmente en la Nueva Granada.', 'Artes y Humanidades', 'Investigación', 'Olga Acosta', 'oi.acosta@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Laboratorio de Arte y Arqueología Andina (L3A)', 'El L3A es un espacio de investigación y creación interdisciplinar que reúne a estudiantes interesados en el arte y la arqueología del área andina.', 'Artes y Humanidades', 'Investigación', 'Alexander Herrera', 'alherrer@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Historia y Humanidades Digitales', 'Desarrollar habilidades en los participantes para pensar la historia desde problemas conceptuales y metodológicos vinculados a las humanidades digitales.', 'Artes y Humanidades', 'Investigación', 'Maria José Afanador', 'mafanador@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('«Es de Lope»', 'Este semillero está dedicado al estudio de la obra dramática de Lope de Vega, con especial énfasis en la edición crítica.', 'Artes y Humanidades', 'Investigación', 'Santiago Restrepo', 'srestreporamirez@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Humanidades Digitales (HD)- Biblioteca Digital Soledad Acosta, 2020', 'La Biblioteca Digital Soledad Acosta de Samper busca funcionar como un repositorio para que el público acceda a la obra de la escritora.', 'Artes y Humanidades', 'Investigación y creación', 'Carolina Alzate', 'calzate@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Literatura hispánica y tradiciones discursivas', 'Se estudian corpus textuales en donde se evidencia la presencia de moldes normativos convencionalizados.', 'Artes y Humanidades', 'Investigación', 'Hugo Hernán Ramírez', 'huramire@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('María Mercedes Carranza', 'Edición y estudio del archivo de María Mercedes Carranza.', 'Artes y Humanidades', 'Investigación', 'Jerónimo Pizarro', 'j.pizarro188@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Patrimonio bibliográfico neogranadino', 'El semillero se dedica al estudio de los libros antiguos, la historia de la imprenta en Nueva Granada, la circulación de los libros y el saber.', 'Artes y Humanidades', 'Investigación', 'Andrea Lozano-Vásquez', 'a.lozano72@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Rafael Humberto Moreno-Durán', 'Edición y estudio del archivo de Rafael Humberto Moreno-Durán.', 'Artes y Humanidades', 'Investigación', 'Jerónimo Pizarro', 'j.pizarro188@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('LA COOLTURE: investigación y creación sobre la sociedad del entretenimiento', 'Este semillero de investigación y creación quiere pensar críticamente la sociedad desde la perspectiva del entretenimiento.', 'Artes y Humanidades', 'Creación', 'Omar Rincon', 'orincon@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Cuerpos que hablan', 'Cuerpos que hablan es un semillero de exploración y ejercicios de laboratorio para crear con y desde el cuerpo de manera expresiva.', 'Artes y Humanidades', 'Investigación y creación', 'Sandra Beatriz Sanchez Lopez', 'ssanchez@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('BLAST', 'El seminario busca promover la difusión de los nuevos repertorios creados en el área de composición del departamento de música.', 'Artes y Humanidades', 'Investigación', 'Laura Sophía Bacca', 'ls.bacca@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semilleros LEAP', 'Semillero LEAP en artes y humanidades.', 'Artes y Humanidades', 'Investigación', 'Mario Omar Fernández', 'mo.fernandez@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Hoja González', 'Vida y práctica de archivo a partir de la edición semana a semana del semestre académico de la publicación González.', 'Artes y Humanidades', 'Creación', 'Lucas Ospina', 'luospina@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Amanecer la Palabra', 'Trabaja en conjunto con Tramas Textiles del Departamento de Diseño.', 'Artes y Humanidades', 'Creación', 'María Margarita Jiménez', 'marjimen@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de animación: Casa carrusel', 'Semillero dedicado a la animación.', 'Artes y Humanidades', 'Creación', 'Fredy Buitrago', 'f.buitragot@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de fotografía: Revista Atemporal', 'Revista de fotografía y semillero.', 'Artes y Humanidades', 'Creación', 'Santiago Forero Ramirez', 's.foreror@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Escena Expandida', 'Semillero de escena expandida en artes.', 'Artes y Humanidades', 'Creación', 'Carmen Gil Vrolijk', 'cgil@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Imágenes de segunda mano', 'Semillero sobre imágenes de segunda mano.', 'Artes y Humanidades', 'Creación', 'Carmen Gil Vrolijk', 'cgil@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Sonido Experimental', 'Semillero dedicado al sonido experimental.', 'Artes y Humanidades', 'Creación', 'Luis Ricardo Arias Vega', 'luarias@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Arte Rupestre del Orinoco (SARO)', 'Semillero dedicado al estudio del arte rupestre del Orinoco.', 'Artes y Humanidades', 'Investigación', 'Natalia Lozada', 'n.lozada33@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero L3A', 'Laboratorio de arte y arqueología andina.', 'Artes y Humanidades', 'Investigación', 'Alexander Herrera', 'alherrer@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de animación', 'Semillero dedicado a la animación.', 'Artes y Humanidades', 'Creación', 'Juan Camilo Gonzalez Jimenez', 'j.gonzalezj@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Narrativa Sonora', 'Semillero dedicado a la narrativa sonora.', 'Artes y Humanidades', 'Creación', 'Charlotte De Beavoir', 'c.hebert57@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('SENDA (Semillero de experimentación en Narrativas Digitales algorítmicas)', 'Semillero de experimentación en narrativas digitales algorítmicas.', 'Artes y Humanidades', 'Creación', 'Jaime Andrés Rodríguez', 'j.rodriguezgomez@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero Qué te narras', 'Semillero de narrativa.', 'Artes y Humanidades', 'Creación', 'Charlotte De Beavoir', 'c.hebert57@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('AES Uniandes', 'Audio Engineering Society Uniandes.', 'Artes y Humanidades', 'Investigación', 'Marcela Zorro Rodriguez', 'mp.zorro109@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Gobierno
('Liderazgo público', 'Es un semillero de investigación, formación y discusión sobre casos y experiencias de liderazgo público.', 'Gobierno', 'Investigación', 'Nathalie Méndez', 'n.mendez52@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Ciencias
('Grupo Uniandino de Ornitología (GUO)', 'Grupo de participación estudiantil enfocado en el reconocimiento y la apreciación de la avifauna colombiana.', 'Ciencias', 'Investigación', 'Janny Lizette González Sánchez', 'jl.gonzalezs1@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('POLAR - Semillero de Polinización en el Páramo', 'En este semillero estudiamos las interacciones de polinización que tienen lugar en el páramo de Matarredonda.', 'Ciencias', 'Investigación', 'Juan Camilo Dorado Suarez', 'jc.dorado@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- CIDER
('Futuros energéticos', 'Este semillero de investigación se ocupa de identificar, analizar, acompañar y difundir las experiencias de comunidades que estén transformando sus formas de relacionarse con su entorno.', 'CIDER', 'Investigación', 'María Cecilia Roa García', 'mc.roag@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),

-- Administración
('Élites y poder en América Latina', 'Semillero de investigación sobre élites y poder en América Latina.', 'Administración', 'Investigación y creación', 'Luis Gabriel Galán Guerrero', 'lg.galan92@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false),
('Semillero de Finanzas', 'Semillero de investigación en finanzas.', 'Administración', 'Investigación', 'Luis Guillermo Gonzalez Alvarenga', 'lg.gonzaleza1@uniandes.edu.co', '/placeholder.svg?height=300&width=400', 'Activo', false)

ON CONFLICT (name, faculty) DO UPDATE SET
  description = EXCLUDED.description,
  coordinator = EXCLUDED.coordinator,
  email = EXCLUDED.email,
  area = EXCLUDED.area,
  status = EXCLUDED.status,
  image_url = EXCLUDED.image_url,
  is_funded = EXCLUDED.is_funded;
