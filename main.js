
class Tarea {
    constructor() {
        this.descripcion = "";
        this.fechaStr = "";
        this.dia = 0;
        this.mes = 0;
        this.año = 0;
        this.fechaObj = {};
        this.horaStr = "";
        this.hora = 0;
        this.minuto = 0;
        this.lugar = "";
        this.persona = "";
        this.material = "";
    }

    ingresarValores() {

        this.descripcion = prompt("Ingrese una descripción breve de su tarea");
        this.fechaStr = prompt("Ingrese la fecha de su tarea (en el formato: dd/mm/aaaa)");
        this.procesarfechaStr(this.fechaStr);
        this.horaStr = prompt("Ingrese la hora de su tarea (en el formato: hh:mm)");
        this.procesarhoraStr(this.horaStr);
        this.lugar = prompt("Ingrese el lugar de su tarea");
        this.persona = prompt("Ingrese el nombre o nombres de las personas relacionadas con su tarea");
        this.material = prompt("Ingrese el nombre o nombres de los materiales relacionados con su tarea");
    }

    procesarfechaStr(fechaStr) {
    
        this.dia = parseInt(fechaStr.slice(0, 2));
        this.mes = parseInt(fechaStr.slice(3, 5));
        this.año = parseInt(fechaStr.slice(6));
        const anoActual = new Date().getFullYear();
        // alert(`${dia}, ${mes}, ${año}, ${anoActual}`);
    
        while (fechaStr.charAt(2) != "/" || fechaStr.charAt(5) != "/") {
            alert("El formato de fecha ingresado no es válido");
            this.fechaStr = prompt("Ingrese la fecha de su tarea (en el formato: dd/mm/aaaa)");
            this.procesarfechaStr(this.fechaStr);
            return;
        }
    
        while (this.dia < 1 || this.dia > 31 || this.mes < 1 || this.mes > 12 || this.año < anoActual) {
            alert("Ha ingresado datos fuera de rango");
            this.fechaStr = prompt("Ingrese la fecha de su tarea (en el formato: dd/mm/aaaa)");
            this.procesarfechaStr(this.fechaStr);
            return;
        }
    }

    procesarhoraStr(horaStr) {

        this.hora = parseInt(horaStr.slice(0, 2));
        this.minuto = parseInt(horaStr.slice(3, 5));
    
        while (horaStr.charAt(2) != ":") {
            alert("El formato de hora ingresado no es válido");
            this.horaStr = prompt("Ingrese la hora de su tarea (en el formato: hh:mm)");
            this.procesarhoraStr(this.horaStr);
            return;
        }
    
        while (this.hora < 0 || this.hora > 23 || this.minuto < 0 || this.minuto > 59) {
            alert("Ha ingresado datos fuera de rango");
            this.horaStr = prompt("Ingrese la hora de su tarea (en el formato: hh:mm)");
            this.procesarhoraStr(this.horaStr);
            return;
        }
    }

    convertirMes() {
        let mesResultante = arrayMeses.find((mes, indice) => indice == (this.mes - 1));
        return mesResultante;
    }
}

function crearTarea() {
    const tarea = new Tarea();
    tarea.ingresarValores();
    tarea.fechaObj = new Date(tarea.año, tarea.mes-1, tarea.dia, tarea.hora, tarea.minuto);
    arrayTareas.push(tarea);
    arrayTareas.sort((tareaA, tareaB) => tareaA.fechaObj.getTime() - tareaB.fechaObj.getTime());
}

function buscarTareas() {
    let valorBusqueda = prompt("Ingrese una palabra o valor referido a la descripción, la fecha (dd/mm/aaaa), el mes (enero-diciembre), el año, la hora (0-23), el lugar, las personas o los materiales utilizados");
    valorBusqueda = valorBusqueda.toLowerCase();
    const arrayResultadoBusqueda = arrayTareas.filter((tarea) => {
        return tarea.descripcion.toLowerCase().includes(valorBusqueda) || tarea.fechaStr == valorBusqueda || tarea.convertirMes() == valorBusqueda || tarea.año == valorBusqueda || tarea.hora == valorBusqueda || tarea.lugar.toLowerCase().includes(valorBusqueda) || tarea.persona.toLowerCase().includes(valorBusqueda) || tarea.material.toLowerCase().includes(valorBusqueda)});
    
    mostrarResultados(arrayResultadoBusqueda);
}

function mostrarResultados(arrayResultadoBusqueda) {
    const arrayTareasStr = [];
    let contador = 1;

    if (arrayResultadoBusqueda.length == 0) {
        alert("No hay ninguna tarea que coincida con los criterios de búsqueda");
        buscarTareas();
        return;

    } else {
        for (const tarea of arrayResultadoBusqueda) {
            let tareaStr = ` Tarea ${contador}: ${tarea.descripcion}
          Lugar: ${tarea.lugar}
          Fecha: ${tarea.fechaStr}
          Hora: ${tarea.horaStr}
          Personas: ${tarea.persona}
          Materiales: ${tarea.material}`
            arrayTareasStr.push(tareaStr);
            contador++;
        }
        
        alert(
        `Las tareas encontradas son las siguientes:
            
        ${arrayTareasStr.join("\n\n        ")}`);
    }
}



let opcionGeneral = 0;
const arrayTareas = [];
const arrayMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

alert("Bienvenido al gestor de tareas");
crearTarea();

while(true) {
    opcionGeneral = prompt(`Ingrese 1 para añadir una nueva tarea
             2 para buscar una tarea existente o 
             3 para salir`);

    switch (opcionGeneral) {
        case "1":
            crearTarea();
            break;
        case "2":
            buscarTareas();
            break;
        case "3":
            break;
        default:
            alert("Valor incorrecto");
            break;
    }

    if (opcionGeneral == 3) {
        break;
    }
}




    

                 

