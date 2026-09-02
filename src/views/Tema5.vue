<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ciclo de vida y procesamiento de datos masivos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Almacenar grandes cantidades de información no es suficiente para generar valor. Los datos deben pasar por una serie de etapas que permitan recopilarlos, organizarlos, depurarlos y transformarlos en información útil para la toma de decisiones.
        .bg-color-5.bg-complr-8.p-4.mb-4
          p.mb-0 Este proceso se conoce como ciclo de vida de los datos y permite que la información fluya desde diferentes fuentes hasta convertirse en reportes, indicadores, modelos predictivos o sistemas de inteligencia artificial. En los entornos de nube, este ciclo se ejecuta mediante servicios administrados que automatizan gran parte del trabajo técnico, reduciendo la complejidad operativa y facilitando el análisis de grandes volúmenes de información
      .col-lg-5
        img(src='@/assets/curso/temas/t5/1.png', alt='')
    
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1 Extracción y carga de datos en repositorios centralizados
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t5/2.png', alt='')
      .col-lg-7
        p El primer paso consiste en recopilar la información generada por los diferentes sistemas de una organización. Los datos pueden provenir de múltiples fuentes, como bases de datos, aplicaciones web, plataformas educativas, sistemas empresariales, dispositivos móviles o sensores conectados a internet.
        p Por ejemplo, una institución educativa puede generar información relacionada con accesos a la plataforma virtual, calificaciones, participación en foros, actividades académicas y encuestas de satisfacción. Cada uno de estos sistemas almacena información de forma independiente, por lo que es necesario reunirla en un repositorio centralizado para facilitar su análisis.
    
    p En las arquitecturas modernas de nube, este proceso suele seguir el modelo ELT (Extracción, Carga y Transformación). En este enfoque, los datos se recopilan y almacenan inicialmente en su formato original dentro de un #[em data lake]. Posteriormente, son transformados y preparados para su análisis.
    
    //tarjetas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 7.
          span Fuentes de datos en proyectos de #[em big data]
        .tabla-a.color-acento-contenido.mb-5
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
      .col-lg-4
        img(src='@/assets/curso/temas/t5/3.png', alt='')
    
    p Una vez recopilada, la información se almacena en un data lake utilizando servicios administrados de nube capaces de recibir grandes volúmenes de datos de forma automática y escalable.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2 Transformación y aseguramiento de la calidad de los datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/temas/t5/4.png', alt='')
      .col-lg-9
        p Después de almacenar la información, es necesario prepararla para su análisis. Los datos provenientes de diferentes sistemas suelen contener errores, registros duplicados o formatos inconsistentes que pueden afectar la calidad de los resultados.
        p La fase de transformación tiene como objetivo limpiar, organizar y estandarizar la información para que pueda ser utilizada por herramientas analíticas, tableros de control o modelos de inteligencia artificial.
    p Entre las actividades más comunes se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 8.
          span Actividades de transformación y calidad de datos
        .tabla-a.color-acento-contenido.mb-5
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
      .col-lg-5.bg-color-4
        img(src='@/assets/curso/temas/t5/5.png', alt='')
        p #[b Por ejemplo.] Una institución educativa puede encontrar que el mismo programa de formación aparece registrado con nombres diferentes en distintos sistemas. Durante la transformación, estos registros se unifican para garantizar que los análisis posteriores sean precisos.
    
    p Una vez completada la limpieza y organización de la información, los datos transformados se almacenan en un data warehouse, donde quedan disponibles para la generación de informes, indicadores y tableros de control.
    p El proceso completo puede representarse de la siguiente manera:

    //tarjetas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t5/6.svg', alt='')
      .col-lg-11
        p Gracias a los servicios administrados de la nube, estas tareas pueden ejecutarse de forma automática sobre grandes volúmenes de información. Esto permite que las organizaciones dediquen más tiempo al análisis y la toma de decisiones, en lugar de concentrarse en la administración de la infraestructura tecnológica.

    p Le invitamos a acceder al pódcast:

    img(src='@/assets/curso/temas/t5/7.png', alt='')
    .row.justify-content-center.g-0.bg-color-1
      .col-lg-11
        .tarjeta.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-boton.mb-3(
            texto="De los datos a la inteligencia: el poder de big data y la IA en la nube."
            :audio="require_src('@/assets/curso/temas/audio/5.mp3')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Este es un recurso complementario que aborda cómo las organizaciones transforman grandes volúmenes de datos en información estratégica mediante tecnologías de big data, machine learning e inteligencia artificial. A lo largo de este espacio se explica el papel de estas herramientas en la automatización de procesos, la generación de predicciones y el fortalecimiento de la toma de decisiones, resaltando su contribución a la innovación, la eficiencia operativa y la transformación digital de las organizaciones.



    

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
