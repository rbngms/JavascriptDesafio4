




////////CLIENTES
let Clientes = [


        {nombre:"Banco de credito" ,categoria:"Basico",Pais:"Peru",codigo:101},
        {nombre:"Banco Continental",categoria:"Top",Pais:"Chile",codigo:201},
        {nombre:"Scotia Bank" ,categoria:"Vip",Pais:"Peru",codigo:301},
        {nombre: "Banco Falabella",categoria:"Premium",Pais:"Chile",codigo:401},
    
]
    
function buscarNombre (Clientes){
    let usuarioCodigo = parseInt( prompt ("Bienvenido, por favor indique su codigo de cliente"));
    return Clientes.codigo == usuarioCodigo;
}

let resultado_find = Clientes.find(buscarNombre);
console.log ("Bienivenido CLiente", resultado_find ," el dia de hoy es:");
console.log ( new Date ());


///// PRODUCTOS 
class Producto {

    constructor ( nombre , precio) {
        this.nombre = nombre;
        this.precio=precio;
    }

    
    
    igv () {

        this.precio = this.precio * 0.18 + this.precio;
        console.log("el Precio con IGV de", this.nombre,"es: ", this.precio);
    

    
    }
    
    
}


let facebookads = new Producto ("facebookads" , 500);
let googleads = new Producto ("googleads" , 400);
let Disenoweb = new Producto ("Disenoweb" , 700);
let piezasDigitales = new Producto ("piezasDigitales" , 800);



let nuevoServicio = prompt ("¿Desea contratar servicios adicionales? Indicar SI o NO");

function validar_nuevoServicio () {

    if (nuevoServicio == "SI"){

        console.log("¿Con que servicios desea contar? Contamos con los siguientes servicios");
        console.log("Marketing Digital - Facebook Ads");
        facebookads.igv();
        console.log("Marketing Digital - Google Ads");
        googleads.igv();
        console.log("Diseño Web");
        Disenoweb.igv();
        console.log("Diseño piezas digitales");
        piezasDigitales.igv();
    }

    else {

        console.log("No dude en contactarnos en caso de desear nuevos servicios");
    }

}

validar_nuevoServicio(nuevoServicio);




///ARRAYS

let listaequipoPeru = [ [ "Peru", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]
let listaequipoChile = [ [ "Chile", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]

let listaPais = prompt ("¿En que Pais se encuentra? PERU o CHILE");

function validar_listaPais () {
    if (listaPais == "PERU"){
        for ( let i=0 ; i <listaequipoPeru.length ; i++) {
            console.log ("Nuestro equipo de trabajo en PERU es:", listaequipoPeru [i])
        }
    }
    else if (listaPais == "CHILE"){
        for ( let i=0 ; i <listaequipoChile.length ; i++) {
            console.log ("Nuestro equipo de trabajo en CHILE es:", listaequipoChile [i])
        }
    }
    else {
        console.log("No tenemos equipos de trabajo en los paises indicados");
    }
}

validar_listaPais(listaPais);

/////NUEVOS REQUERIMIENTOS



class requerimientos {

    constructor ( requerimiento , prioridad) {
        this.requerimiento = requerimiento;
        this.prioridad=prioridad;
    }
    
}

let nuevoRequerimiento = prompt ("¿Desea dejarnos alguna solicitud o requerimiento?");

let nuevosRequerimientos = [ ];

function validar_requerimiento () {
    if (nuevoRequerimiento == "SI"){

        for ( let i = 0 ; i < 1 ; i++){

       
            let requerimiento = prompt ("Ingrese su Requerimiento");
            let prioridad = prompt ("Indique su prioridad del 1 al 10");
        
        
            nuevosRequerimientos.push ( new requerimientos (requerimiento,prioridad));
        }    
            
    }   
        
    

    else {

        console.log("No dude en contactarnos en caso de tener un requerimiento");
    }


}

validar_requerimiento(nuevoRequerimiento);

console.log(nuevosRequerimientos);


////LOGIN


function login () {

    let nombre = document.getElementById("nombre_usuario");
    let pass = document.getElementById("pass_usuario");
    

    if ( nombre.value == "Banco de credito" && pass.value == 101 ) {
       
        let caja = document.getElementById("caja");
        ///caja.innerHTML = "<p> El nombre del usuario es : " + nombre.value + "<p> Y el apellido es:" + pass.value;
        ///alert("Bienvenido al sistema");
        caja.innerHTML =  ` <p> El nombre del usuario es: ${nombre.value} </p>
                          <p> Y el codigo de cliente es :  ${pass.value} </p>`;
    }       

    else if ( nombre.value == "Banco Continental" && pass.value == 201 ) {
       
        let caja = document.getElementById("caja");
        caja.innerHTML =  ` <p> El nombre del usuario es: ${nombre.value} </p>
                          <p> Y el codigo de cliente es :  ${pass.value} </p>`;
    }         
    
    else if ( nombre.value == "Scotia Bank" && pass.value == 301 ) {
        let caja = document.getElementById("caja");
        caja.innerHTML =  ` <p> El nombre del usuario es: ${nombre.value} </p>
                          <p> Y el codigo de cliente es :  ${pass.value} </p>`;
    }         
    
    else if ( nombre.value == "Banco Falabella" && pass.value == 401 ) {
       
        let caja = document.getElementById("caja");
       
        caja.innerHTML =  ` <p> El nombre del usuario es: ${nombre.value} </p>
                          <p> Y el codigo de cliente es :  ${pass.value} </p>`;
    }             


    else {
        let caja = document.getElementById ("caja");
        let mensaje = document.createElement("p");
        mensaje.innerText="Por favor comuníquese con su ejecutivo para que le indique sus credenciales";
        mensaje.style.color = "Black";
        mensaje.style.fontSize = "20px";
        
        
        caja.appendChild(mensaje);
    }

    console.log (nombre.value) ;
    console.log (pass.value) ;

}

let boton = document.getElementById("boton_Registro")

//////// REGISTRO

function registro () {

        let caja = document.getElementById("caja");
        ///caja.innerHTML = "<p> El nombre del usuario es : " + nombre.value + "<p> Y el apellido es:" + pass.value;
        ///alert("Bienvenido al sistema");
        caja.innerHTML =  ` <h1>Registro</h1>
        Nombre
        <input type="text" id="nombre_usuario">
        <br>
        Pais
        <input type="text" id="pass_usuario">
        <br>Nivel de servicio deseado
        <input type="text" id="nombre_usuario">
        <br>
        <button>Enviar</button>`;
     
}

