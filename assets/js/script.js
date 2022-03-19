// DESAFIO 

var nombre = prompt("Ingresa el nombre y apellido: ", "Rena")
var carrera = prompt("Ingresa la carrera: ", "Diseño UI/UX")

var ramo1 = prompt("Ingresa un ramo: ", "HTML")
var ramo1nota1 = prompt("Ingresa nota 1 de ["+ramo1+"]:", 5.4)
var ramo1nota2 = prompt("Ingresa nota 2 de ["+ramo1+"]:", 4,7)
var ramo1nota3 = prompt("Ingresa nota 3 de ["+ramo1+"]:", 6.5)

var ramo2 = prompt("Ingresa un ramo: ", "CSS")
var ramo2nota1 = prompt("Ingresa nota 1 de ["+ramo2+"]:", 4.7)
var ramo2nota2 = prompt("Ingresa nota 2 de ["+ramo2+"]:", 5.6)
var ramo2nota3 = prompt("Ingresa nota 3 de ["+ramo2+"]:", 6.5)

var ramo3 = prompt("Ingresa un ramo: ", "JavaScript")
var ramo3nota1 = prompt("Ingresa nota 1 de ["+ramo3+"]:", 3.2)
var ramo3nota2 = prompt("Ingresa nota 2 de ["+ramo3+"]:", 4.5)

var aprobacion= prompt("ingrese nota de aprobación", 4);

//Calcular promedio 1 y 2

var promedio1= (parseFloat(ramo1nota1) + parseFloat(ramo1nota2) + parseFloat(ramo1nota3))/3

var promedio2= (parseFloat(ramo2nota1) + parseFloat(ramo2nota2) + parseFloat(ramo2nota3))/3

//Calcular nota faltante ramo 3

var promedio3 = ((parseFloat(aprobacion)-((parseFloat(ramo3nota1)+parseFloat(ramo3nota2))/3))*100)/(100/3);



document.write("<h1 class='mx-4 mt-5 pb-2'>Notas finales</h1>");

document.write("<div class=row>")
document.write("<h6 class='mx-4 fw-bold col-sm-2'>Nombre: </h6>");
document.write("<h6 class='col-sm-9'> "+nombre+" </h6>")
document.write("<h6 class='mx-4 fw-bold col-sm-2'>Carrera: </h6>");
document.write("<h6 class='col-sm-9'> "+carrera+" </h6>")
document.write("</div>")

document.write("<div class='container m-4 p-0'>"); // Contenedor
document.write("<table class='table'>") // Inicio de la tabla

document.write("<thead class='bg-dark text-white'>"); //T HEAD - encabezado de la tabla

document.write("<tr>"); // row
document.write("<th scope='col'>Ramo</th>"); // item
document.write("<th scope='col'>Nota 1</th>"); // item
document.write("<th scope='col'>Nota 2</th>"); // item
document.write("<th scope='col'>Nota 3</th>"); // item
document.write("<th scope='col'>Promedio</th>"); // item
document.write("</tr"); // fin row

document.write("</thead>"); //T HEAD - Fin del encabezado


document.write("<tbody>"); // T BODY - cuerpo de la tabla

document.write("<tr>");
document.write("<th scope='row'>"+ramo1+"</th>");
document.write("<td>"+ramo1nota1+"</td>");
document.write("<td>"+ramo1nota2+"</td>");
document.write("<td>"+ramo1nota3+"</td>");
document.write("<td>"+promedio1.toFixed(2)+"</td>");

document.write("<tr>");
document.write("<th scope='row'>"+ramo2+"</th>");
document.write("<td>"+ramo2nota1+"</td>");
document.write("<td>"+ramo2nota2+"</td>");
document.write("<td>"+ramo2nota3+"</td>");
document.write("<td>"+promedio2.toFixed(2)+"</td>");

document.write("<tr>");
document.write("<th scope='row'>"+ramo3+"</th>");
document.write("<td>"+ramo3nota1+"</td>");
document.write("<td>"+ramo3nota2+"</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");

document.write("</tbody>"); // T BODY - cuerpo de la tabla

document.write("</table"); // Fin de la tabla

document.write("<p>Para aprobar el ramo "+ramo3+", necesitas obtener una nota igual o mayor a "+promedio3.toFixed(2)+"</p>");

document.write("</div>"); //Fin del contenedor







