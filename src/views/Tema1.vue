<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los programas de saneamiento en la industria alimentaria

    

    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema1/img02.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Antes de abordar la verificación y el control, es necesario establecer un marco conceptual sólido sobre los programas de saneamiento y su importancia dentro de la industria alimentaria. Estos programas no corresponden a documentos que se elaboran únicamente para dar cumplimiento a un requisito normativo, sino que representan el compromiso permanente de una organización con la protección de la salud pública y la inocuidad de los alimentos. Su implementación, ejecución y seguimiento constituyen la base para garantizar que los alimentos procesados sean aptos para el consumo humano y cumplan con los requisitos de calidad e inocuidad establecidos por la normativa vigente y las exigencias del mercado.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto e importancia de los programas de saneamiento

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in")
      .col-lg-6
        p.mb-0 Los programas de saneamiento son un conjunto de actividades, procedimientos y controles documentados que tienen como objetivo mantener las instalaciones, equipos y procesos en condiciones higiénicas óptimas, previniendo así la contaminación de los alimentos. Son considerados prerrequisitos, es decir, las condiciones y prácticas básicas que deben estar implementadas y funcionando correctamente antes de aplicar sistemas más complejos como el Análisis de Peligros y Puntos Críticos de Control (HACCP). La palabra "prerrequisito" es clave: sin ellos, no se puede construir nada sólido en materia de inocuidad.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-01.p-4.br-15
          p.mb-0 Su importancia radica en que actúan como la primera y más importante barrera contra los peligros de contaminación. Un programa de limpieza deficiente, por ejemplo, puede convertir una superficie de trabajo en un foco de microorganismos patógenos que luego contaminarán lotes enteros de producción. De la misma manera, la falta de control de plagas puede resultar en la contaminación física (pelos, excrementos, fragmentos de insectos) y microbiológica de materias primas y productos terminados, generando pérdidas económicas y un riesgo sanitario inaceptable. Por lo tanto, la verificación constante de estos programas no es un trámite burocrático, sino una acción directa de salud pública y de aseguramiento de la calidad. Sin una base sólida de saneamiento, cualquier otro esfuerzo por controlar la inocuidad será insuficiente y estará en constante riesgo de fracasar.
    
    
    .bg-full-width.bg-fondo-1
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 1.
            span La pirámide de la inocuidad: programas de saneamiento como base
          img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema1/img04.png", alt="La pirámide presenta una estructura jerárquica de los elementos relacionados con la calidad y la inocuidad, desde las Buenas Prácticas de Manufactura (BPM) como base, seguidas de los programas de saneamiento, el sistema HACCP y la gestión de calidad total. En la parte superior se ubica la satisfacción del cliente y la competitividad como resultado de la implementación de estos elementos.")
          img.mb-2.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img04-mob.svg", alt="La pirámide presenta una estructura jerárquica de los elementos relacionados con la calidad y la inocuidad, desde las Buenas Prácticas de Manufactura (BPM) como base, seguidas de los programas de saneamiento, el sistema HACCP y la gestión de calidad total. En la parte superior se ubica la satisfacción del cliente y la competitividad como resultado de la implementación de estos elementos.")
          figcaption Nota. SENA, (2026).

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Marco normativo colombiano aplicable a los programas de saneamiento




    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img05.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-1.mb-0.mb-lg-0
        p.mb-4(data-aos="fade-right") En Colombia, el cumplimiento de los programas de saneamiento es de carácter obligatorio y se encuentra respaldado por un marco normativo que establece los requisitos sanitarios para la producción, el procesamiento, el almacenamiento y la comercialización de alimentos. Estas disposiciones constituyen el referente para la implementación de los programas de saneamiento, así como para la ejecución de inspecciones sanitarias oficiales, auditorías internas y procesos de verificación.

        .bg-color-02.p-4.br-15.mb-0
          p.mb-2 La Resolución 2674 de 2013, expedida por el Ministerio de Salud y Protección Social, establece los requisitos sanitarios que deben cumplir los establecimientos dedicados a la fabricación, procesamiento, preparación, envase, almacenamiento, transporte, distribución y comercialización de alimentos. Entre sus disposiciones, contempla la implementación y el mantenimiento de programas de saneamiento relacionados con:

          .row.align-items-center.justify-content-center
            .col-lg-7.mb-3.mb-lg-0
              ul.lista-ul--color.mb-0
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span Limpieza y desinfección (artículo 24).
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span Control de plagas (artículo 25).
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span Manejo de residuos sólidos y líquidos (artículo 20).
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span Abastecimiento de agua potable (artículo 11).
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span Mantenimiento de instalaciones y equipos (artículo 15).
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img06.png", data-aos="zoom-in").mx-auto

    p.mb-5 Por su parte, el Decreto 60 de 2002 promueve la aplicación del Sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP) en los establecimientos de alimentos y establece los lineamientos para los programas prerrequisito, los cuales constituyen la base para la implementación de este sistema preventivo. En consecuencia, la verificación del cumplimiento de los programas de saneamiento se realiza tomando como referencias estas y otras disposiciones normativas, las cuales sirven de fundamento para las inspecciones oficiales, las auditorías internas y los procesos de aseguramiento de la inocuidad alimentaria.

    

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Requisitos normativos clave para programas de saneamiento
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Norma
                th Artículo / capítulo
                th Requisito asociado
                th Implicación para la planta
            tbody
              tr
                td Res. 2674/2013
                td Artículo 11
                td Abastecimiento de agua potable con presión y temperatura adecuadas.
                td Instalación de tanques de almacenamiento, sistemas de cloración y red de distribución en buen estado.
              tr
                td Res. 2674/2013
                td Artículo 20
                td Manejo de residuos: recipientes identificados, remoción frecuente.
                td Contar con un programa de residuos, recipientes en buen estado y rutas de recolección definidas.
              tr
                td Res. 2674/2013
                td Artículo 24
                td Procedimientos de limpieza y desinfección escritos (POES).
                td Elaborar y mantener actualizados los POES, y tener registros de su ejecución y verificación.
              tr
                td Res. 2674/2013
                td Artículo 25
                td Control integrado de plagas: programa con enfoque preventivo.
                td Contratar una empresa autorizada o tener personal capacitado, con un plan que incluya barreras físicas y químicas.
              tr
                td Decreto 60/2002
                td Artículo 3
                td Implementación de prerrequisitos (BPM, POES) antes del HACCP.
                td Demostrar que los programas de saneamiento están funcionando antes de pasar a un sistema HACCP.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Relación de los programas de saneamiento con las Buenas Prácticas de Manufactura (BPM)



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-4 Las Buenas Prácticas de Manufactura (BPM) son los principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado y almacenamiento de alimentos para consumo humano. Son el punto de partida de cualquier sistema de calidad. Los programas de saneamiento son, en esencia, la materialización operativa y detallada de los principios de higiene que las BPM exigen.
        .bg-color-0.p-4.br-15.mb-0
          p.mb-0 Mientras las BPM dictan, por ejemplo, que "las instalaciones deben mantenerse limpias", el programa de limpieza y desinfección (contenido en los POES) especifica cómo (procedimiento paso a paso, incluyendo técnicas de cepillado, enjuague, etc.), cuándo (frecuencia diaria, semanal, mensual, asociada a la producción), con qué (productos específicos, concentraciones, tiempos de contacto y temperatura de la solución) y quién (responsable de ejecutar y responsable de verificar) se llevará a cabo esa limpieza. De esta manera, los programas de saneamiento le dan un carácter sistemático, medible y verificable a los principios generales establecidos en las BPM. En conjunto, forman un sistema coherente que garantiza un ambiente de producción higiénico y controlado.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Estructura documental de un programa de saneamiento

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-4(data-aos="fade-right") Para que un programa de saneamiento sea verificable, debe estar correctamente documentado. La documentación no es un fin en sí misma, pero es la herramienta que permite estandarizar, comunicar y demostrar lo que se hace. Un programa de saneamiento típico debe contener los siguientes elementos:
        
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex 
            .lista-ol--cuadro__vineta
              span A
            span <b>Objetivo:</b> ¿para qué sirve el programa?
          li.d-flex 
            .lista-ol--cuadro__vineta
              span B
            span <b>Alcance:</b> ¿a qué áreas, equipos o procesos aplica?
          li.d-flex 
            .lista-ol--cuadro__vineta
              span C
            span <b>Responsabilidades:</b> ¿quién hace qué? (ejecuta, supervisa, verifica, aprueba).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span D
            span <b>Procedimientos (POES):</b> descripción detallada de las actividades, paso a paso.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span E
            span <b>Frecuencias:</b> ¿cada cuánto se realiza cada actividad?
          li.d-flex 
            .lista-ol--cuadro__vineta
              span F
            span <b>Productos e insumos:</b> listado de productos químicos utilizados, con sus fichas técnicas y hojas de seguridad (SDS).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span G
            span <b>Registros:</b> formatos diseñados para dejar evidencia de la ejecución y verificación (ej. listas de chequeo, bitácoras).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span H
            span <b>Indicadores:</b> ¿cómo se mide la eficacia del programa? (ej. % de resultados microbiológicos conformes).

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img11.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Planificar (<em>Plan</em>)
              p.text-center Establecer los objetivos y procedimientos del programa de saneamiento, incluyendo el programa escrito y los Procedimientos Operativos Estandarizados de Saneamiento (POES).

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img12.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Hacer (<em>Do</em>)
              p.text-center Ejecutar las actividades de acuerdo con lo planificado y diligenciar los registros correspondientes.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img13.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Verificar (<em>Check</em>)
              p.text-center Realizar verificaciones visuales, operacionales y analíticas, comparando los resultados con los criterios de aceptación establecidos.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img14.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Actuar (<em>Act</em>)
              p.text-center Implementar acciones correctivas y preventivas para fortalecer el desempeño de los programas de saneamiento y promover la mejora continua.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
