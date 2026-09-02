<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Redes seguras y servicios avanzados en la nube',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con arquitecturas de nube, redes virtuales privadas, segmentación, direccionamiento, <em>firewall</em>, enrutamiento, balanceo de cargas, control de accesos, <em>big data</em>, <em>machine learning</em> e inteligencia artificial como servicios gestionados.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué aspecto condiciona el diseño de redes seguras en la nube?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color del panel de administración del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de usuarios que imprimen documentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La elección de la arquitectura de despliegue: pública, privada o híbrida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El nombre comercial asignado al proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las arquitecturas de computación en la nube.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza a una nube pública?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La infraestructura física pertenece a un proveedor externo y se ofrece a múltiples organizaciones a través de internet.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los recursos son exclusivos de una sola organización y no usan internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El usuario debe administrar directamente todos los servidores físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo permite almacenar datos sin ejecutar servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con nube pública, privada e híbrida.',
        },
        {
          id: 3,
          texto:
            '¿En qué escenario resulta más pertinente una nube privada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando se requiere control absoluto, privacidad de datos y cumplimiento normativo estricto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando todos los recursos deben compartirse públicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando no existe necesidad de seguridad ni aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se desea eliminar toda administración tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el control, privacidad y cumplimiento en la nube privada.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite una arquitectura híbrida?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impedir el uso de canales cifrados entre entornos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar toda conexión entre los sistemas internos y externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar únicamente servidores físicos sin virtualización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Combinar infraestructura local o privada con servicios de nube pública.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con nubes híbridas y conectividad segura.',
        },
        {
          id: 5,
          texto:
            '¿Qué es una <em>Virtual Private Cloud</em> o VPC?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una red virtual lógicamente aislada dentro de una infraestructura de nube pública.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un servidor físico instalado únicamente en una oficina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una aplicación de correo electrónico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un archivo usado para almacenar contraseñas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la construcción de redes seguras mediante VPC.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una práctica recomendada al dividir una VPC?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ubicar todos los recursos en una única subred pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear subredes públicas para servicios expuestos y subredes privadas para bases de datos o procesamiento interno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Asignar internet directo a todos los servidores internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las tablas de enrutamiento de la arquitectura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con segmentación de redes en la nube.',
        },
        {
          id: 7,
          texto:
            '¿Qué propósito tiene una arquitectura multi-VPC?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impedir la comunicación privada entre entornos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mezclar todos los recursos en una única red sin control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separar lógicamente departamentos, proyectos o entornos como producción y pruebas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir los servicios de seguridad por nombres de carpetas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con multi-VPC y aislamiento de ambientes.',
        },
        {
          id: 8,
          texto:
            'Una base de datos debe comunicarse con un servidor web dentro de la misma VPC sin exponerse a internet. ¿Qué tipo de direccionamiento debería utilizar?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dirección IP pública para facilitar el acceso externo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dirección MAC para controlar el tráfico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dirección IP privada o interna para la comunicación entre recursos de la VPC.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dirección DNS pública para reemplazar la conectividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con direccionamiento interno y comunicación privada en redes <em>cloud</em>.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una buena práctica en el uso de direcciones IP públicas?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignarlas directamente a servidores de bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usarlas solo en componentes perimetrales como balanceadores o puertas de enlace.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartirlas sin restricciones entre todos los recursos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usarlas para eliminar la segmentación privada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con direccionamiento, conectividad y seguridad perimetral.',
        },
        {
          id: 10,
          texto:
            'Una organización necesita controlar el acceso a nivel de instancia y también aplicar restricciones generales a nivel de subred. ¿Qué mecanismos debería implementar?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grupos de seguridad y listas de control de acceso a la red (NACLs).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Procesadores de texto y hojas de cálculo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impresoras de red y dispositivos de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carpetas compartidas sin permisos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con seguridad perimetral en entornos <em>cloud</em>.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza a un grupo de seguridad en la nube?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina la necesidad de controlar accesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un documento administrativo sin efecto técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite únicamente almacenar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Funciona como un <em>firewall</em> virtual con estado a nivel de instancia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con grupos de seguridad y reglas de permisión explícita.',
        },
        {
          id: 12,
          texto:
            'Un servidor ubicado en una subred pública no logra comunicarse con internet. ¿Qué elemento debería revisarse primero para verificar la ruta del tráfico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La tabla de enrutamiento y la ruta configurada hacia el Internet Gateway.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El nombre asignado al servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño del almacenamiento de la instancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La versión del sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con enrutamiento y pasarelas en la nube.',
        },
        {
          id: 13,
          texto:
            '¿Qué beneficio aporta un balanceador de cargas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribuir tráfico entre varias instancias para mejorar disponibilidad y rendimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Concentrar todas las solicitudes en un único servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de subredes privadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bloquear permanentemente todo acceso externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con balanceadores de carga y resiliencia.',
        },
        {
          id: 14,
          texto:
            '¿Qué principio debe aplicarse en la gestión de identidades y accesos IAM?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Otorgar permisos ilimitados a todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar privilegio mínimo, concediendo solo los permisos requeridos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir una única cuenta administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las políticas de acceso para facilitar el ingreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con gobernanza, accesos y seguridad en la nube.',
        },
        {
          id: 15,
          texto:
            'Una organización analiza millones de registros provenientes de sensores, aplicaciones móviles y redes sociales en tiempo real. ¿Qué concepto describe mejor esta situación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Big data</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenamiento local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Red privada virtual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Balanceo de cargas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con fundamentos de <em>big data</em> en infraestructuras <em>cloud</em>.',
        },
        {
          id: 16,
          texto:
            '¿Qué diferencia existe entre un <em>data lake</em> y un <em>data warehouse</em>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El <em>data lake</em> almacena datos crudos y variados; el <em>data warehouse</em> almacena datos estructurados para análisis.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ambos almacenan únicamente contraseñas de usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El <em>data warehouse</em> se usa solo para conectar cables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El <em>data lake</em> reemplaza todas las reglas de <em>firewall</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con <em>data lake</em> y <em>data warehouse</em>.',
        },
        {
          id: 17,
          texto:
            '¿Qué caracteriza al modelo ELT en la nube?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los datos antes de almacenarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extraer datos, cargarlos primero en un repositorio <em>cloud</em> y transformarlos posteriormente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transformar manualmente todos los registros sin usar servicios <em>cloud</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar únicamente hojas impresas para el análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con extracción, carga y transformación de datos.',
        },
        {
          id: 18,
          texto:
            '¿Qué busca la transformación y aseguramiento de la calidad de los datos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impedir el análisis de datos históricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hacer públicos todos los datos sin validación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las fuentes de información de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpiar, estandarizar y estructurar los datos para generar información confiable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con transformación y aseguramiento de la calidad de los datos.',
        },
        {
          id: 19,
          texto:
            'Una empresa desea desarrollar un sistema que aprenda automáticamente a identificar patrones en los datos sin programar explícitamente cada regla de decisión. ¿Qué tecnología debería utilizar?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Machine learning</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Firewall</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'VPC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'NAT Gateway.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con IA y <em>machine learning</em> como servicios gestionados.',
        },
        {
          id: 20,
          texto:
            '¿Qué ventaja ofrece integrar APIs de inteligencia artificial preentrenadas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite consumir capacidades como visión artificial, procesamiento de lenguaje natural o chatbots sin entrenar modelos desde cero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Obliga a construir manualmente todos los algoritmos desde el inicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impide que las aplicaciones se comuniquen con servicios <em>cloud</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de enviar solicitudes seguras por internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con integración de APIs y modelos preentrenados.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre redes seguras, VPC, segmentación, seguridad perimetral, <em>big data</em>, <em>machine learning</em> e inteligencia artificial como servicios gestionados en la nube.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>