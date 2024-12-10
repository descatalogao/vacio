#Tienda de motos Motocenter
##Índice
- Breve resumen
- Estética
- Funcionalidad
- Bloques de HTML

###Breve resumen:
Se trata de una tienda de motos donde el reto principal era crear los filtros y resolver ciertos retos interesantes mediante el uso de DOM y CSS.
Las tareas más complejas incluyen el filtrado, el carrusel incorporado en los filtros, y la implementación de un carrito de compra. Eso sí, también se ha buscado siempre cuidar la estética haciendo estas labores más difíciles.
###Estética
La estética trata de recrear colores llamativos y elegantes, reflejando la paleta de algunas motos populares (veáse KTM, o Rieju) con estética deportiva y jóven. El lenguaje es coloquial, pero motivador y cercano al mismo tiempo.
En las cajas de contenido, se busca variar entre bordes redondos y afilados, y contrastar siempre con alguna delicada sombra manteniendo como principal color los blancos y los grises bajos de tono. El acabado refleja una estética limpia y dinámica con rojos o naranjas intensos ahí donde hay que mirar o pulsar.
###Funcionalidad:
Uno de los objetivos es guiar al usuario a través del cartel de promoción (llamado *hero* en jerga de informático) a la debajo situada tienda. Las funciones principales incluyen búsqueda a través del **buscador incorporado**, filtrado mediante **filtros incorporados** y activados mediante un botón que abre el panel, entre los que se encuentran **tipo** de moto, **marca** de motos, **modelo** de moto, **cilindrada**, motos acorde al **carné** del usuario , si tiene **garantía** premium o no, e incluso el **estado** de la moto.
Después de un filtrado se generarán las cartas de elementos (o *cards*), en este caso motos, comprobando en un archivo que simula todas las motos disponibles en la tienda, y a través de sus botónes con su correspondiente precio, se podrán añadir estos al carrito de la compra.
En el carrito, estos se podrán eliminar mediante el botón **Quitar**.
Por último nos queda la última función, la **ordenación** de los elementos de acuerdo a criterio. Los criterios son: de precio más elevado a bajo, viceversa, y por relevancia.

###Bloques de HTML:
Son bloques de código muy separados:
El header, el *hero*, el sections, el shopContainer y el footer.
