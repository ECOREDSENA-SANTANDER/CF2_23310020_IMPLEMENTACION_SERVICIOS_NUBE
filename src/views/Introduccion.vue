<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2(data-aos='fade-right')
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-10(data-aos='fade-left')
        p La transición hacia la economía digital exige que las infraestructuras tecnológicas evolucionen más allá de la simple virtualización de servidores para adoptar ecosistemas interconectados, inteligentes y, sobre todo, altamente seguros. El presente componente formativo "Redes seguras y servicios avanzados en la nube", está diseñado para orientar al aprendiz, en la comprensión y aplicación de arquitecturas de red seguras y el aprovechamiento de tecnologías emergentes; a lo largo de este material, el aprendiz desarrollará capacidades necesarias para configurar infraestructuras de red aisladas y protegidas, así como a implementar servicios administrados de #[em big data] e inteligencia artificial (IA), integrando la seguridad de la infraestructura con el análisis avanzado de la información.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p El abordaje de estos contenidos se realiza mediante una progresión pedagógica que parte desde la base estructural de la nube. Inicialmente, se desarrollará la capacidad de diferenciar y seleccionar las arquitecturas de nube (pública, privada e híbrida) para luego profundizar en la construcción de redes virtuales privadas (VPC, por sus siglas en inglés), la configuración de reglas de #[em firewall], el balanceo de cargas y los controles de acceso. Una vez consolidada la red segura, el documento transita hacia la capa de servicios avanzados, donde se explica el funcionamiento de los ecosistemas de #[em big data], abarcando desde la extracción y calidad de los datos hasta su almacenamiento en #[em data warehouse] (almacén de datos). Asimismo, se explorará cómo el aprendizaje automático (#[em machine learning]) y las interfaces de programación de aplicaciones (API) de inteligencia artificial se consumen como servicios gestionados para dotar a las aplicaciones de capacidades cognitivas.
      .col-lg-5
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    p La importancia de este componente en el proceso formativo radica en su pertinencia directa con las exigencias del sector productivo, por ejemplo, las organizaciones requieren cada vez más profesionales capaces no solo de implementar infraestructuras tecnológicas, sino también de garantizar que éstas operen de manera segura, escalable y eficiente. El verdadero desafío profesional consiste en diseñar cómo los sistemas se comunican de forma segura con el exterior y cómo procesan volúmenes masivos de información para generar valor organizacional; por ello, este material servirá como una guía metodológica y técnica para resolver problemas reales, garantizando que cada configuración de red y cada servicio de datos implementado respondan a requerimientos técnicos y necesidades operativas del entorno. Se invita al aprendiz a recorrer estos contenidos con una postura analítica, reconociendo que la automatización y la inteligencia artificial, sustentadas en redes seguras, constituyen elementos fundamentales para la creación de soluciones digitales competitivas y resilientes.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
