# Gestor de Tareas
Este es un proyecto para la Segunda Pre-entrega del curso de Javascript de Coder.  
El proyecto es un simulador de un Gestor de Tareas que tendrá las siguientes características:

* El usuario podrá ingresar múltiples tareas con la ayuda de la clase Tarea, sus propiedades y métodos.
* Cada tarea constituirá un objeto, cuyas propiedades de descripción, lugar, fecha, hora, personas y 
  materiales, entre otras, serán ingresadas a través de la función prompt().
* Las tareas serán almacenadas como objetos en un array, y luego ordenadas cronológicamente con la ayuda
  de la función de segundo orden sort() y objetos Date creados como propiedad en cada tarea.
* El usuario tendrá la opción también de realizar una búsqueda con criterios específicos entre
  las tareas almacenadas, para luego mostrar aquellas que coinciden con estos criterios en
  un mensaje de la función alert().
* La comparación entre estos criterios específicos y la información de las tareas, guardada en
  las propiedades de los objetos, se realizará con la ayuda de la función de segundo orden filter().
* El despliegue de los resultados de la búsqueda se realizará con la ayuda del método join() y el
  formato de template strings.
* El simulador podrá seguir funcionando "infinitamente" gracias a un bucle while, hasta que el usuario
  seleccione la opción 3, en cuyo caso finalizará el programa.

# Para ejecutar el proyecto

* Copiar el código en Visual Studio Code y usar la extensión Live Server para abrirlo en un navegador.
* Dirigirse a la sección de Deployments de la página principal del repositorio de Github y dar click
  en el enlace que allí aparece para abrirlo en el navegador.