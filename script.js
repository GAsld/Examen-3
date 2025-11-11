const formulario = document.getElementById("pedidoForm");

function calcularTotal() {
    var total = 0;

    var especialidad = document.getElementById('especialidad').value;
    if (especialidad == "clasica") {
        total = 80;}
    else if (especialidad == "bbq") {
        total = 100;}
    else if (especialidad == "tocino") {
        total = 120;}
    else if (especialidad == "doble") {
        total = 150;}
    else if (especialidad == "hawaiana") {
        total = 180;}

    var pan = formulario.pan.value;
    if (pan == "clasico") {
        total += 0;
    }
    else if (pan == "ajonjoli"){
        total += 20;}
    else if (pan == "integal"){
        total += 20;}
    else if (pan == "brioche"){
        total += 50;}

    if (formulario.queso.checked) { total += 5; }
    if (formulario.cebolla.checked) 
    {
        total += 5;
    }

    if (formulario.pepino.checked)  
    {
        total += 5;
    }

    if (formulario.dobleQueso.checked) 
    {
        total += 5;
    }

    if (formulario.bbq.checked) 
    {
        total += 5;
    }

    if (formulario.mostaza.checked)  
    {
        total += 5;
    }

    if (formulario.arugula.checked)
    {
        total+= 5;
    }    

    if (formulario.lechuga.checked)  
    {
        total += 5;
    }
    if (formulario.jalapeño.checked) 
    {
        total += 5;
    }

    if (formulario.champiñones.checked) 
    {
        total += 5;
    }

    if (formulario.piña.checked)  
    {
        total += 5;
    }

    if (formulario.chipotle.checked)
    {
        total+= 5;
    }   

    if (formulario.ketchup.checked)
    {
        total+= 5;
    }    

        if (formulario.cebolla.checked)
    {
        total+= 5;
    }   

    if (formulario.jitomate.checked)  
    {
        total += 5;
    }

    if (formulario.huevo.checked)
    {
        total+= 5;
    }   

    if (formulario.tocino.checked)
    {
        total+= 5;
    }    

        if (formulario.guacamole.checked)
    {
        total+= 5;
    }   

    if (formulario.mayonesa.checked)  
    {
        total += 5;
    }

    if (formulario.pepperoni.checked)
    {
        total+= 5;
    }   

    var cantidad = formulario.cantidad.value;
    total *= cantidad;
    
    if (formulario.domicilio.checked)
    {
        total += 30;
    }

    document.getElementById('total').innerText = total;
}


