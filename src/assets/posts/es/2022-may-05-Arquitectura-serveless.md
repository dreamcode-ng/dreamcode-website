---
metaTitle: Arquitectura Serverless, transformando el desarrollo de los negocios
meta_description: El modelo de arquitectura serverless y su impacto en el desarrollo de aplicaciones y la tecnología.
title: Arquitectura Serverless, el modelo de cloud computing que está transformando el desarrollo tecnológico en los negocios
read: 5-10min
date: May 5, 2022
url: serverless-architecture-cloud-computing-model-transforming-business-web-development
category: up-to-date
imglink: serverless-architecture-cloud-computing-business-web-development.jpg
---

La arquitectura serverless es un modelo de desarrollo de aplicaciones que se ha posicionado como una nueva tendencia, por ello analizaremos qué tan disruptivo ha resultado como un nuevo paradigma en la industria de la tecnología.

Para tal fin enunciaremos cuáles son sus bases tecnológicas, qué beneficios entrega, quiénes son sus abanderados y cómo dar un primer paso para migrar a este nuevo arquetipo del cloud computing para el desarrollo empresarial.

## Realidad VS Hype

En lo que respecta a la arquitectura web emplear el término _serverless_ resulta un tanto más pretencioso que preciso. Pues si bien es claro que los desarrolladores que opten por esta tecnología podrán desentenderse de la planeación y la configuración de máquinas virtuales, así como despreocuparse de la tarea de administrar y mantener servidores actualizados para sus proyectos, esto solo ocurre gracias a que la responsabilidad recaerá en otro, en este caso empresas dedicadas al serverless computing.

En otras palabras, gracias a este modelo los equipos de desarrollo podrán dedicar todo su esfuerzo únicamente en lo relativo a la funcionalidad de sus aplicaciones dejando en manos de terceros, bajo la modalidad FaaS (Function as a Service, en español Función como Servicio) tareas de segundo y tercer orden. De esta manera, un sitio web o aplicación con arquitectura serverless podrá usar un proveedor específico para validar accesos de sus usuarios, otro para reproducir contenido de acuerdo a la interacción y otro para capturar datos de sus nuevos visitantes. Dejando a determinación de los proveedores la distribución eficaz de los recursos de las máquinas virtuales para satisfacer la demanda de la aplicación.

Con ello la arquitectura serverless ha propuesto un nuevo paradigma tanto para desarrolladores como para los negocios gracias al desacople de las responsabilidades intrínsecas de las aplicaciones y los desarrollos tecnológicos. Por supuesto esto ha favorecido la reducción de costos y el desarrollo de sistemas monolíticos o de estructuras tradicionales de [microservicios](https://www.dreamcodesoft.com/es/blog/everything-you-need-to-know-about-microservices) que simplifican aún más los procesos de trabajo de los negocios.

## Consecuencias de una implementación serverless

Antes de que hablemos sobre ventajas y desventajas describiremos, grosso modo, como opera un despliegue bajo esta infraestructura:

En un desarrollo serverless ciertas funciones son procesadas por otras, las cuales se denominan funciones contenedoras (wrappers), estas a su vez pueden instanciar una o varias subrutinas con el propósito de absorber sus datos de entrada y procesarlos para entregar los datos resultantes esperados por el sistema.

En el proceso de incluir nuevas funciones para sus aplicaciones serverless, es imperativo para los programadores crear y cargar los wrappers necesarios bajo el lenguaje apropiado, nómbrese Java, Go, PowerShell, Node.js, C# F#, Python o Ruby entre otros, pues estos son completamente indispensables para el procesamiento de dichas funciones. Así se originan los _entornos_ y estos son invocados para poder ejecutar los métodos demandados.

Estos entornos y sus funciones son almacenados dentro de la infraestructura serverless junto con una API gateway que pueda procesar las peticiones e instar el contenedor o contenedores efímeros adecuados para entregar el servicio. Como etapa final, luego de satisfacer el requerimiento se procede a la destrucción programada de los contenedores (efímeros).

En términos prácticos, cuando una aplicación no tiene recursos asignados es porque no está siendo demandada por ningún usuario y gracias a ese estado de _inexistencia_ no genera costos operativos.

Ahora pasemos a las ventajas más destacables de la arquitectura serverless:

**Para los negocios:**

**Las peticiones determinan los costos (pago por consumo):**
Los costos operativos de las aplicaciones son directamente proporcionales al uso o el acceso de sus usuarios. Es decir, solo serán facturados los recursos que se consuman en cada petición atendida por el proveedor.

**Cero desperdicio de recursos (computación por demanda)**
En el pasado, o mejor dicho con las ofertas tradicionales de hosting la única manera de estar preparados para los eventos de alto tráfico consistía en adoptar una estrategia de _sobre aprovisionamiento_. Ahora gracias a la elasticidad de la arquitectura serverless hemos logrado acabar con este despilfarro de recursos.

**Para los desarrolladores:**

**Menos responsabilidades (subyacentes):**
Dejando de lado las tareas periféricas al desarrollo de aplicaciones se logra abrir un _fast track_ para llegar al más alto nivel de optimización del servicio.

**Escala automática (elasticidad)**
Ya no es necesario que los programadores dediquen tiempo a configurar estructuras auto escalables proporcionales a la demanda. Esto ahora es responsabilidad directa del proveedor el cual los denomina sistemas elásticos debido a que su escalamiento es dual (hacia arriba o hacia abajo)

**Para los usuarios:**

**Alta disponibilidad (intrínseca)**
La infraestructura serverless ofrece alta disponibilidad por defecto, los recursos necesarios siempre estarán disponibles a bien de la demanda de los visitantes.

**Almacenamiento individual (para el cliente)**
Es altamente probable que las aplicaciones bajo arquitectura serverless permitan a sus usuarios integrar sus propios backend de almacenamiento como lo son Google Drive, Microsoft OneDrive, Dropbox, entre otros.

## ¿La arquitectura serverless tiene desventajas?

Las aplicaciones bajo esta infraestructura poseen un código fuente bastante prolijo y depurado lo que les permite ser altamente eficientes en función y entrega. Aun así, deben adaptarse a la potencia y los estándares de trabajo que tengan los diversos provedores de cloud computing ya que estos implementan el esquema _serverless_ a su manera.

Ya podemos hablar de las desventajas de esta arquitectura:

**Para los negocios:**

**Inexistencia del control total (dependencia de terceros):**
El alcance y la disponibilidad para este tipo de aplicaciones siempre estará en manos de los proveedores.

**Resiliencia ante brechas de seguridad (Gestión de incidencias)**
El riesgo de un ciberataque (indirecto) que deje fuera de servicio una aplicación serverless es mayor debido a que los agresores tendrán como objetivo perjudicar las redes del proveedor. Nuevamente se depende de este para superar la eventualidad y reactivar la operación lo más pronto posible.

**Para los desarrolladores:**

**Guía de mejores prácticas en desarrollo (independientes para cada proveedor):**
La tecnología serverless se encuentra en un estado de inmadurez el cual ha fragmentado su interpretación. Esto deriva en que cada proveedor desarrolla un concepto propio del servicio dificultando en muchos factores una implementación global.

**Pruebas locales limitadas (complejidad variable)**
La dificultad para realizar testeos y verificaciones aumenta al depender de la configuración de terceros.

**Para los usuarios:**

**Riesgo de alta latencia (desde el diseño de la aplicación)**
Si una aplicación no goza de un buen diseño estructural causará retrasos en la entrega del servicio a sus clientes.

**Funcionamiento heterogéneo (uniformidad del servicio)**
Es muy común que aplicaciones basadas en arquitectura serverless cuenten con más de un proveedor para su despliegue y esta segmentación puede hacer fluctuar el desempeño general.

En resumen, la arquitectura serverless permite crear aplicaciones tanto flexibles como ligeras, acortar tiempos de lanzamiento de nuevos productos al mercado, reducir costos operativos de acuerdo a los picos de tráfico, así como ahorrar recursos al seccionar su funcionamiento. Por otra parte, sus desventajas radican en la inmadurez de la tecnología misma y en la existencia de procesos que todavía no pueden relegarse a los proveedores debido al tamaño de sus funciones.

## Alternativas del mercado para un despliegue serverless computing

La arquitectura serverless permite la abstracción de la infraestructura subyacente a los programadores, pero no la elimina del flujo de trabajo, por esto algunas empresas ofrecen paquetes FaaS (funciones como servicio) por medio de los cuales almacenan y ejecutan las aplicaciones de sus clientes.

Actualmente, estos son los proveedores de servicios serverless de mayor predominancia en el mercado:

**AWS Lambda (Amazon):** AWS Lambda ofrece servicios informáticos bajo infraestructura serverless para la ejecución de aplicaciones o servicios backend libres de la administración de servidores bajo el esquema de pago por uso.

**Azure Functions (Microsoft):** Azure permite un desarrollo más eficiente por medio de una plataforma informática sin servidor que permite operar localmente sin configuraciones estructurales de servidor.

**Cloud Functions (Google):** Cloud Functions permite tratar como bloques todos los servicios que tengamos almacenados en la nube de Google y también de terceros también con un esquema de pago por uso.

Como mencionamos anteriormente, por tratarse de una tecnología joven queda a criterio de cada proveedor el mejor concepto de arquitectura serverless, por ello antes de optar por este servicio es necesario analizar con introspección y detenimiento cuáles son las funciones del negocio susceptibles de adaptarse al modelo serverless y así poder compaginarlas con lo que ofrecen los proveedores de la industria.

## Migrando al modelo serverless

Antes de dar un primer paso hacia la arquitectura serverless lo principal consiste en entender las limitantes tanto del negocio como las de la tecnología misma. Por ejemplo, en el caso de tener una aplicación cuyas funciones sean de gran tamaño es mandatorio evaluar si las opciones del mercado actual tienen la capacidad de procesamiento necesaria o si por el contrario es mejor continuar con el modelo tradicional del servidor propio.

A menudo las empresas con aplicaciones muy robustas migran de forma gradual, previo análisis, ciertos componentes de sus sistemas para mantener la operación bajo control mientras adaptan sus servicios hasta llegar al máximo nivel de liberación.

Si estás buscando asesoría para dar un paso de precisión en tu migración a la nube, es momento de contactarnos porque podemos poner a tu disposición nuestra experiencia en el desarrollo de arquitecturas serverless integrando AWS Lamda y Microsoft Azure en conjunto con nuestras metodologías de trabajo ágiles las cuales garantizan excelentes resultados de forma reiterativa.

Visítanos [aquí](https://www.dreamcodesoft.com/es/services) y déjanos asesorarte en la optimización de tus procesos digitales para que juntos desarrollemos la solución tecnológica definitiva que potencie al máximo los servicios de tu negocio.
