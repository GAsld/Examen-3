function calcularTotal() {

    var especialidad = document.getElementById('especialidad').value;
    var precioBase = 0;

    if (especialidad == "clasica") {
        precioBase = 80;}

    else if (especialidad == "bbq") {
        precioBase = 100;}

    else if (especialidad == "tocino") {
        precioBase = 120;}

    else if (especialidad == "doble") {
        precioBase = 150;}

    else if (especialidad == "hawaiana") {
        precioBase = 180;}

        var pan = document.getElementsByClassName('radio-list').value;

    if (pan == "clasico"){
        precioBase = 0;}

    else if (pan == "ajonjoli"){
        precioBase = 20;}
    
    else if (pan == "integal"){
        precioBase = 20;}

    else if (pan == "brioche"){
        precioBase = 50;}

        var ingredientes = formularm.ingredientes.value;
        

    if (formulario.queso.checked) 
    {
        total += 5;
    }

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

    if (formulario.huebo.checked)
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
        }


