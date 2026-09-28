<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación, control y análisis de riesgos sanitarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> afianzar los conceptos fundamentales sobre factores de contaminación, programas de saneamiento y medidas preventivas en la industria de alimentos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué son los programas de saneamiento en la industria alimentaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de actividades y procedimientos para mantener las instalaciones y equipos en condiciones higiénicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un sistema para aumentar la producción de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un método para reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un documento que solo se usa para auditorías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los programas de saneamiento son el conjunto de actividades y procedimientos que mantienen las instalaciones, equipos y procesos en condiciones higiénicas óptimas, previniendo la contaminación de los alimentos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Según la Resolución 2674 de 2013, ¿cuál de los siguientes es un programa de saneamiento obligatorio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Programa de ventas y <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programa de diseño de empaques.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programa de limpieza y desinfección (POES).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Programa de relaciones públicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La Resolución 2674 de 2013 establece la obligatoriedad de implementar programas de limpieza y desinfección (POES), control de plagas, manejo de residuos, entre otros.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la diferencia entre el mantenimiento preventivo y el correctivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El preventivo se hace después de una falla; el correctivo, antes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El preventivo se planifica para evitar fallas; el correctivo reacciona ante fallas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El preventivo es más costoso que el correctivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El correctivo es el enfoque preferido en la industria alimentaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El mantenimiento preventivo se planifica para evitar fallas antes de que ocurran, mientras que el correctivo se realiza cuando el equipo ya falló.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de verificación se realiza al inspeccionar visualmente que una superficie esté libre de suciedad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificación analítica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificación operacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificación microbiológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificación visual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La verificación visual es la primera línea de control y consiste en inspeccionar que no haya residuos de alimentos, jabón o suciedad visible en las superficies.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el rango de cloro residual libre que debe tener el agua potable según la normativa colombiana?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0.1 a 0.2 ppm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '0.3 a 2.0 ppm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '2.5 a 5.0 ppm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '5.0 a 10.0 ppm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Según la Resolución 2115 de 2007, el cloro residual libre en el agua para consumo humano debe estar entre 0.3 y 2.0 ppm para garantizar su potabilidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué tipo de residuo son las cáscaras de frutas y verduras?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Residuos peligrosos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Residuos orgánicos biodegradables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Residuos aprovechables (reciclables).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Residuos con riesgo biológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las cáscaras de frutas y verduras son residuos orgánicos biodegradables, es decir, se descomponen naturalmente y pueden ser aprovechados para compostaje.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué son los POES (Procedimientos Operativos Estandarizados de Saneamiento)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Descripciones detalladas de cómo realizar las tareas de limpieza y desinfección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Equipos para medir la temperatura de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Documentos para registrar las ventas del día.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema para controlar plagas en la planta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los POES son documentos que describen paso a paso cómo, cuándo, dónde y con qué se deben realizar las tareas de limpieza y desinfección.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un peligro físico en los alimentos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bacterias como la <em>Salmonella</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Residuos de detergentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Toxinas naturales como las aflatoxinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Virutas de metal de maquinaria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Las virutas de metal son un peligro físico porque son objetos extraños que pueden causar lesiones al consumidor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué bacteria puede crecer a temperaturas de refrigeración (2°C a 4°C)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Escherichia coli</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Listeria monocytogenes</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Salmonella</em> spp.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Staphylococcus aureus</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '<em>Listeria monocytogenes</em> es una bacteria psicotrofa, lo que significa que puede multiplicarse a temperaturas de refrigeración, lo que la hace especialmente peligrosa en productos listos para consumo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la principal ruta de transmisión de virus como la Hepatitis A en los alimentos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación cruzada de superficies.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Manipuladores infectados que no se lavan las manos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Alimentos cocidos a temperaturas inadecuadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Residuos de plaguicidas en frutas y verduras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los virus como la Hepatitis A y el <em>Norovirus</em> se transmiten principalmente por manipuladores infectados que contaminan los alimentos al no lavarse las manos adecuadamente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué es un Punto Crítico de Control (PCC) en el sistema HACCP?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cualquier punto del proceso donde se puede aplicar un control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un registro de las temperaturas de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un punto específico donde el control es esencial para prevenir, eliminar o reducir un peligro significativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un programa de capacitación para el personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un PCC es un punto específico donde el control es esencial para garantizar la inocuidad. No todos los puntos de control son PCC; muchos peligros se controlan mediante los programas de saneamiento (prerrequisitos).',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué herramienta se utiliza para investigar la causa raíz de una no conformidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La lista de verificación de BPM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El programa de control de plagas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El análisis de cloro residual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El método de los 5 Porqués.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El método de los 5 Porqués es una herramienta simple pero poderosa que consiste en preguntar "¿por qué?" repetidamente hasta llegar a la causa fundamental del problema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes es una barrera física para el control de plagas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insecticidas y rodenticidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Feromonas para confusión sexual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mosquiteros en ventanas y cortinas de aire.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estaciones de cebo para roedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los mosquiteros y las cortinas de aire son barreras físicas que impiden la entrada de plagas a las instalaciones.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de peligro representan los residuos de detergente en una superficie mal enjuagada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Peligro físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peligro químico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Peligro biológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Peligro ergonómico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los residuos de productos de limpieza que no son adecuadamente enjuagados constituyen un peligro químico, ya que pueden contaminar el alimento y causar intoxicaciones.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el objetivo principal del diagnóstico sanitario en una empresa de alimentos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los costos de materia prima.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar la situación actual en materia de higiene e inocuidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar nuevos empaques para los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico sanitario es una evaluación sistemática que permite conocer la situación actual de la empresa en materia de higiene e inocuidad, identificando fortalezas, debilidades y riesgos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de residuo son los envases de plaguicidas o desinfectantes vacíos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Residuos aprovechables (reciclables).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Residuos orgánicos biodegradables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Residuos ordinarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Residuos peligrosos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los envases de plaguicidas y desinfectantes son residuos peligrosos porque contienen sustancias tóxicas que representan un riesgo para la salud y el ambiente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué establece el Decreto 60 de 2002 en relación con el HACCP?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que los programas de saneamiento son la base para implementar el HACCP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que el HACCP reemplaza a los programas de saneamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que el HACCP solo aplica a productos importados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que el HACCP no requiere ningún documento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El Decreto 60 de 2002 promueve la aplicación del HACCP y establece que los programas de saneamiento (prerrequisitos) son la base sobre la cual se construye dicho sistema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la zona de peligro de temperaturas para el crecimiento bacteriano en alimentos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0°C a 4°C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5°C a 60°C.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '60°C a 100°C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '-18°C a 0°C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La zona de peligro está entre 5°C y 60°C, donde las bacterias pueden multiplicarse rápidamente en los alimentos si se mantienen a esas temperaturas por tiempo prolongado.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué son las Buenas Prácticas de Manufactura (BPM)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema para aumentar las ventas de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un método para reducir el personal de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un programa para diseñar nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los principios básicos de higiene en la manipulación y elaboración de alimentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Las BPM son los principios básicos y prácticas generales de higiene que se aplican en la manipulación, preparación, elaboración y almacenamiento de alimentos para garantizar su inocuidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la primera barrera contra los peligros de contaminación en una planta de alimentos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema HACCP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El detector de metales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los programas de saneamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La capacitación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los programas de saneamiento son la primera y más importante barrera contra los peligros de contaminación. Actúan como la base sobre la cual se construyen sistemas más avanzados como el HACCP.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
