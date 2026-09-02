<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Arquitecturas de computación en la nube: fundamentos de la red
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-lg-7(data-aos='fade-left')
          .row.justify-content-center.mb-4
            .col-lg-2.d-none.d-lg-block
              img.px-lg-2(src='@/assets/curso/temas/t1/2.svg', alt='')
            .col-lg-10
              p.mb-0 Antes de implementar cualquier servicio en la nube, es necesario decidir dónde y cómo funcionarán los recursos tecnológicos de la organización, pues esta decisión se conoce como arquitectura de despliegue y constituye la base sobre la cual se configurarán posteriormente las redes, los mecanismos de seguridad, el acceso a internet y la comunicación entre los diferentes servicios.
          p La arquitectura seleccionada influye directamente en la forma en que se protegen los datos, se controlan los accesos y se administran los recursos tecnológicos. Por esta razón, para configurar redes seguras en la nube es fundamental comprender las características, ventajas y limitaciones de las arquitecturas de nube pública, privada e híbrida.
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Diferenciación estratégica: nube pública, privada e híbrida
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8(data-aos='fade-right')
          p Las organizaciones pueden implementar sus servicios en diferentes tipos de nube según sus necesidades de seguridad, costos, control y cumplimiento normativo.
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-3")
            .row(titulo="Nube pública")
              .col-md-11.mb-4.mb-md-0
                p La nube pública utiliza infraestructura tecnológica perteneciente a proveedores especializados como Amazon Web Services (AWS), Microsoft Azure o Google Cloud. Los recursos son compartidos entre múltiples clientes, aunque cada organización opera de forma independiente y segura; su principal ventaja es la facilidad para aumentar o disminuir la capacidad de procesamiento y almacenamiento según la demanda, pagando únicamente por los recursos utilizados.
                .bg-color-2
                  p Por ejemplo, una empresa que administra un sitio web.	Puede alojarlo en una nube pública para atender incrementos temporales de visitantes sin necesidad de adquirir nuevos servidores físicos.
            .row(titulo="Nube privada")
              .col-md-11.mb-4.mb-md-0
                p La nube privada, por su parte, está destinada exclusivamente a una organización. Puede operar en instalaciones propias o en centros de datos administrados por terceros, pero siempre bajo un esquema de uso exclusivo. Este modelo ofrece un mayor control sobre la infraestructura, la información y las políticas de seguridad, por lo que suele utilizarse cuando existen requisitos estrictos de privacidad o cumplimiento normativo.
            .row(titulo="Nube híbrida")
              .col-md-11.mb-4.mb-md-0
                p La nube híbrida combina recursos de nube pública y nube privada para aprovechar las ventajas de ambos modelos. En este esquema, las aplicaciones o servicios que requieren flexibilidad y escalabilidad pueden ejecutarse en la nube pública, mientras que la información más sensible permanece protegida en la infraestructura privada de la organización.
                .bg-color-2
                  p Por ejemplo, una institución educativa: puede almacenar los historiales académicos de sus estudiantes en servidores propios por razones de seguridad y normatividad, mientras utiliza servicios de nube pública para alojar plataformas de aprendizaje virtual o sistemas de videoconferencia. Ambos entornos pueden comunicarse mediante conexiones seguras para funcionar como una única solución tecnológica.
        .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
          img(src='@/assets/curso/temas/t1/3.png', alt='')
    
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Impacto de la arquitectura en el diseño de redes seguras
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-lg-7(data-aos='fade-left')
          p La arquitectura tecnológica determina cómo se organizan, conectan y protegen los recursos de una red; para garantizar la seguridad, es necesario segmentar la infraestructura según las funciones y los niveles de riesgo, además de implementar mecanismos como #[em firewalls], cifrado de datos, autenticación multifactorial y controles de acceso.
          p En entornos que combinan infraestructura local y servicios en la nube, las conexiones deben establecerse mediante canales seguros y políticas de seguridad unificadas; asimismo, el monitoreo continuo, las actualizaciones y las copias de respaldo permiten proteger la confidencialidad, integridad y disponibilidad de la información.
          .bg-color-4.bg-complr-8.p-4.mb-4
            p.mb-0 Por ejemplo: una institución educativa puede separar la red administrativa de la red utilizada por estudiantes y visitantes. El acceso a los sistemas académicos y financieros se autoriza únicamente al personal responsable, mientras que las plataformas educativas permanecen disponibles para los estudiantes mediante credenciales individuales y conexiones protegidas. Así, la arquitectura contribuye a garantizar la confidencialidad, integridad y disponibilidad de la información.
          
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
