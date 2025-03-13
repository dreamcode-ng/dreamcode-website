---
metaTitle: Language Server Protocol y su función en el campo del desarrollo de software
meta_description: Language Server Protocol es un estándar creado por Microsoft con el objetivo de definir una mejor comunicación entre un editor de código fuente o IDE y los servidores que contienen los requerimientos y funciones de un lenguaje de programación específico.
title: Language Server Protocol y su función en el campo del desarrollo de software
read: 5-10min
date: August 22, 2022
url: language-server-protocol-its-role-on-software-development-field
category: innovation
imglink: language-server-protocol-its-role-on-software-development-field.jpg
---

**Language Server Protocol o LSP es un estándar de comunicación creado originalmente por Microsoft, con el objetivo de definir un mejor protocolo entre un editor de código fuente o el IDE implementado por el desarrollador y los servidores** que contienen todas las especificaciones y funciones de un lenguaje de programación en específico.

De ese modo, con el estándar LSP se logra crear un único servidor capaz de admitir editores como Visual Studio Code o Eclipse IDE, y viceversa. Además, **LSP cuenta con una enorme disponibilidad de bibliotecas para otros lenguajes como Java, Haskell o PHP**, en caso de necesitar ser implementado desde desarrollos privados.

Conoce un poco más de este estándar en este artículo, estamos seguros de que puede favorecerte en la creación de nuevas herramientas.

## ¿Cómo opera LSP?

Para este caso citaremos la descripción oficial de una sesión hecha por [Microsoft](https://code.visualstudio.com/blogs/2016/06/27/common-language-protocol):

**El usuario abre un documento:** El editor notifica al servidor esta acción (**didOpen**) y que además tiene el documento en su memoria de trabajo.

**El usuario edita el documento:** El editor informa al servidor sobre los cambios (**didChange**) El servidor analiza la información y notifica los posibles errores y advertencias encontrados (**diagnostics**)

**El usuario solicita un comando específico:** Aquí el usuario puede pedir una definición (**definition**), la finalización del texto desde la posición actual del cursor (**completion**) o ayuda con una firma (**signatureHelp**), etc. Luego el editor envía la solicitud y el servidor responde adecuadamente para que el editor satisfaga la petición del usuario.

**El usuario cierra el documento:** El editor notifica al lenguaje que el usuario ha cerrado el documento (**didClose**) y que este ya no está en la memoria.

## ¿Cuáles son sus características?

**LSP está diseñado para soportar de manera ágil los lenguajes con campos dedicados al acceso y la lectura de un símbolo**, aun así, este protocolo no está diseñado para operar en código binario.

Una de sus más valiosas características es que en su naturaleza, Language Server Protocol **ha sido creado con los editores de código fuente y el desarrollo local como parámetros estructurales**, sin embargo nada lo limita en su implementación con otras herramientas como MySQL o Workbench lo que definitivamente lo hace más versátil.

## Su rol en la industria tecnológica

Si como programador te interesa el desarrollo de lenguajes de programación, **LSP es una herramienta fundamental la cual te permite, como diseñador del lenguaje y programador de herramientas, aceptar nuevos desarrollos** desde otros editores. Dicho de otra forma, LSP es la herramienta crucial para garantizar la globalización del nuevo lenguaje que has desarrollado.

En DreamCode contamos con un equipo de profesionales experto en el desarrollo tecnológico dedicado apoyarte en tus objetivos comerciales por medio de soluciones de alto valor empresarial. Te invitamos a conocer nuestros procesos para que de la mano de nuestro equipo incrementes los rendimientos de tu empresa [Conoce más aquí](https://www.dreamcodesoft.com/es/services)
