<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fundamentos de big data en infraestructuras cloud
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t4/1.png', alt='')
      .col-lg-7
        p Una vez que la infraestructura de red ha sido configurada y protegida, las organizaciones pueden concentrarse en uno de los recursos más valiosos de la actualidad: los datos. Cada interacción realizada en un sitio web, una aplicación móvil, una plataforma educativa o un sistema empresarial genera información que puede utilizarse para comprender comportamientos, identificar tendencias y apoyar la toma de decisiones.
        .bg-color-5.bg-complr-8.p-4.mb-4
          p.mb-0 La computación en la nube ha facilitado el acceso a tecnologías de análisis de datos que anteriormente solo estaban al alcance de grandes corporaciones. Actualmente, organizaciones de cualquier tamaño pueden almacenar, procesar y analizar grandes volúmenes de información utilizando servicios administrados, sin necesidad de adquirir costosos centros de datos o infraestructuras especializadas.
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 #[em Concepto y evolución del procesamiento masivo de datos]
    
    p El término #[em big data] hace referencia al conjunto de tecnologías y estrategias utilizadas para almacenar y procesar grandes cantidades de información que superan la capacidad de los sistemas tradicionales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Características fundamentales del big data
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Característica
                th Descripción
                th Ejemplo
            tbody
              tr
                td Volumen.
                td Grandes cantidades de información.
                td Millones de registros académicos o transacciones comerciales.
              tr
                td Velocidad.
                td Datos que se generan y procesan continuamente.
                td Interacciones en redes sociales o compras en línea.
              tr
                td Variedad.
                td Diferentes tipos de datos.
                td Textos, imágenes, videos, audios y registros de sensores.
      .col-lg-4
        img(src='@/assets/curso/temas/t4/2.svg', alt='')
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-4.d-flex.align-items-center.p-4.h-100
          p.mb-0 Para comprender su evolución, imagine una institución educativa que durante varios años almacena información sobre matrículas, calificaciones, accesos a plataformas virtuales, participación en actividades y encuestas de satisfacción.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-4
        img.mb-5.w-85x.d-none.d-lg-block(src='@/assets/curso/temas/t4/4.svg', alt='')
        p.mb-0 Hace algunos años, analizar toda esta información requería servidores especializados, grandes inversiones en hardware y personal técnico dedicado a mantener la infraestructura. Como resultado, gran parte del esfuerzo se concentraba en administrar los equipos y no en analizar los datos.

    p Con la llegada de la computación en la nube, este modelo cambió significativamente. Ahora es posible almacenar grandes cantidades de información y utilizar recursos de procesamiento únicamente cuando se necesitan; de esta manera, las organizaciones pagan por el uso real de los servicios, sin necesidad de adquirir y mantener infraestructura propia

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Servicios administrados y almacenamiento escalable (#[em data warehouse])
    
    p Los proveedores de nube ofrecen servicios administrados que simplifican el trabajo con grandes volúmenes de datos. En este modelo, la organización se concentra en el análisis de la información mientras el proveedor se encarga de la infraestructura, el mantenimiento, las actualizaciones y la disponibilidad del servicio.
    p Para organizar la información, generalmente se utilizan dos componentes complementarios: el #[em data lake] y el #[em data warehouse.]

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 6.
        span Diferencias entre data lake y data warehouse
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th Característica
              th Data lake
              th Data warehouse
          tbody
            tr
              td Tipo de datos.
              td Datos en formato original.
              td Datos organizados y estructurados.
            tr
              td Propósito.
              td Almacenar grandes volúmenes de información.
              td Facilitar consultas e informes.
            tr
              td Flexibilidad.
              td Muy alta.
              td Orientada al análisis específico.
            tr
              td Usuarios principales.
              td Analistas y científicos de datos.
              td Directivos y responsables de negocio.
            tr
              td Ejemplo.
              td Registros de acceso, videos, audios y documentos.
              td Indicadores de rendimiento y tableros de control.

    p Puede imaginarse el data lake como una gran biblioteca donde se almacena todo tipo de información sin necesidad de clasificarla previamente. En cambio, el data warehouse funciona como una sala de consulta organizada, donde la información más relevante ya ha sido seleccionada, estructurada y preparada para el análisis.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Por ejemplo.]#[br]Una institución educativa puede almacenar en un data lake todos los registros históricos de acceso a plataformas virtuales, resultados académicos, encuestas y actividades realizadas por los aprendices. Posteriormente, los datos más importantes se organizan en un data warehouse para generar informes sobre rendimiento académico, permanencia estudiantil o efectividad de las estrategias pedagógicas.
    
    p Gracias a estos servicios, los directivos pueden consultar indicadores y tableros de control en cuestión de segundos, transformando grandes volúmenes de información en conocimiento útil para la toma de decisiones.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
