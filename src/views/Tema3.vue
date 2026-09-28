<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Factores de contaminación de los alimentos


    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Para prevenir eficazmente la contaminación de los alimentos, es indispensable conocer los agentes que pueden comprometer su inocuidad. Los factores de contaminación corresponden a todos aquellos agentes o elementos que, al estar presentes en un alimento, pueden representar un riesgo para la salud del consumidor. Su identificación, clasificación y análisis constituyen la base para establecer las medidas preventivas y los controles necesarios en cada etapa del proceso productivo.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Clasificación de los peligros: físicos, químicos y biológicos



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
      .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0

        p.mb-4 La inocuidad alimentaria clasifica los peligros en tres categorías principales, de acuerdo con su naturaleza: físicos, químicos y biológicos. Esta clasificación constituye un referente internacional y representa la base para la implementación del sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP). Un mismo alimento puede estar expuesto a uno o varios tipos de peligros durante las diferentes etapas de la cadena alimentaria.

        .bg-color-0.p-4.br-15.mb-0
          p.mb-0 Los peligros físicos corresponden a materiales u objetos extraños que no deberían estar presentes en los alimentos y que pueden ocasionar lesiones al consumidor, como cortes en la cavidad oral, fracturas dentales, laceraciones en el tracto digestivo o asfixia. Entre las fuentes más comunes de este tipo de peligro se encuentran:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-01.p-4.br-15
          p.mb-0 <b>Fuentes comunes en la planta</b>: los peligros físicos pueden originarse en diferentes elementos presentes durante la producción de alimentos. A continuación, se presentan algunas de las fuentes más comunes que pueden introducir objetos extraños en los alimentos y comprometer su inocuidad.



    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img05.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Metal
              p.mb-0 Virutas de maquinaria (por desgaste o fricción), grapas de empaques, arandelas, tuercas, agujas (en carnes) y cuchillas rotas.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img06.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Vidrio
              p.mb-0 Bombillos rotos, termómetros de vidrio quebrados y envases de vidrio rotos en áreas de producción cercanas.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Plástico
              p.mb-0 Fragmentos de empaques, de guantes rotos, de cortinas de tiras y de cintas transportadoras.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img08.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Madera
              p.mb-0 De estibas en mal estado, palés y cajas de madera (cada vez más prohibidas en plantas de alimentos).

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img09.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Piedras o huesos
              p.mb-0 De materias primas mal seleccionadas o procesadas (ej. en granos y frutas deshuesadas).

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/img10.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
              h4.text-center Objetos personales
              p.mb-0 Joyas (anillos, aretes), botones, monedas y lapiceros.



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-01.p-4.br-15
          p.mb-0 <b>Medidas preventivas</b>: instalación de imanes, detectores de metales, tamices y filtros; mantenimiento preventivo de equipos; inspección de materias primas; políticas estrictas sobre objetos personales y prohibición de madera en áreas de producción; uso de materiales irrompibles y protectores para iluminación.


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los peligros químicos son sustancias que pueden estar presentes en los alimentos de forma accidental o intencional (pero no declarada) y causar intoxicaciones agudas o enfermedades crónicas. Su presencia puede originarse en diferentes etapas de la cadena productiva, por lo que es fundamental identificar sus fuentes y establecer medidas de control adecuadas. Entre los peligros químicos más comunes se encuentran: 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-01.p-4.br-15
          p.mb-0 <b>Clasificación y fuentes comunes</b>: los peligros químicos pueden clasificarse según su origen y las fuentes que los generan durante la producción, el almacenamiento o la manipulación de los alimentos. A continuación, se presentan algunas de las fuentes más comunes de contaminación química que pueden comprometer la inocuidad alimentaria.


    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img11.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img12.png' alt='').mx-auto
              .p-4
                h4.text-center Químicos de limpieza
                p.mb-0 Residuos de detergentes, desengrasantes o desinfectantes por enjuague deficiente después de la limpieza.

            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img13.png' alt='').mx-auto
              .p-4
                h4.text-center Lubricantes y mantenimiento
                p.mb-0 Fugas de aceites o grasas de equipos, especialmente si no son de grado alimenticio (NSF H1).

            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img14.png' alt='').mx-auto
              .p-4
                h4.text-center Plaguicidas y agroquímicos
                p.mb-0 Residuos en materias primas por malas prácticas agrícolas.

            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img15.png' alt='').mx-auto
              .p-4
                h4.text-center Toxinas naturales
                p.mb-0 Micotoxinas (aflatoxinas en granos, ocratoxinas en café), histamina (en pescado mal refrigerado), toxinas en hongos o mariscos.

            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img16.png' alt='').mx-auto
              .p-4
                h4.text-center Aditivos no permitidos o en exceso
                p.mb-0 Uso de conservantes, colorantes o saborizantes no autorizados, o en cantidades superiores a las permitidas.

            .tarjeta.tarjeta--blanca.shadow-sm.p-0.h-100
              img(src='@/assets/curso/tema3/img17.png' alt='').mx-auto
              .p-4
                h4.text-center Alérgenos
                p.mb-0 Proteínas de alimentos como maní, leche, huevo, soya, trigo (gluten), crustáceos, pescado, nueces, que pueden contaminar otros productos de forma cruzada (cambio de línea de producción sin limpieza profunda), generando un peligro grave para personas alérgicas.


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        .bg-color-01.p-4.br-15
          p.mb-0 <b>Medidas preventivas</b>: almacenamiento separado y etiquetado claro de químicos; uso exclusivo de lubricantes de grado alimenticio (NSF H1); procedimientos de limpieza (POES) que aseguren el enjuague; control de proveedores y análisis de materias primas; programas de manejo de alérgenos que incluyan limpieza profunda entre producciones, secuenciación de productos y etiquetado claro.

    p.mb-5 Los peligros biológicos son organismos vivos, generalmente microscópicos, que pueden multiplicarse en los alimentos y causar enfermedades. Constituyen la causa más frecuente y peligrosa de los brotes de Enfermedades Transmitidas por Alimentos (ETA), debido a su capacidad para sobrevivir o proliferar cuando las condiciones de procesamiento, almacenamiento o manipulación no son las adecuadas.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03 bg-color-nuevo")
          div(titulo="Bacterias")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-4.mb-lg-0
                p.mb-3 Microorganismos unicelulares. Pueden ser patógenas (causan enfermedad) o saprofitas (descomponen el alimento). Algunas forman esporas resistentes al calor (ej. <em>Clostridium botulinum</em>, <em>Bacillus cereus</em>).
                p.mb-0 <b>Ejemplos clave:</b> <em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>Escherichia coli</em> patógena (STEC), <em>Campylobacter jejuni</em> y <em>Staphylococcus aureus</em> (produce toxina).

          div(titulo="Virus")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-4.mb-lg-0
                p.mb-3 Más pequeños que las bacterias, necesitan una célula huésped para multiplicarse. No se multiplican en los alimentos, pero pueden sobrevivir en ellos. Se transmiten principalmente por contaminación fecal de manipuladores o agua.
                p.mb-0 <b>Ejemplos clave:</b> virus de la hepatitis A, <em>norovirus</em> y <em>rotavirus</em>.

          div(titulo="Parásitos")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/img20.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-4.mb-lg-0
                p.mb-3 Organismos que viven a expensas de otro organismo. Se ingieren a través de alimentos contaminados, principalmente carnes crudas o mal cocidas, pescado crudo o agua contaminada.
                p.mb-0 <b>Ejemplos clave:</b> <em>Taenia solium</em> (solitaria), <em>Trichinella spiralis</em>, <em>Cryptosporidium parvum</em> y <em>Toxoplasma gondii</em>.

          div(titulo="Hongos y levaduras")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/img21.png", data-aos="zoom-in").mx-auto
              .col-lg-7.order-1.mb-4.mb-lg-0
                p.mb-0 Aunque muchos son utilizados en la industria (pan, queso y cerveza), algunos producen micotoxinas (peligro químico). Su presencia en alimentos también puede indicar malas prácticas de almacenamiento.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 3.
          span Comparación de los tipos de peligros biológicos
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Característica
                th Bacterias
                th Virus
                th Parásitos
            tbody
              tr
                td Tamaño
                td Generalmente entre 1 y 5 μm.
                td Mucho más pequeños (20-300 nm).
                td Visibles al microscopio, algunos a simple vista.
              tr
                td Multiplicación en alimentos
                td Sí, pueden multiplicarse rápidamente.
                td No, solo sobreviven.
                td No, generalmente no se multiplican en el alimento.
              tr
                td Transmisión común
                td Alimentos crudos, contaminación cruzada.
                td Manipuladores infectados, agua contaminada.
                td Carnes y pescados crudos o mal cocidos, agua.
              tr
                td Ejemplo clave
                td <em>Salmonella</em> en pollo.
                td Hepatitis A en vegetales lavados con agua contaminada.
                td <em>Taenia solium</em> en carne de cerdo mal cocida.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Fuentes y rutas de contaminación en la cadena productiva



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img22.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0

        p.mb-4 La contaminación de los alimentos puede presentarse en cualquier etapa de la cadena productiva, desde la producción primaria (el campo o la granja) hasta el consumidor final. Para prevenirla, es fundamental comprender las fuentes de contaminación y las rutas mediante las cuales los contaminantes pueden transferirse de un lugar a otro.

        .bg-color-02.p-4.br-15.mb-0
          p.mb-3 Una de las formas de contaminación corresponde a la contaminación primaria o directa, la cual ocurre cuando el peligro proviene directamente de la fuente del alimento o de su entorno natural inmediato. Algunos ejemplos son:
          ul.lista-ul--color.mb-0
            li.d-flex 
              i.fas.fa-circle-check.me-2
              span Una fruta contaminada con residuos de plaguicidas en el campo. 
            li.d-flex 
              i.fas.fa-circle-check.me-2
              span Un pescado que contiene parásitos de forma natural (<em>anisakis</em>). 
            li.d-flex 
              i.fas.fa-circle-check.me-2
              span Un huevo contaminado con <em>Salmonella</em> desde el interior de la gallina. 
            li.d-flex 
              i.fas.fa-circle-check.me-2
              span Granos que desarrollan micotoxinas debido a condiciones inadecuadas de humedad durante el cultivo o el almacenamiento primario. 

    p.mb-5 Por otra parte, la contaminación cruzada corresponde a la transferencia de peligros desde una superficie, alimento o persona contaminada hacia otro alimento que inicialmente no se encontraba contaminado. Constituye una de las causas más frecuentes y prevenibles de las enfermedades transmitidas por alimentos (ETA), y generalmente se origina por fallas en los programas de saneamiento o por el incumplimiento de las Buenas Prácticas de Manufactura.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .bg-color-0.p-4.br-15.mb-0
          .row.align-items-center.justify-content-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-3 Las principales rutas de contaminación cruzada son:
              ul.lista-ul--color.mb-0
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span <b>De alimento a alimento:</b> ocurre cuando un alimento crudo, como el pollo, gotea sobre un alimento listo para el consumo, como una ensalada, durante el almacenamiento en refrigeración o la preparación sobre la misma superficie. 
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span <b>De superficie a alimento:</b> ocurre cuando un alimento cocido se corta sobre la misma tabla utilizada previamente para cortar pollo crudo, sin realizar el proceso de limpieza y desinfección entre usos. También puede presentarse cuando un alimento listo para el consumo entra en contacto con mesas, recipientes o cuchillos que no han sido adecuadamente higienizados. 
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span <b>Del manipulador al alimento:</b> ocurre cuando el personal manipula alimentos listos para el consumo sin realizar previamente el lavado de manos después de utilizar los servicios sanitarios, manipular dinero o tocarse el cabello o el rostro. Las manos constituyen uno de los principales vehículos de contaminación cruzada. 
                li.d-flex 
                  i.fas.fa-circle-check.me-2
                  span <b>Del ambiente al alimento:</b> ocurre cuando partículas de polvo, salpicaduras de agua contaminada, aerosoles generados durante las actividades de limpieza o corrientes de aire transportan contaminantes desde áreas sucias hacia áreas limpias.

            .col-lg-4.col-md-8.mb-0
              figure
                img(src="@/assets/curso/tema3/img23.png", data-aos="zoom-in").mx-auto


    h4.text-bold.mb-3 Rutas de contaminación cruzada en una planta de alimentos
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .bg-fondo-5.p-4
          SlyderA(tipo="b").bg-color-white.p-3.tarjeta
            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img24.png", data-aos="zoom-in").mx-auto
                .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Fuente contaminada
                  p.mb-3 La contaminación cruzada inicia con una fuente que contiene un peligro físico, químico o biológico.
                  p.mb-3.text-bold Ejemplos
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-circle-check
                      | Pollo crudo. 
                    li 
                      i.fas.fa-circle-check
                      | Manipulador con manos sucias. 
                    li 
                      i.fas.fa-circle-check
                      | Superficie contaminada. 

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img25.png", data-aos="zoom-in").mx-auto
                .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Mecanismo de transferencia
                  p.mb-3 El peligro se transfiere mediante contacto directo o a través de diferentes mecanismos.
                  p.mb-3.text-bold Ejemplos
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-circle-check
                      | Contacto directo. 
                    li 
                      i.fas.fa-circle-check
                      | Goteo. 
                    li 
                      i.fas.fa-circle-check
                      | Salpicaduras. 
                    li 
                      i.fas.fa-circle-check
                      | Aerosoles. 
                    li 
                      i.fas.fa-circle-check
                      | Manos sucias. 

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img26.png", data-aos="zoom-in").mx-auto
                .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Alimento vulnerable
                  p.mb-3 El peligro alcanza un alimento que inicialmente no estaba contaminado.
                  p.mb-3.text-bold Ejemplos
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-circle-check
                      | Alimento listo para consumo. 
                    li 
                      i.fas.fa-circle-check
                      | Producto cocido. 

            .tarjeta.p-4.h-100.mb-0
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-10.order-2.order-lg-1.mb-0.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema3/img27.png", data-aos="zoom-in").mx-auto
                .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
                  h4 Resultado
                  p.mb-3 Como consecuencia de la transferencia del peligro, el alimento queda contaminado.
                  p.mb-3.text-bold Ejemplos
                  ul.lista-ul--color.mb-0
                    li 
                      i.fas.fa-circle-check
                      | Peligro transferido. 
                    li 
                      i.fas.fa-circle-check
                      | Alimento contaminado. 
                  
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Enfermedades Transmitidas por Alimentos (ETA): un enfoque en los peligros biológicos



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img28.png", data-aos="zoom-in")
      .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0


        .bg-color-02.p-4.br-15.mb-4
          p.mb-0 Las ETA se definen como el síndrome originado por la ingestión de alimentos o agua que contienen agentes biológicos o químicos en cantidades tales que afectan la salud del consumidor. Los síntomas más comunes incluyen vómito, diarrea, fiebre, dolor abdominal y, en casos graves, deshidratación severa, daño neurológico, insuficiencia renal e incluso la muerte. Aunque para una persona sana una ETA puede ser una molestia pasajera, en poblaciones vulnerables (niños, ancianos, mujeres embarazadas y personas inmunodeprimidas) pueden tener consecuencias devastadoras y a menudo fatales.


        p.mb-0 Dentro de los peligros biológicos, las bacterias patógenas son los responsables de la mayoría de los brotes. La característica más peligrosa de muchas de ellas es su capacidad de multiplicarse rápidamente en el alimento si este se encuentra en la "zona de peligro" de temperaturas (entre 5 °C y 60 °C). Una sola bacteria presente en un alimento puede convertirse en millones en pocas horas si no se controla la temperatura de almacenamiento. Es crucial conocer las principales:


    .bg-full-width.bg-fondo-1
      .row.justify-content-center.mb-5
        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Salmonella</em> spp:</b> asociada a huevos crudos, pollo, carne, leche no pasteurizada, productos lácteos, vegetales contaminados. Causa salmonelosis: diarrea, fiebre, calambres abdominales.

        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Listeria monocytogenes</em>:</b> bacteria ambiental ubicua. Crece en refrigeración (psicotrofa). Asociada a lácteos no pasteurizados, carnes frías, patés, pescados ahumados, vegetales listos para consumo. Es especialmente peligrosa en embarazadas (abortos) y ancianos (meningitis).

        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Escherichia coli</em>:</b> productor de toxina Shiga (STEC), como O157:H7: asociada a carne molida mal cocida, leche sin pasteurizar, jugos no pasteurizados, vegetales regados con agua contaminada. Causa diarrea con sangre y puede derivar en Síndrome Urémico Hemolítico (insuficiencia renal).

        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Campylobacter jejuni</em>:</b> una de las causas más comunes de diarrea bacteriana. Asociada a pollo crudo o mal cocido, leche no pasteurizada, agua no tratada.

        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Staphylococcus aureus</em>:</b> bacteria que vive en la piel y fosas nasales humanas. Produce una toxina termoestable (resiste la cocción) en los alimentos si se dejan a temperatura ambiente. Asociada a alimentos manipulados por personas y luego mal refrigerados (ensaladas de papa, cremas, carnes frías). Causa vómitos violentos horas después del consumo.

        .col-md-12.col-lg-10.col-xl-10.mb-4
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Clostridium botulinum</em>:</b> bacteria formadora de esporas (resistentes al calor) que produce una toxina letal para el sistema nervioso (neurotoxina). Asociada a alimentos enlatados de baja acidez mal procesados (verduras, carnes, pescados), conservas caseras, miel (en bebés). Causa visión borrosa, parálisis muscular, fallo respiratorio.

        .col-md-12.col-lg-10.col-xl-10.mb-0
          .tarjeta-avatar-b.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema3/img29.svg' alt='')
            .tarjeta.bg-color-01.h-100
              .px-2.py-3
                p.mb-0.p-1 <b><em>Bacillus cereus</em>:</b> bacteria formadora de esporas. Asociada a dos tipos de intoxicación: una diarreica (por verduras, carnes, salsas) y una emética (vómito, asociada a arroz recalentado).


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-10.mb-0.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img30.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-2.mb-4.mb-lg-0

        p.mb-3 Además de las bacterias, los virus y parásitos también representan una importante causa de enfermedades transmitidas por alimentos:

        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03 bg-color-nuevo").mb-0
          div(titulo="Virus")
            p.mb-0 El virus de la Hepatitis A causa inflamación del hígado y se asocia a alimentos contaminados por manipuladores infectados (ej. ensaladas, <em>sándwiches</em>, frutas congeladas). El <em>Norovirus</em> es altamente contagioso y causa gastroenteritis aguda; se propaga rápidamente en lugares con alta densidad de personas (cruceros, restaurantes) a través de alimentos contaminados.

          div(titulo="Parásitos")
            p.mb-0 La <em>Taenia solium</em> (solitaria) se adquiere por consumo de carne de cerdo mal cocida. <em>Trichinella spiralis</em> se adquiere por consumo de carne de cerdo o de animales silvestres mal cocida. <em>Cryptosporidium</em> se asocia a agua contaminada y a vegetales frescos.


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img31.png", data-aos="zoom-in")
      .col-lg-9.order-1.order-lg-1.mb-0.mb-lg-0
        p.mb-4 La aparición de brotes de ETA no ocurre por casualidad; son el resultado de fallas en los controles. Los factores más comunes identificados por las autoridades sanitarias incluyen:

        ol.lista-ol--cuadro.lista-ol--separador.ps-3.ps-md-4
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span A
            div.ms-2 Temperaturas inadecuadas de conservación: mantener los alimentos perecederos en la zona de peligro entre 5 °C y 60 °C por tiempo prolongado.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span B
            div.ms-2 Cocción insuficiente: no alcanzar la temperatura interna necesaria para matar los patógenos.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span C
            div.ms-2 Contaminación cruzada: transferir patógenos de alimentos crudos a alimentos cocidos o listos para consumir.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span D
            div.ms-2 Malas prácticas de higiene del personal: manipuladores enfermos o con mala higiene de manos.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span E
            div.ms-2 Materias primas contaminadas: recibir ingredientes que ya vienen contaminados del proveedor.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span F
            div.ms-2 Enfriamiento inadecuado: enfriar grandes volúmenes de alimentos cocidos muy lentamente, permitiendo el crecimiento bacteriano.
          li.d-flex.align-items-start
            .lista-ol--cuadro__vineta
              span G
            div.ms-2 Alimentos de alto riesgo: consumir alimentos crudos o poco cocidos de origen animal (ostiones, leche sin pasteurizar, carnes crudas).

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
