# EntregaFinal-REACT-47130

El proyecto es una tienda ficticia de diversos artículos, consta con cards, un detalle de los items, un carrito funcional con checkout y filtro por categorias.
Cabe destacar que el sitio no esta optimizado (aun) para vista en mobile.

Incluí varias librerias:

- ErrorBoundary, lo cual permite que no se rompa el componente si falta alguna información sobre el item.
- Axios, lo cual simplifica las llamadas a la database
- Material UI, es muy útil para ahorrar tiempo en responsiveness/css, y además sus componentes son estéticamente apropiados.
-SweetAlert2, lo cual me posibilita hacer un modal completamente responsive, coun un timeOut determinado solo usado en el componente checkout para mostrar el orderID de firebase.
