//Insertar datos
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
        .then(response => response.json())
        .then(data => {
            const tabla = document.querySelector("table tbody");
            data.forEach(cliente => {
                const row = tabla.insertRow();
                row.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.apellidos}</td>
            <td><span class="badge bg-primary">${cliente.sexo}</span></td>
            <td>${cliente.edad}</td>
            <td>${cliente.altura}</td>
            <td>${cliente.peso}</td>
            <td><span class="badge bg-secondary">${cliente.actividad}</span></td>
            <td>${calcularGET(cliente.sexo, cliente.actividad, cliente.peso, cliente.altura, cliente.edad)}</td>
            <td>${calcularGER(cliente.sexo, cliente.peso, cliente.altura, cliente.edad)}</td>
          `;
            });
        })
        .catch(error => console.error(error));
});


//Resube los datos
const btnCargar = document.querySelector("#btnAñadir");

btnCargar.addEventListener("click", function () {
    fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
        .then(response => response.json())
        .then(data => {

            const tabla = document.querySelector("table tbody");
            data.forEach(cliente => {
                const row = tabla.insertRow();
                row.innerHTML = `
          <td>${cliente.nombre}</td>
          <td>${cliente.apellidos}</td>
          <td><span class="badge bg-primary">${cliente.sexo}</span></td>
          <td>${cliente.edad}</td>
          <td>${cliente.altura}</td>
          <td>${cliente.peso}</td>
          <td><span class="badge bg-secondary">${cliente.actividad}</span></td>
          <td>${calcularGET(cliente.sexo, cliente.actividad, cliente.peso, cliente.altura, cliente.edad)}</td>
          <td>${calcularGER(cliente.sexo, cliente.peso, cliente.altura, cliente.edad)}</td>
        `;
            });
        })
        .catch(error => console.log(error));
});

//Cierra "cancelar"
document.querySelector("#cancelar").addEventListener("click", function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.classList.remove('was-validated')

        })

    event.preventDefault()
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"));
    modal.hide();

    setTimeout(() => {
        document.querySelector("#nombre").value = "";
        document.querySelector("#apellidos").value = "";
        document.querySelector("#edad").value = "";
        document.querySelector("#altura").value = "";
        document.querySelector("#peso").value = "";

    }, 1000);
})

//Cierra boton "equis"
document.querySelector("#equisCerrar").addEventListener("click", function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.classList.remove('was-validated')

        })

    event.preventDefault()
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"));
    modal.hide();

    setTimeout(() => {
        document.querySelector("#nombre").value = "";
        document.querySelector("#apellidos").value = "";
        document.querySelector("#edad").value = "";
        document.querySelector("#altura").value = "";
        document.querySelector("#peso").value = "";

    }, 1000);
})


//Calcular GER
function calcularGER(sexo, peso, altura, edad) {
    if (sexo == "hombre") {
        var resultado = 66.473 + (13.751 * peso) + (5.0033 * altura) - (6.7550 * edad);
        return resultado.toFixed("2");
    } else {
        resultado = 655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad);
        return resultado.toFixed("2");
    }
};

//Calcular GET

function calcularGET(sexo, actividad, peso, altura, edad) {
    if (sexo == "hombre" && actividad == "sedentaria") {
        var resultado = 66.473 + (13.751 * peso) + (5.0033 * altura) - (6.7550 * edad) + 200;
        return resultado.toFixed("2");
    } else if (sexo == "hombre" && actividad == "moderada") {
        var resultado = 66.473 + (13.751 * peso) + (5.0033 * altura) - (6.7550 * edad) + 600;
        return resultado.toFixed("2");
    } else if (sexo == "hombre" && actividad == "intensa") {
        var resultado = 66.473 + (13.751 * peso) + (5.0033 * altura) - (6.7550 * edad) + 1000;
        return resultado.toFixed("2");
    } else if (sexo == "mujer" && actividad == "sedentaria") {
        var resultado = 655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad) + 200;
        return resultado.toFixed("2");
    } else if (sexo == "mujer" && actividad == "moderada") {
        var resultado = 655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad) + 600;
        return resultado.toFixed("2");
    } else if (sexo == "mujer" && actividad == "intensa") {
        var resultado = 655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad) + 1000;
        return resultado.toFixed("2");
    }
};


//Validaciones
document.querySelector("#clienteGuardado").addEventListener("click", function () {

    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);
    var altura = parseInt(document.querySelector("#altura").value);
    var peso = parseInt(document.querySelector("#peso").value);
    var sexo = document.querySelector("#sexo").value;
    var actividad = document.querySelector("#actividad").value;

    if (edad < 18 || edad > 99) {
        edad = "";
    }
    if (peso < 40 || peso > 200) {
        peso = "";
    }
    if (altura < 140 || altura > 220) {
        altura = "";
    }



    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')

        })

    if (nombre && apellido && edad && peso && altura != "") {
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.classList.remove('was-validated')

            })

        const tabla = document.querySelector("table tbody");
        const row = tabla.insertRow();
        row.innerHTML = `
          <td>${nombre}</td> 
          <td>${apellido}</td>
          <td><span class="badge bg-primary">${sexo}</span></td>
          <td>${edad}</td>
          <td>${altura}</td>
          <td>${peso}</td>
          <td><span class="badge bg-secondary">${actividad}</span></td>
          <td>${calcularGET(sexo, actividad, peso, altura, edad)}</td>
          <td>${calcularGER(sexo, peso, altura, edad)}</td>
        `;
        event.preventDefault()
        const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"));
        modal.hide();

        setTimeout(() => {
            document.querySelector("#nombre").value = "";
            document.querySelector("#apellidos").value = "";
            document.querySelector("#edad").value = "";
            document.querySelector("#altura").value = "";
            document.querySelector("#peso").value = "";

        }, 1000);

    }
});


