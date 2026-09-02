<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ciclo de vida y procesamiento de datos masivos
    
    .row.justify-content-center.align-items-center
      .col-lg-7(data-aos='fade-right')
        p Almacenar grandes cantidades de información no es suficiente para generar valor. Los datos deben pasar por una serie de etapas que permitan recopilarlos, organizarlos, depurarlos y transformarlos en información útil para la toma de decisiones.
        .bg-color-5.p-4.px-lg-5
          p.mb-0 Este proceso se conoce como ciclo de vida de los datos y permite que la información fluya desde diferentes fuentes hasta convertirse en reportes, indicadores, modelos predictivos o sistemas de inteligencia artificial. En los entornos de nube, este ciclo se ejecuta mediante servicios administrados que automatizan gran parte del trabajo técnico, reduciendo la complejidad operativa y facilitando el análisis de grandes volúmenes de información
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t5/1.png', alt='')
    

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Extracción y carga de datos en repositorios centralizados
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t5/2.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p El primer paso consiste en recopilar la información generada por los diferentes sistemas de una organización. Los datos pueden provenir de múltiples fuentes, como bases de datos, aplicaciones web, plataformas educativas, sistemas empresariales, dispositivos móviles o sensores conectados a internet.
        p Por ejemplo, una institución educativa puede generar información relacionada con accesos a la plataforma virtual, calificaciones, participación en foros, actividades académicas y encuestas de satisfacción. Cada uno de estos sistemas almacena información de forma independiente, por lo que es necesario reunirla en un repositorio centralizado para facilitar su análisis.
    
    p En las arquitecturas modernas de nube, este proceso suele seguir el modelo ELT (Extracción, Carga y Transformación). En este enfoque, los datos se recopilan y almacenan inicialmente en su formato original dentro de un #[em data lake]. Posteriormente, son transformados y preparados para su análisis.
    
    .row.justify-content-center.arrow-steps2.mb-5(data-aos='fade')
      .col-lg-3.col-md-6.px-lg-0.mb-3.mb-lg-0
        .step-item
          h5.text-white.mb-0 Fuentes de datos
      .col-lg-3.col-md-6.px-lg-0.mb-3.mb-lg-0
        .step-item.step-item--2
          h5.mb-0 #[em Data lake]
      .col-lg-3.col-md-6.px-lg-0.mb-3.mb-lg-0
        .step-item
          h5.text-white.mb-0 Transformación
      .col-lg-3.col-md-6.px-lg-0.mb-3.mb-lg-0
        .step-item.step-item--2
          h5.mb-0 Análisis

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 7.
          span Fuentes de datos en proyectos de #[em big data]
        .tabla-a.color-acento-contenido.tabl2
          table
            thead
              tr
                th Fuente de datos
                th Tipo de información
            tbody
              tr
                td Plataforma educativa.
                td Accesos, actividades y calificaciones.
              tr
                td Sistema académico.
                td Matrículas y registros estudiantiles.
              tr
                td Aplicación móvil.
                td Navegación y uso de servicios.
              tr
                td Redes sociales.
                td Comentarios e interacciones.
              tr
                td Sensores IoT (#[em Internet of Things]).
                td Temperatura, ubicación o estado de equipos.
              tr
                td Sistema ERP (Enterprise Resource Planning).
                td Información administrativa y financiera.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t5/3.png', alt='')
    
    p Una vez recopilada, la información se almacena en un #[em data lake] utilizando servicios administrados de nube capaces de recibir grandes volúmenes de datos de forma automática y escalable.


    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Transformación y aseguramiento de la calidad de los datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t5/4.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p Después de almacenar la información, es necesario prepararla para su análisis. Los datos provenientes de diferentes sistemas suelen contener errores, registros duplicados o formatos inconsistentes que pueden afectar la calidad de los resultados.
        p La fase de transformación tiene como objetivo limpiar, organizar y estandarizar la información para que pueda ser utilizada por herramientas analíticas, tableros de control o modelos de inteligencia artificial.
    
    p.mb-4 Entre las actividades más comunes se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 8.
          span Actividades de transformación y calidad de datos
        .tabla-a.color-acento-contenido.tabl2.mb-4.mb-lg-0
          table
            thead
              tr
                th Actividad
                th Propósito
            tbody
              tr
                td Eliminar duplicados.
                td Evitar registros repetidos.
              tr
                td Corregir formatos.
                td Unificar fechas, nombres o códigos.
              tr
                td Completar datos faltantes.
                td Mejorar la calidad de la información.
              tr
                td Validar consistencia.
                td Detectar errores o anomalías.
              tr
                td Integrar fuentes.
                td Combinar información de diferentes sistemas.
              tr
                td Clasificar datos.
                td Preparar la información para el análisis.
      .col-lg-5(data-aos='fade-left')
        .bg-color-4.tarjeta.p-4
          img.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t5/5.png', alt='')
          p.mb-0 #[b Por ejemplo.] Una institución educativa puede encontrar que el mismo programa de formación aparece registrado con nombres diferentes en distintos sistemas. Durante la transformación, estos registros se unifican para garantizar que los análisis posteriores sean precisos.
    
    p Una vez completada la limpieza y organización de la información, los datos transformados se almacenan en un #[em data warehouse], donde quedan disponibles para la generación de informes, indicadores y tableros de control.
    p.mb-4 El proceso completo puede representarse de la siguiente manera:

    .row.justify-content-center.arrow-steps3.mb-5(data-aos='fade')
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item
          h5.text-white.mb-0 Datos originales
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item.step-item--2
          h5.mb-0 Limpieza  
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item
          h5.text-white.mb-0 Estandarización
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item.step-item--2
          h5.mb-0 Integración
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item
          h5.text-white.mb-0 #[em Data warehouse]
      .col-lg-2.col-md-5.col-9.px-lg-0.mb-3.mb-lg-0
        .step-item.step-item--2
          h5.mb-0 Reportes y análisis

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t5/6.svg', alt='')
      .col-lg-11(data-aos='fade-left')
        p.mb-0 Gracias a los servicios administrados de la nube, estas tareas pueden ejecutarse de forma automática sobre grandes volúmenes de información. Esto permite que las organizaciones dediquen más tiempo al análisis y la toma de decisiones, en lugar de concentrarse en la administración de la infraestructura tecnológica.

    p Le invitamos a acceder al pódcast:

    .mb-4(data-aos='fade-down')
      img(src='@/assets/curso/temas/t5/7.png', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones.mb-3(
          texto="De los datos a la inteligencia: el poder de big data y la IA en la nube."
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .row.justify-content-center
            .col-11
              p.mb-0 Este es un recurso complementario que aborda cómo las organizaciones transforman grandes volúmenes de datos en información estratégica mediante tecnologías de #[em big data], #[em machine learning] e inteligencia artificial. A lo largo de este espacio se explica el papel de estas herramientas en la automatización de procesos, la generación de predicciones y el fortalecimiento de la toma de decisiones, resaltando su contribución a la innovación, la eficiencia operativa y la transformación digital de las organizaciones.



    

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
