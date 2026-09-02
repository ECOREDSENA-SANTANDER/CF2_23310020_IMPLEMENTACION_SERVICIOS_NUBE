<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El desarrollo de soluciones en la nube requiere integrar redes seguras, gestión eficiente de datos y servicios de inteligencia artificial. En este componente se abordaron los fundamentos para diseñar infraestructuras protegidas mediante redes virtuales, controles de acceso y mecanismos de disponibilidad. Asimismo, se estudió el ciclo de vida de los datos, desde su recopilación y almacenamiento hasta su transformación para el análisis. Finalmente, se exploró cómo los servicios administrados de #[em machine learning] e inteligencia artificial permiten automatizar procesos, generar predicciones y apoyar la toma de decisiones. En conjunto, estos conocimientos permiten comprender la nube como una plataforma capaz de ofrecer soluciones seguras, escalables e inteligentes para responder a las necesidades actuales de las organizaciones.    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza los principales componentes necesarios para implementar soluciones seguras e inteligentes en la nube. Inicia con los fundamentos de las arquitecturas de nube, la segmentación de redes y el direccionamiento del tráfico. Posteriormente, incorpora mecanismos de protección, disponibilidad y control de accesos mediante firewalls, balanceadores de carga, gestión de identidades y automatización. Sobre esta infraestructura se desarrolla el procesamiento de datos masivos, abordando el almacenamiento escalable, el ciclo de vida del dato y los procesos de transformación y calidad de la información. Finalmente, integra servicios de inteligencia artificial y machine learning, incluyendo el entrenamiento de modelos, plataformas administradas y APIs cognitivas para tareas como procesamiento de lenguaje natural y análisis de contenido multimedia, consolidando una arquitectura orientada a la seguridad, el análisis de datos y la innovación tecnológica.")
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
