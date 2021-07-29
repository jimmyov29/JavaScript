
//funcionn para calcular todas las sumas y multiplicaciones
function calcular()
{
    // variable para sumar
    var suma = 0.00;

    //recorrer los inputs para los calculos
    for(var i = 1; i <=5; i++)
    {
        //obtener los valores de las cajas de texto involucrados
        var salario = Number(document.getElementById("salario"+i).value);
        var horasExtra = Number(document.getElementById("he"+i).value);
        var horasExtraValor = Number(document.getElementById("hevalor"+i).value);
        
        ///realizar los calculos
        var horasExtraTotal = horasExtra*horasExtraValor;
        //ponerlo en la caja correspondiente
        document.getElementById("salarioextra"+i).value = horasExtraTotal.toFixed(2);

        //sumar las horas extras con el salario
        var totalRenglon = horasExtraTotal+ salario;
        //ponerlo en la caja que corresponde
        document.getElementById("totalrenglon"+i).value = totalRenglon.toFixed(2);
        
        suma = suma +totalRenglon;
    }
    document.getElementById("total").value = suma.toFixed(2);

}

//funcon para validar el formulario antes de enviarlo
function procesar()
{
    try{
        //evitar que la planilla se vaya en cero
        var totalplanilla = Number(document.getElementById("total").value);
        if(totalplanilla <=0)
        {
            alert("no se permite procesar planillas menor o igual a cero");
            return false;
        }

        //evitar enviar renglones con total renglon sin nombre
        for (var i = 1 ; i<= 5; i++)
        {
            var totalRenglon = Number(document.getElementById("totalrenglon"+i).value);
            if (totalRenglon > 0)
        {
            var empleado = document.getElementById("nombre"+i).value;// recuperar el nombre del empleado
            //ver si el nombre de empleado esta vacio (cero caracteres)
            if(empleado.toString().trim().length == 0)
            {
                alert("el renglon"+i+"lleva nombre de empleado en blanco. no se puede procesar.");
                return false;
            }
        }


    }
        //si llegamos hasta aqui es porque tosas las validaciones fueron exitosas
        alert("Planilla procesada correctamente, se envio al servidor");
        return true;

    }
    catch(exception )
    {
        return false;// si algo falllo, no hace el submit

    }

        
}