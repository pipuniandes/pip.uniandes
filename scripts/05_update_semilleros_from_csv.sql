-- Script para actualizar los semilleros con datos del CSV oficial
-- Solo incluye semilleros con estado "Activo"

-- Limpiar tabla de semilleros existente
TRUNCATE TABLE semilleros CASCADE;

-- Insertar semilleros activos del CSV
INSERT INTO semilleros (name, description, faculty, area, coordinator, email, is_funded, image_url) VALUES
-- Economía
('Macro', 'El semillero macro nació en 2017 por la iniciativa de un grupo de estudiantes que querían reunirse a profundizar en temas de frontera en la investigación macroeconómica. Partiendo del hecho de que no sabemos nada y queremos aprender, semestre a semestre definimos un tema principal y en las sesiones exponemos papers que se encuentre en la frontera del conocimiento de este tema.', 'Economía', 'Investigación', 'David Perez-Reyna', 'd.perez-reyna@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('EconoMÍA y Género', 'Desde MÍA Uniandes creamos el Semillero de Investigación EconoMÍA y Género, el cual busca tener un espacio de discusión de artículos académicos de economía sobre temas de género. Este Semillero estará abierto tanto para estudiantes de economía de la Universidad de los Andes, como para estudiantes y miembros de otras facultades de economía de Bogotá.', 'Economía', 'Investigación', 'Daniela Vlasak', 'd.vlasak@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de Investigación de Adam Smith', 'El semillero nació este semestre 2023-1 para estudiar la teoría moral y estética de Adam Smith y comprender sus vínculos con la teoría del valor. Este año se conmemoran los 300 años del natalicio de Smith y buscamos también darle visibilidad al autor y su obra en una comunidad más allá de lxs economistas.', 'Economía', 'Investigación', 'Jimena Hurtado', 'jihurtad@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Medicina
('Ciencias Básicas Médicas', 'Aplicaciones de la citometría de flujo, Neuroinmmunología y Respuesta inmune a enfermedades infecciosas.', 'Medicina', 'Investigación', 'John Mario González Escobar', 'johgonza@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Diabetes, lípidos y metabolismo UniAndes', 'Grupo enfocado en temáticas relacionadas con el metabolismo humano y sus alteraciones: Diabetes, Lípidos y Metabolismo.', 'Medicina', 'Investigación', 'Carlos Olimpo Mendivil Anaya', 'cmendivi@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Grupo de epidemiología de la Universidad de los Andes (Epiandes)', 'Investigación en Actividad física y nutrición, Economía de la Salud, Enfermedades crónicas y estilo de vida, y Epidemiología Clínica.', 'Medicina', 'Investigación', 'Olga Lucía Sarmiento', 'osarmien@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Neurociencia Traslacional', 'Semillero de investigación interdisciplinario en medicina que integra la mirada de las ciencias básicas en la medicina humana aplicada a modelo animal pez cebra y sus interacciones fisiológicas, metabólicas, genéticas y comportamentales.', 'Medicina', 'Investigación', 'Natalia Mejía Gaviria', 'nmejia@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('REUMAVANCE', 'Reumavance es un grupo inter y transdisciplinar que busca responder a vacíos del conocimiento en el área de la autoinmunidad y enfermedades reumatológicas. La metodología es realización de encuentros para revisar temas básicos de investigación en salud y posterior revisión de los proyectos propuestos por los integrantes.', 'Medicina', 'Investigación', 'Gerardo Quintana López', 'g.quintana20@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Neurofisiología Celular', 'Trabajamos proyectos enfocados al estudio de los procesos neuroinflamatorios de las enfermedades neurodegenerativas. Diseñamos nanosondas como agentes de contraste para resonancia magnética con potencial aplicación en el diagnóstico de procesos neuroinflamatorios.', 'Medicina', 'Investigación', 'Karina Vargas Sanchez', 'j.vargass@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de Investigación en Ortopedia y Traumatología', 'El semillero busca fomentar la formación académica e investigativa de estudiantes y profesionales interesados en profundizar en esta especialidad médica. El grupo se enfoca en generar proyectos científicos con potencial de publicación.', 'Medicina', 'Investigación', 'Manuela Lorduy Ariza', 'm.lorduy@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Derecho
('Estudios Interdisciplinarios en Tributación (SEIT)', 'Desde 2017 se creó el Semillero de Investigación en Estudios Interdisciplinarios de la Tributación en el que profesores, estudiantes y egresados han venido participando activamente. Sus miembros han producido investigaciones de calidad en un área que requiere desarrollo académico constante.', 'Derecho', 'Investigación', 'Eleonora Lozano', 'elozano@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de Público Administrativo (SPA)', 'El semillero es un espacio de encuentro para la discusión y reflexión de temas relacionados con el derecho administrativo en el que, a partir de un diálogo fluido entre los participantes, nos acercamos a asuntos de la agenda pública.', 'Derecho', 'Investigación', 'Carolina Moreno', 'camoreno@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Resol

ución de Conflictos', 'El semillero MRC es un espacio diseñado para la creación de una comunidad académica dedicada a la reflexión crítica y transformadora sobre el conflicto y los mecanismos de resolución de controversias, con enfoque social, de derechos humanos, diferenciales e interseccionales.', 'Derecho', 'Investigación', 'Emilce Coy', 'cj.conciliacion@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Ingeniería
('Robocol', 'Iniciativa estudiantil enfocada en el desarrollo de proyectos de robótica para competencias internacionales. Hemos participado en múltiples competencias, con un cuarto lugar en la competencia de lunabots de la NASA y un tercer lugar en el ERC del 2020.', 'Ingeniería', 'Investigación', 'Maria Camila Martinez', 'robocol@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de la línea de investigación de Ingeniería celular y Bioimpresión', 'Grupo enfocado en ingeniería celular y bioimpresión 3D para aplicaciones biomédicas.', 'Ingeniería', 'Investigación', 'Carolina Muñoz Camargo', 'c.munoz2016@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de investigación en Biomecánica - IBIOMECH', 'El semillero de biomecánica es un espacio destinado al estudio del movimiento humano, especialmente enfocado en el análisis de gestos deportivos, diseño y valoración de dispositivos ortopédicos personalizables, procesos de rehabilitación y modelos computacionales.', 'Ingeniería', 'Investigación', 'Christian Javier Cifuentes De la Portilla', 'cc.cifuentes@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Ciencias Sociales
('Geografías del Poder', 'El Semillero Geografías del Poder tiene como centro el trabajo con comunidades para promover el empoderamiento territorial, la organización y la capacidad de acción comunitaria, y la divulgación y defensa de los derechos territoriales y ambientales.', 'Ciencias Sociales', 'Investigación', 'Luis Sánchez', 'ld.sanchez20@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Laboratorio Urbano. NextGenC Generacion Conectada', 'Semillero enfocado en investigación urbana y generación conectada.', 'Ciencias Sociales', 'Investigación', 'Friederike Fleischer', 'f.fleischer406@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Narcolombia', 'Semillero de investigación en antropología enfocado en el estudio de dinámicas sociales relacionadas con narcotráfico en Colombia.', 'Ciencias Sociales', 'Investigación y creación', 'Xavier Andrade', 'sj.andrade@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Laboratorio de cognicióón', 'El laboratorio de cognición es parte del grupo de investigación "Cognición y Prácticas de aprendizaje" y es un espacio de formación e investigación con estudiantes de distintos niveles. El énfasis está en la formación de habilidades básicas de investigación.', 'Ciencias Sociales', 'Investigación', 'William Jiménez', 'w.jimenezleal@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de investigación en neurociencia social', 'El semillero de investigación en neurociencia social constituye un espacio que pretende propiciar el desarrollo de habilidades investigativas en los estudiantes, centr��ndose en la cognicición social como fenómeno dependiente del contexto.', 'Ciencias Sociales', 'Investigación', 'Sandra Jimena Báez Buitrago', 'sj.baez@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Psicogerontología', 'Este semillero tiene como finalidad fomentar el desarrollo de habilidades en investigación desde diferentes enfoques metodológicos para el estudio del envejecimiento y la vejez desde un enfoque de curso de vida, interseccional, de género y desde la psicología positiva.', 'Ciencias Sociales', 'Investigación', 'Maria Fernanda Reyes', 'm.reyes8@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- ArquiDiseño
('Movilidad sostenible y territorio', 'Investigación en movilidad sostenible y su relación con el territorio urbano.', 'ArquiDis', 'Investigación', 'C. ERIK VERGEL-TOVAR', 'c.vergel@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Cuerpo y movimiento expandido', 'Este semillero se centra en el papel inaugural que juega el movimiento del cuerpo en la conformación del espacio y la experiencia del tiempo. Para eso identificaremos y estudiaremos distintos cuerpos, propondremos varias concepciones de espacio y entenderemos las implicaciones del movimiento.', 'ArquiDis', 'Investigación y creación', 'Lucas Ariza Parada', 'l.ariza48@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Diseño inspirado en Emociones', 'El objetivo general del semillero es consolidar un espacio para compartir, discutir, construir y desarrollar proyectos relacionados al Diseño Inspirado en las Emociones.', 'ArquiDis', 'Investigación y creación', 'Angie Henríquez Martínez', 'a.henriquez1291@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Observatorio de Arquitectura en Colombia', 'Espacio de investigación sobre arquitectura colombiana contemporánea.', 'ArquiDis', 'Investigación y creación', 'Ingrid Quintana Guerrero', 'i.quintana20@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Artes y Humanidades
('Lo leve y lo curatorial', 'Este semillero es una pequeña comunidad flotante de personas interesadas en indagar por lo curatorial y sus dispositivos más allá del vehículo del formato expositivo. Hacemos cosas con las palabras. Nos gustan las miniaturas y las cosas pequeñas.', 'Artes y Humanidades', 'Creación', 'Carolina Cerón', 'c.ceron50@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Escritura experimental', 'Semillero de escritura experimental y creativa.', 'Artes y Humanidades', 'Creación', 'Carolina Cerón', 'c.ceron50@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero VVV', 'El semillero de creación con electrónica es un espacio informal para el desarrollo y apoyo de proyectos creativos de diversos alcances y escalas que usen herramientas electrónicas y de programación.', 'Artes y Humanidades', 'Creación', 'David Peña', 'd.penal@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de Estudios de Japón', 'El semillero de Estudios de Japón tiene como objetivo general contribuir a la consolidación de esta área de estudio en la Universidad y el país. Es un proyecto transdisciplinar en el que colabora el Centro del Japón de la Universidad.', 'Artes y Humanidades', 'Investigación', 'Betsy Forero Montoya', 'b.forerom@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de fotografía', 'El semillero de fotografía es un espacio interdisciplinar en donde se analiza y piensa el medio fotográfico desde diferentes perspectivas tanto teóricas e históricas como prácticas.', 'Artes y Humanidades', 'Investigación', 'Juanita Solano', 'juani-so@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero la Imagen Colonial', 'El semillero dirigido por Olga Isabel Acosta busca analizar cómo se produjeron, usaron y se pensaron las imágenes durante la Colonia especialmente en la Nueva Granada, así como sus continuidades y rupturas durante el siglo XIX.', 'Artes y Humanidades', 'Investigación', 'Olga Acosta', 'oi.acosta@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero Laboratorio de Arte y Arqueología Andina (L3A)', 'El L3A es un espacio de investigación y creación interdisciplinar que reúne a estudiantes interesados en el arte y la arqueología del área andina de América del Sur.', 'Artes y Humanidades', 'Investigación', 'Alexander Herrera', 'alherrer@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero Historia y Humanidades Digitales', 'Desarrollar habilidades en los participantes para pensar la historia desde problemas conceptuales y metodológicos vinculados a la historia y las humanidades digitales.', 'Artes y Humanidades', 'Investigación', 'Maria José Afanador', 'mj.afanador@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Es de Lope', 'Semillero dedicado al estudio de la obra dramática de Lope de Vega, con especial énfasis en la edición crítica.', 'Artes y Humanidades', 'Investigación', 'Santiago Restrepo', 'srestreporamirez@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Biblioteca Digital Soledad Acosta', 'La Biblioteca Digital Soledad Acosta de Samper busca funcionar como un repositorio para que público -académico y general- acceda a la obra de la escritora. Esta plataforma tiene como objetivo generar mayor movilidad y nuevas formas de divulgación del archivo.', 'Artes y Humanidades', 'Investigación y creación', 'Carolina Alzate', 'calzate@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Literatura hispánica y tradiciones discursivas', 'Se estudian corpus textuales en donde se evidencia la presencia de moldes normativos convencionalizados. El estudio de las Tradiciones Discursivas implica el análisis de la participación de textos literarios o no literarios en esquemas de transmisión.', 'Artes y Humanidades', 'Investigación', 'Hugo Hernán Ramírez', 'huramire@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('María Mercedes Carranza', 'Edición y estudio del archivo de María Mercedes Carranza. Además del trabajo en edición, el grupo promueve la publicación de artículos que reflexionan teóricamente sobre la edición de textos.', 'Artes y Humanidades', 'Investigación', 'Jerónimo Pizarro', 'j.pizarro188@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Patrimonio bibliográfico neogranadino', 'El semillero se dedica al estudio de los libros antiguos (incunables y posincunables), la historia de la imprenta en Nueva Granada, la circulación de los libros y el saber, el lugar de la comunidades religiosas en la vida intelectual de la nación.', 'Artes y Humanidades', 'Investigación', 'Andrea Lozano-Vásquez', 'a.lozano72@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Rafael Humberto Moreno-Durán', 'Edición y estudio del archivo de Rafael Humberto Moreno-Durán. El grupo promueve la publicación de artículos que reflexionan teóricamente sobre la edición de textos y colabora en la conformación y organización de archivos.', 'Artes y Humanidades', 'Investigación', 'Jerónimo Pizarro', 'j.pizarro188@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('LA COOLTURE: investigación y creación sobre la sociedad del entretenimiento', 'Este semillero de investigación y creación quiere pensar críticamente la sociedad que habitamos desde la perspectiva del entretenimiento donde el criterio de verdad es lo cool & pop y se produce la COOLture.', 'Artes y Humanidades', 'Creación', 'Omar Rincon', 'orincon@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Cuerpos que hablan', 'Cuerpos que hablan es un un semillero de exploración y de ejercicios de laboratorio para crear con y desde el cuerpo de manera expresiva, con intención estética y postura reflexiva afectiva.', 'Artes y Humanidades', 'Investigación y creación', 'Sandra Beatriz Sanchez Lopez', 'ssanchez@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('BLAST', 'El seminario busca promover la difusión de los nuevos repertorios creados en el área de composición del departamento de música, visibilizando el trabajo de sus estudiantes.', 'Artes y Humanidades', 'Investigación', 'Laura Sophía Bacca', 'ls.bacca@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero del EEVA – Ensamble de Exploración Vocal de los Andes', 'Grupo dedicado a explorar y utilizar la voz como medio de expresión y búsqueda artística, en un espacio de creatividad individual y colectiva flexible, lúdico e intuitivo.', 'Artes y Humanidades', 'Creación', 'Carolina Gamboa Hoyos', 'c.gamboa200@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Educación
('Mindset Lab', 'El propósito fundamental de este semillero es promover una mentalidad de crecimiento entre los profesores en formación y en servicio, animándoles a creer, explorar y descubrir sus capacidades para desarrollar sus habilidades.', 'Educación', 'Investigación', 'Paula Bibiana García Cardona', 'pb.garcia@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Educación, Desarrollo y Convivencia', 'Desde el Semillero del grupo de investigación Educación, Desarrollo y Convivencia estamos interesados en explorar la relación entre diferentes factores del contexto de aula y el desarrollo socioemocional de los y las estudiantes.', 'Educación', 'Investigación', 'Ana María Velásquez', 'ana-vela@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Gobierno
('Liderazgo público', 'Este semillero es un escenario de investigación, formación y discusión sobre casos y experiencias de liderazgo público entre estudiantes de pregrado y posgrado buscando potenciar las competencias de liderazgo.', 'Gobierno', 'Investigación', 'Nathalie Méndez', 'n.mendez52@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Ciencias
('Grupo Uniandino de Ornitología (GUO)', 'Es un grupo de participación estudiantil formado y dirigido por y para estudiantes de la Universidad de los Andes enfocado en el reconocimiento y la apreciación de la avifauna colombiana, tanto dentro como fuera del campus de la universidad.', 'Ciencias', 'Investigación', 'Janny Lizette González Sánchez', 'jl.gonzalezs1@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('POLAR - Semillero de Polinización en el Páramo', 'En este semillero estudiamos las interacciones de polinización que tienen lugar en el páramo de Matarredonda. Nuestro objetivo principal es entender las características de esas interacciones y documentar nuevas interacciones y nuevos polinizadores.', 'Ciencias', 'Investigación', 'Juan Camilo Dorado Suarez', 'jc.dorado@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Laboratorio de Ciencias Básicas Médicas (CBMU)', 'El grupo cuenta con un laboratorio en el cual se pueden desarrollar técnicas relacionadas con biología celular, y pruebas de la inmunidad celular y humoral. Los principales temas de investigación están centrados en la respuesta inmune en enfermedades infecciosas.', 'Ciencias', 'Investigación', 'John M. González', 'johgonza@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('EcoBites', 'Este semillero tiene como objetivo discutir algunos conceptos propios de la teoría ecológica de la percepción y sus posibles aplicaciones a campos como filosofía de la lógica, de la mente y de la acción.', 'Ciencias', 'Investigación', 'Tomás Barrero Guzmán', 'ta.barrero32@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Biología de Sistemas', 'La biología de sistemas es un campo relativamente nuevo que tiene fuertes implicaciones en el diseño e implementación de sistemas biológicos sintéticos, en el entendimiento de fenómenos como la cooperación, el ruido en señales bioquímicas y el desarrollo en organismos multicelulares.', 'Ciencias', 'Investigación', 'Alejandro Barrera Suárez', 'a.barrera5@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('GeneSys', 'Somos el Semillero de Biología de Sistemas y Biología Sintética de la Universidad de los Andes. Nos enfocamos en el diseño, modelamiento matemático y simulación de circuitos genéticos que permitan el desarrollo de microorganismos sintéticos.', 'Ciencias', 'Investigación', 'Alejandro Barrera Suárez', 'a.barrera5@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- CIDER
('Futuros energéticos', 'Este semillero de investigación se ocupa de identificar, analizar, acompañar y difundir las experiencias de comunidades, organizaciones o territorios que están transformando sus formas de relacionarse con su entorno para construir formas de vida resilientes.', 'CIDER', 'Investigación', 'María Cecilia Roa García', 'mc.roag@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

-- Administración
('Élites y poder en América Latina', 'Semillero de investigación sobre élites y poder en América Latina.', 'Administración', 'Investigación y creación', 'Luis Gabriel Galán Guerrero', 'lg.galan92@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600'),

('Semillero de Finanzas', 'Espacio de investigación en finanzas.', 'Administración', 'Investigación', 'Luis Guillermo Gonzalez Alvarenga', 'lg.gonzaleza1@uniandes.edu.co', false, '/placeholder.svg?height=400&width=600');
