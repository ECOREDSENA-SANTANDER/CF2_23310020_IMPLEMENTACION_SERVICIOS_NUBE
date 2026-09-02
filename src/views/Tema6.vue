<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Aprendizaje automático e inteligencia artificial como servicios gestionados
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Almacenar grandes cantidades de información no es suficiente para generar valor. Los datos deben pasar por una serie de etapas que permitan recopilarlos, organizarlos, depurarlos y transformarlos en información útil para la toma de decisiones.
        .bg-color-6.bg-complr-8.p-4.mb-4
          p.mb-0 Este proceso se conoce como ciclo de vida de los datos y permite que la información fluya desde diferentes fuentes hasta convertirse en reportes, indicadores, modelos predictivos o sistemas de inteligencia artificial. En los entornos de nube, este ciclo se ejecuta mediante servicios administrados que automatizan gran parte del trabajo técnico, reduciendo la complejidad operativa y facilitando el análisis de grandes volúmenes de información
      .col-lg-5
        img(src='@/assets/curso/temas/t6/1.png', alt='')
    
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1 Conceptos fundamentales: #[em machine learning] e IA en la nube
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-5.d-flex.align-items-center.p-4.h-100
          p.mb-0 La inteligencia artificial es un conjunto de tecnologías que permite a los sistemas realizar tareas que normalmente requieren capacidades humanas, como comprender texto, reconocer imágenes, interpretar voz o apoyar la toma de decisiones. Dentro de este campo se encuentra el #[em machine learning] o aprendizaje automático, una rama de la IA que permite a los sistemas aprender a partir de los datos y mejorar sus resultados con la experiencia.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t6/2.svg', alt='')
      .col-lg-4
        img.mb-5.w-85x.d-none.d-lg-block(src='@/assets/curso/temas/t6/3.svg', alt='')
        p.mb-0 #[b Por ejemplo.] Una plataforma educativa puede analizar el comportamiento de los estudiantes para identificar quiénes presentan riesgo de deserción. En lugar de programar manualmente todas las reglas posibles, el sistema aprende a partir de los datos históricos y detecta patrones que ayudan a realizar predicciones
    
    p El funcionamiento general puede resumirse de la siguiente manera:

    //tarjetas

    p Durante el entrenamiento, el sistema analiza grandes cantidades de información para identificar patrones. Posteriormente, el modelo entrenado utiliza nuevos datos para generar resultados, realizar clasificaciones o formular predicciones.
    p La nube facilita este proceso al proporcionar acceso temporal a recursos de alto rendimiento, permitiendo entrenar modelos complejos sin necesidad de adquirir infraestructura propia.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.2 Herramientas esenciales y selección de componentes
    
    p Los proveedores de nube ofrecen diferentes niveles de servicios para trabajar con inteligencia artificial y #[em machine learning]. La selección depende del nivel de personalización requerido y de la experiencia técnica del equipo.

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 9.
        span Niveles de servicios de inteligencia artificial en la nube
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th Nivel de servicio
              th Características
              th Usuario principal
          tbody
            tr
              td Infraestructura especializada.
              td Proporciona servidores con unidades de procesamiento gráfico (#[em graphics processing units], GPU) u otros aceleradores, para desarrollar y entrenar modelos.
              td Científicos de datos e investigadores.
            tr
              td Plataformas de #[em machine learning].
              td Permiten crear, entrenar y desplegar modelos personalizados mediante herramientas administradas.
              td Desarrolladores y equipos de analítica.
            tr
              td APIs y servicios cognitivos.
              td Ofrecen modelos preentrenados listos para usar.
              td Desarrolladores de aplicaciones y soluciones empresariales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/temas/t6/4.png', alt='')
      .col-lg-8
        p En la mayoría de los proyectos organizacionales, las APIs y servicios cognitivos representan la alternativa más rápida y económica, ya que permiten incorporar capacidades de inteligencia artificial sin necesidad de construir modelos propios.
        p Por ejemplo, una aplicación puede utilizar un servicio de reconocimiento de imágenes para identificar objetos en fotografías o una API de procesamiento de lenguaje natural para analizar comentarios escritos por los usuarios.
    
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.3 Integración de APIs y modelos preentrenados en soluciones reales
    
    p Las APIs de inteligencia artificial funcionan como servicios especializados disponibles a través de internet. El desarrollador envía una solicitud con la información que desea analizar y recibe una respuesta generada por un modelo previamente entrenado.
    p El proceso general puede representarse de la siguiente manera:

    //tarjetas

    p La siguiente tabla presenta algunos ejemplos de servicios de inteligencia artificial disponibles en la nube.

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 10.
        span Aplicaciones de las APIs de inteligencia artificial
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th Servicio
              th Función
              th Ejemplo de aplicación
          tbody
            tr
              td Procesamiento de lenguaje natural.
              td Analiza textos y conversaciones.
              td Clasificación automática de comentarios o consultas.
            tr
              td Visión artificial.
              td Interpreta imágenes y fotografías.
              td Verificación de identidad o reconocimiento de objetos.
            tr
              td Reconocimiento de voz.
              td Convierte voz en texto o texto en voz.
              td Asistentes virtuales y sistemas de atención.
            tr
              td Traducción automática.
              td Traduce contenido entre diferentes idiomas.
              td Plataformas multilingües.
            tr
              td Chatbots inteligentes.
              td Responden preguntas de forma automática.
              td Atención a usuarios y soporte técnico.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/temas/t6/5.png', alt='')
      .col-lg-8
        .bg-color-6.bg-complr-8.p-4.mb-4
          p.mb-0 #[b Por ejemplo.] #[br]Una institución educativa puede integrar diferentes servicios de inteligencia artificial en su plataforma virtual. Un servicio de visión artificial puede apoyar procesos de validación de identidad durante evaluaciones en línea; una herramienta de procesamiento de lenguaje natural puede analizar comentarios de los estudiantes para identificar temas que requieren refuerzo académico; y un chatbot puede responder consultas frecuentes sobre matrículas, horarios o actividades formativas.
        p Estos servicios permiten mejorar la experiencia de los usuarios, automatizar tareas repetitivas y apoyar la toma de decisiones basada en datos. De esta manera, la combinación de redes seguras, procesamiento de datos masivos e inteligencia artificial convierte a la nube en una plataforma capaz de impulsar procesos de innovación en diferentes sectores productivos.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una institución educativa puede integrar diferentes servicios de inteligencia artificial en su plataforma virtual. Un servicio de visión artificial puede apoyar procesos de validación de identidad durante evaluaciones en línea; una herramienta de procesamiento de lenguaje natural puede analizar comentarios de los estudiantes para identificar temas que requieren refuerzo académico; y un chatbot puede responder consultas frecuentes sobre matrículas, horarios o actividades formativas.
      

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
