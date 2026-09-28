<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo “Verificación, control y análisis de riesgos sanitarios” desarrolla los fundamentos necesarios para verificar el cumplimiento de los programas que soportan las condiciones de saneamiento en la industria alimentaria. Para ello, aborda la verificación de los programas de limpieza y desinfección, control de plagas, manejo de residuos sólidos y líquidos, abastecimiento de agua potable, mantenimiento de instalaciones y equipos, control de proveedores y materias primas, capacitación del personal, así como la gestión de registros y la implementación de acciones correctivas derivadas de los procesos de verificación.
    
    p.mb-3 Asimismo, analiza los factores de contaminación de los alimentos mediante la identificación de los peligros físicos, químicos y biológicos, las fuentes y rutas de contaminación en la cadena productiva y las principales Enfermedades Transmitidas por Alimentos (ETA). Finalmente, presenta el diagnóstico sanitario como herramienta para la identificación de hallazgos y oportunidades de mejora, junto con los principios del Sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP), las barreras primarias para el control de materias primas, procesos y personal, y la formulación de acciones correctivas y preventivas orientadas al fortalecimiento de la inocuidad alimentaria y la mejora continua.

    
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Infografía titulada “Verificación, control y análisis de riesgos sanitarios”, organizada en cuatro temas principales: fundamentos de los programas de saneamiento en la industria alimentaria; verificación de los programas de saneamiento; factores de contaminación de los alimentos; e identificación de medidas preventivas basadas en el diagnóstico sanitario. Cada tema incluye conceptos relacionados con programas de limpieza y desinfección, control de plagas, manejo de residuos, abastecimiento de agua, mantenimiento, capacitación, peligros físicos, químicos y biológicos, fuentes de contaminación, enfermedades transmitidas por alimentos, sistema HACCP, barreras preventivas y acciones correctivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
