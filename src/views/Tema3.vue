<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas avanzadas de seguridad y enrutamiento perimetral
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que la arquitectura ha sido seleccionada y el perímetro lógico (VPC) ha sido establecido, el diseño de la red debe dotarse de inteligencia y control operativo. La nube no es inherentemente segura por defecto; su seguridad depende de la correcta parametrización de las herramientas que filtran, dirigen y gestionan el tráfico de datos. En este apartado, el aprendiz desarrollará las competencias para emplear los servicios, parámetros y elementos de redes seguras, cumpliendo así con el criterio de evaluación rector del primer resultado de aprendizaje.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Reglas de #[em firewall] y grupos de seguridad
    
    p En las infraestructuras de nube modernas, la protección perimetral no recae en un único equipo físico en el borde de la red, sino que se distribuye de manera granular a nivel de cada recurso virtualizado. Para lograr este nivel de aislamiento, los proveedores de nube implementan dos mecanismos complementarios: los grupos de seguridad (#[em Security Groups]) y las listas de control de acceso a la red (Network ACLs). Es fundamental que el profesional diferencie el alcance y el comportamiento de ambas herramientas para construir una defensa en profundidad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p Los grupos de seguridad actúan como un firewall virtual a nivel de instancia (la máquina virtual). Su comportamiento es "con estado" (#[em stateful]), lo que significa que, si se configura una regla para permitir que una solicitud de tráfico ingrese al servidor, la respuesta a esa solicitud tiene garantizada la salida, independientemente de las reglas de tráfico saliente establecidas. Desde una perspectiva pedagógica, el grupo de seguridad funciona como un guardia personal asignado específicamente a la puerta de una oficina; solo permite la entrada a quienes figuran explícitamente en su lista de invitados (política de denegación por defecto). 
        p Para comprender el funcionamiento de los grupos de seguridad, imagine un portal web de turismo donde las personas pueden consultar información sobre hoteles, sitios de interés y eventos de la región.
        .bg-color-4.bg-complr-8.p-4.mb-4
          p.mb-0 Los visitantes deben poder acceder libremente al sitio web desde cualquier lugar de internet. Por esta razón, el servidor web permite las conexiones necesarias para mostrar las páginas del portal. Sin embargo, las tareas de administración y mantenimiento del servidor solo deben ser realizadas por el equipo técnico autorizado, por lo que este acceso se restringe exclusivamente a sus equipos de trabajo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t3/3.svg', alt='')
      .col-lg-11
        p Por otra parte, la base de datos que almacena la información del portal no debe ser accesible directamente desde internet. Su única función es atender las solicitudes provenientes del servidor web. De esta manera, cuando una persona consulta información en el portal, la solicitud llega primero al servidor web, y este se comunica internamente con la base de datos para obtener la información requerida.
    
    //usuario internet

    p Con esta configuración, la base de datos permanece protegida y solo puede ser utilizada por los servicios que realmente la necesitan. Este enfoque aplica el principio de menor privilegio, que consiste en otorgar únicamente los accesos estrictamente necesarios para el funcionamiento del sistema.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por otro lado, las listas de control de acceso a la red (NACLs) operan a nivel de subred y actúan como un #[em firewall] "sin estado" (#[em stateless]). Esto implica que cada paquete de datos, tanto de entrada como de salida, es evaluado de forma independiente contra un conjunto de reglas numeradas. Las NACLs se utilizan comúnmente como una capa de seguridad secundaria y general, permitiendo, por ejemplo, bloquear de forma explícita rangos de direcciones IP maliciosas a nivel de toda la red antes de que el tráfico siquiera alcance los grupos de seguridad de las instancias individuales.
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Tablas de enrutamiento y control del flujo de tráfico
    
    p Una red no solo necesita mecanismos de seguridad, también requiere reglas que indiquen por dónde debe circular la información. De poco sirve tener servidores, subredes y #[em firewalls] correctamente configurados si los datos no saben cómo llegar a su destino.

    .row.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/t3/5.png', alt='')
      .col-lg-9
        p Las tablas de enrutamiento cumplen precisamente esta función. Pueden compararse con un sistema de señalización vial que indica qué camino debe seguir cada vehículo para llegar a un lugar específico. 
        .bg-color-5(data-aos='fade').mb-3
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/6.svg', alt='')
            .col-lg-7
              p En una red en la nube, los "vehículos" son los paquetes de datos y las tablas de enrutamiento les indican la ruta adecuada para comunicarse con otros recursos, acceder a internet o utilizar servicios externos.

    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Subredes públicas e Internet Gateway")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t3/7.png', alt='')
          .col-md-6
            p Cuando una organización necesita que un servidor sea accesible desde internet, debe ubicarlo en una subred pública; para que esto sea posible, la tabla de enrutamiento debe incluir una ruta que dirija el tráfico externo hacia una puerta de enlace a internet (Internet Gateway).
            p Puede imaginarse el Internet Gateway como la puerta principal de un edificio. Aunque una oficina tenga dirección y esté preparada para recibir visitantes, nadie podrá entrar o salir si el edificio no tiene una puerta conectada con el exterior.
            .bg-color-4.bg-complr-8.p-4.mb-4
              p.mb-0 #[b Por ejemplo.] Un servidor web que aloja una tienda virtual necesita que los clientes puedan acceder a ella desde cualquier lugar. Para lograrlo, la subred donde se encuentra el servidor debe disponer de una ruta hacia el Internet Gateway.
      .py-3.py-md-4(titulo="Subredes privadas y NAT Gateway")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t3/8.png', alt='')
          .col-md-6
            p No todos los recursos deben estar expuestos a internet. Las bases de datos, los sistemas internos o los servicios de procesamiento suelen ubicarse en subredes privadas para aumentar su nivel de protección.
            p Sin embargo, estos recursos pueden necesitar acceso temporal a internet para descargar actualizaciones de seguridad, sincronizar información o consumir servicios externos. Permitir conexiones directas desde internet hacia estos sistemas representaría un riesgo de seguridad.
            p Para resolver esta situación se utiliza un NAT Gateway (Network Address Translation Gateway). Este servicio actúa como un intermediario entre los recursos privados e internet.
    
    p Siguiendo la analogía del edificio, el NAT Gateway funciona como una recepción que realiza trámites externos en nombre de las oficinas internas. Las oficinas pueden enviar solicitudes hacia el exterior, pero las personas externas no pueden ingresar directamente a ellas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .subt-2.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t3/9.svg', alt='')
          h3.mb-0.ms-3.me-5.text-white El flujo de comunicación
        //tarjetas
        .subt-2.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t3/9.svg', alt='')
          h3.mb-0.ms-3.me-5.text-white Mientras que la siguiente comunicación permanece bloqueada
        //tarjetas
      .col-lg-5
        img(src='@/assets/curso/temas/t3/10.png', alt='')
    
    p Gracias a esta configuración, los recursos internos pueden acceder a servicios externos cuando lo necesitan, manteniendo al mismo tiempo la protección frente a conexiones no autorizadas provenientes de internet.
    p Por todo lo expuesto, las tablas de enrutamiento, los Internet Gateway y los NAT Gateway trabajan conjuntamente para controlar cómo circula la información dentro y fuera de la infraestructura. Esta combinación permite equilibrar conectividad y seguridad, garantizando que cada recurso tenga acceso únicamente a las comunicaciones que requiere para cumplir su función

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Balanceo de cargas y alta disponibilidad en servicios web
    
    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-4.d-flex.align-items-center.p-4.h-100
          p.mb-0 En los entornos digitales actuales, los usuarios esperan que las aplicaciones y los servicios estén disponibles de forma permanente. Sin embargo, depender de un único servidor representa un riesgo, ya que cualquier falla de hardware, software o conectividad puede provocar la interrupción total del servicio.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/11.png', alt='')
      .col-lg-4
        img.mb-5.w-85x.d-none.d-lg-block(src='@/assets/curso/temas/t3/12.svg', alt='')
        p.mb-0 Para reducir este riesgo, las arquitecturas en la nube utilizan múltiples servidores que trabajan conjuntamente, bajo estas condiciones, el balanceador de cargas (Load Balancer) actúa como un intermediario inteligente que recibe las solicitudes de los usuarios y las distribuye entre varios servidores disponibles.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.bg-color-5.p-4
          p.mb-0 Por ejemplo. Cuando cientos o miles de estudiantes acceden simultáneamente a una plataforma de formación virtual, todas las solicitudes llegan inicialmente al balanceador de cargas. Este analiza el estado y la capacidad de los servidores disponibles y dirige cada solicitud hacia el recurso que tenga mayor disponibilidad en ese momento.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t3/13.svg', alt='')
      .col-lg-11
        p Además de distribuir el tráfico, el balanceador supervisa continuamente el estado de los servidores. Si detecta que uno de ellos presenta fallas o deja de responder, deja de enviarle solicitudes y redirige automáticamente el tráfico hacia los servidores que continúan operando. De esta manera, los usuarios pueden seguir utilizando el servicio sin interrupciones perceptibles.
    
    p La siguiente tabla expone las principales funciones y beneficios del balanceo de cargas en entornos de nube

    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 2.
        span Funciones y beneficios del balanceo de cargas
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th Función
              th Descripción
              th Beneficio
          tbody
            tr
              td Distribución de tráfico.
              td Reparte las solicitudes entre varios servidores.
              td Evita la sobrecarga de un único servidor.
            tr
              td Alta disponibilidad.
              td Redirige el tráfico cuando un servidor presenta fallas.
              td Reduce interrupciones del servicio.
            tr
              td Escalabilidad.
              td Permite incorporar nuevos servidores según la demanda.
              td Facilita el crecimiento de la aplicación.
            tr
              td Monitoreo de salud.
              td Verifica continuamente el estado de los servidores.
              td Identifica y aísla recursos con fallas.
            tr
              td Optimización del rendimiento.
              td Dirige las solicitudes al servidor más disponible.
              td Mejora los tiempos de respuesta.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En proyectos que requieren altos niveles de calidad y continuidad operativa, el balanceador de cargas también facilita la implementación de nuevas versiones de una aplicación mediante estrategias como los despliegues blue/green. En este enfoque, una nueva versión del sistema recibe inicialmente una pequeña parte del tráfico mientras la versión actual continúa atendiendo la mayoría de los usuarios. Si las pruebas son satisfactorias, el balanceador redirige progresivamente todo el tráfico hacia la nueva versión. Esto permite realizar actualizaciones con un impacto mínimo sobre los usuarios y reduce significativamente los riesgos asociados a los cambios en producción
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Automatización y controles de acceso (IAM) en la red
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t3/15.svg', alt='')
      .col-lg-11 A medida que las infraestructuras en la nube crecen en tamaño y complejidad, administrar manualmente cada usuario, servidor, red o permiso se vuelve una tarea difícil y propensa a errores. Por esta razón, las organizaciones utilizan servicios de Gestión de Identidades y Accesos (IAM - Identity and Access Management), los cuales permiten controlar de forma centralizada quién puede acceder a los recursos y qué acciones puede realizar.
    
    p IAM funciona bajo el principio de otorgar únicamente los permisos necesarios para cumplir una función específica. De esta manera, se reduce el riesgo de accesos no autorizados y se fortalece la seguridad de la infraestructura.
   
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Funcionamiento básico  de IAM
        img(src='@/assets/curso/temas/t3/16.svg', alt='El proceso representa el flujo de control de acceso en un entorno de nube. Un usuario o servicio solicita acceso a un recurso, la plataforma IAM valida su identidad y permisos, y posteriormente determina si puede interactuar con elementos como redes virtuales (VPC), servidores, bases de datos, servicios de almacenamiento y balanceadores de carga. Este mecanismo garantiza que cada recurso sea utilizado únicamente por entidades autorizadas conforme a las políticas de seguridad definidas.')
    
    p En este proceso, IAM verifica primero la identidad del usuario o servicio y posteriormente determina si posee los permisos necesarios para acceder al recurso solicitado.
    p Por ejemplo, un servidor web puede tener autorización para almacenar registros de auditoría en un servicio de almacenamiento, pero no para modificar bases de datos o eliminar archivos críticos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Componentes de la Gestión de Identidades y Accesos (IAM)
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Componente
                th Función
            tbody
              tr
                td Usuario.
                td Identidad asociada a una persona que accede a los recursos.
              tr
                td Rol.
                td Conjunto de permisos asignados temporalmente a usuarios o servicios.
              tr
                td Política.
                td Documento que define las acciones permitidas o denegadas sobre los recursos.
              tr
                td Autenticación.
                td Proceso para verificar la identidad de quien solicita acceso.
              tr
                td Autorización.
                td Proceso para determinar qué acciones puede realizar un usuario o servicio.
              tr
                td Permisos.
                td Acciones específicas que pueden ejecutarse sobre un recurso.
      .col-lg-4
        img(src='@/assets/curso/temas/t3/17.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t3/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Automatización de la infraestructura
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/temas/t3/18.svg', alt='')
      .col-lg-11
        p La gestión de la infraestructura en la nube también puede automatizarse mediante herramientas de infraestructura como código (#[em infrastructure as code] - IaC). En lugar de crear redes, servidores o reglas de seguridad manualmente desde una consola web, los administradores utilizan archivos de configuración y scripts que describen la infraestructura requerida.
    
    .mb-4
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 4.
        span Ejemplos de automatización mediante infraestructura como código o IaC
      .tabla-a.color-primario.mb-5
        table
          thead
            tr
              th Actividad
              th Gestión manual
              th Gestión automatizada
          tbody
            tr
              td Creación de VPC.
              td Configuración desde consola web.
              td Archivo de configuración ejecutado automáticamente.
            tr
              td Reglas de #[em firewall].
              td Creación individual de reglas.
              td Definición de reglas en plantillas reutilizables.
            tr
              td Implementación de servidores.
              td Configuración uno a uno.
              td Despliegue simultáneo mediante scripts.
            tr
              td Balanceadores de carga.
              td Configuración manual.
              td Aprovisionamiento automático.
            tr
              td Aplicación de políticas de seguridad.
              td Ajustes individuales.
              td Implementación consistente en toda la infraestructura.
        
    p La integración entre IAM y la automatización permite que las organizaciones administren infraestructuras seguras, consistentes y escalables. Gracias a este enfoque, las configuraciones pueden desplegarse en minutos, reducir errores humanos y garantizar que los controles de seguridad se apliquen de forma uniforme en todos los recursos de la nube.

    p Le invitamos a explorar el video :

    h5 ¿Cómo se protege una aplicación en la nube desde Internet hasta la base de datos?

    p Este es un recurso que explica de manera práctica cómo funcionan las redes seguras en entornos cloud. A través de un recorrido por componentes como VPC, subredes, controles de acceso y balanceadores de carga, conocerá cómo se protege la información y se garantiza la disponibilidad de los servicios digitales utilizados diariamente por millones de personas.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video   
        





    



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
