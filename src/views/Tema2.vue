<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Construcción y gestión de redes seguras en la nube
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez seleccionada la arquitectura de nube, el siguiente paso consiste en diseñar y configurar la red que permitirá la comunicación segura entre los diferentes recursos tecnológicos. En los entornos tradicionales, esta segmentación se realizaba mediante dispositivos físicos, como enrutadores, conmutadores y cableado especializado; en la computación en la nube, estas funciones se implementan mediante software, lo que proporciona mayor flexibilidad, escalabilidad y control sobre la infraestructura.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 #[em Virtual Private Cloud] (VPC): el perímetro lógico
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1
        img(src='@/assets/curso/temas/t2/2.svg', alt='')
      .col-lg-11
        p El elemento fundamental para construir redes seguras en la nube es la Virtual Private Cloud (VPC), un entorno de red virtual aislado lógicamente dentro de la infraestructura de una nube pública. Al crear una VPC, la organización puede definir su propio esquema de direccionamiento IP, crear subredes y configurar rutas de comunicación y mecanismos de acceso de acuerdo con sus necesidades.
    
    p Para comprender este concepto, puede utilizarse la analogía de un edificio empresarial. 

    .mb-5
      img(src='@/assets/curso/temas/t2/3.jpg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p Una práctica habitual consiste en dividir la VPC en subredes públicas y subredes privadas. Las subredes públicas alojan los recursos que deben ser accesibles desde internet, como servidores web o balanceadores de carga. Las subredes privadas albergan componentes críticos, como bases de datos o servicios internos, que no deben exponerse directamente al exterior.
        .bg-color-4.bg-complr-8.p-4.mb-4
          p.mb-0 Esta separación fortalece la seguridad de la infraestructura. Por ejemplo, si un atacante compromete un servidor ubicado en una subred pública, las barreras de segmentación dificultan el acceso directo a los recursos ubicados en las subredes privadas.
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Arquitecturas multi-VPC y segmentación de entornos
    
    .row.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/t2/5.png', alt='')
      .col-lg-9
        .bg-color-4(data-aos='fade').mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/6.svg', alt='')
            .col-lg-7
              p A medida que las organizaciones incorporan más aplicaciones y servicios, una única VPC puede resultar insuficiente para mantener una adecuada organización y gobernanza de la red. En estos casos se implementan arquitecturas multi-VPC, las cuales consisten en utilizar varias VPC independientes para separar entornos, proyectos o áreas funcionales.
              p Un caso frecuente se presenta durante el desarrollo de #[em software], donde es necesario contar con entornos independientes para producción y pruebas. 
        p El entorno de producción aloja la versión de la aplicación que utilizan los usuarios finales, mientras que el entorno de pruebas se destina a validar nuevas funcionalidades, realizar ajustes técnicos y verificar el correcto funcionamiento de los cambios antes de su implementación en producción.
    
    .row.mb-3
      .col-lg-5
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col-lg-10
            p Si ambos entornos compartieran la misma VPC, una configuración incorrecta o una prueba fallida podría afectar la disponibilidad del servicio productivo. Para reducir este riesgo, se implementa una VPC exclusiva para producción y otra para pruebas, garantizando un mayor nivel de aislamiento y control.
        p Cuando es necesario intercambiar información entre ambas redes, se utilizan mecanismos de conectividad segura, como VPC Peering o Transit Gateway. Estas tecnologías permiten la comunicación controlada entre VPC mediante direcciones IP privadas, evitando que el tráfico circule por internet público y fortaleciendo la seguridad de la infraestructura. 
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Direccionamiento y conectividad: IP pública e IP interna
    
    .row.mb-3
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/10.svg', alt='')
          .col-lg-10
            p Para que los recursos de una red virtual privada (VPC) puedan comunicarse entre sí y, cuando sea necesario, con internet, es indispensable asignar direcciones IP. En los entornos de computación en la nube se utilizan principalmente dos tipos de direcciones: IP privadas e IP públicas.
        p Las direcciones IP privadas permiten la comunicación entre los recursos que se encuentran dentro de la misma infraestructura de nube. Estas direcciones se asignan automáticamente a las máquinas virtuales y otros servicios durante su creación. Su función principal es facilitar el intercambio de información de forma segura, rápida y sin exponer el tráfico a internet.
        .bg-color-5.bg-complr-8.p-4.mb-4
          p.mb-0 Por ejemplo, cuando un servidor web consulta información almacenada en una base de datos, la comunicación suele realizarse mediante direcciones IP privadas. De esta forma, los datos permanecen dentro de la red de la organización y no circulan por redes públicas.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/9.png', alt='')
    
    p Por otro lado, las direcciones IP públicas permiten que un recurso sea accesible desde internet. Son necesarias para servicios que deben atender solicitudes externas, como sitios web, aplicaciones empresariales o servicios de correo electrónico.
    p La siguiente tabla resume las principales diferencias entre ambos tipos de direccionamiento:
    
    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 1.
        span Comparación entre direcciones IP privadas e IP públicas
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th Característica
              th IP privada (interna)
              th IP pública
          tbody
            tr
              td Alcance.
              td Solo funciona dentro de la VPC o red privada.
              td Puede ser accesible desde internet.
            tr
              td Visibilidad.
              td No es visible desde el exterior.
              td Es visible y enrutable en internet.
            tr
              td Uso principal.
              td Comunicación entre recursos internos.
              td Acceso de usuarios o servicios externos.
            tr
              td Nivel de exposición.
              td Bajo.
              td Alto.
            tr
              td Ejemplos de uso.
              td Bases de datos, servidores de aplicaciones, sistemas internos.
              td Sitios web, balanceadores de carga, servidores de correo.
            tr
              td Recomendación de seguridad.
              td Utilizar siempre que sea posible.
              td Asignar únicamente cuando sea necesario.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/11.png', alt='')
      .col-lg-7
        p En una arquitectura segura, las direcciones IP públicas deben utilizarse con precaución. Las buenas prácticas recomiendan evitar su asignación directa a bases de datos o servicios internos críticos; en su lugar, las IP públicas suelen asociarse a componentes perimetrales, como balanceadores de carga o puertas de enlace (NAT Gateway), encargados de recibir las solicitudes externas y redirigirlas de forma controlada hacia los recursos internos que operan con direcciones IP privadas.
        p Este enfoque reduce la superficie de exposición de la infraestructura y contribuye a proteger los sistemas internos frente a accesos no autorizados o intentos de exploración provenientes de internet.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
