// VARIABLES
const inputNombre = document.querySelector('#inputNombre');
const inputMonto = document.querySelector('#inputMonto');
const btnEnviar = document.querySelector('#btnEnviar');
const listaPersonas = document.querySelector('#listaPersonas');
const montoTotal = document.querySelector('#montoTotal');
const aportePorPersona = document.querySelector('#aportePorPersona');
let nombres = [];
let montos = [];

// Funcion para pushear el nombre y el monto al hacer click en el boton enviar
const pushNombreMonto = () => {
  btnEnviar.addEventListener('click', () => {
    if(!(nombres.map(nombre => nombre.toLowerCase()).includes(inputNombre.value.toLowerCase()))) {
      nombres.push(inputNombre.value);
      montos.push(inputMonto.value);
      mostrarNombresMontos();
    }
    sumarMontos();
    calcularAporte();
  });
}
pushNombreMonto();

// Funcion para mostrar los nombres y montos en el html
const mostrarNombresMontos = () => {
  listaPersonas.innerHtml = '';
  nombres.forEach((nombre, index) => {
    listaPersonas.innerHTML += `<li class="border p-1">${nombre}: $${montos[index]}</li>`;
  }
  );
}

// Funcion para sumar los montos y mostrarlos en el HTML
const sumarMontos = () => {
  let suma = 0;
  montos.forEach(monto => {
    suma += parseInt(monto);
  }
  );
  montoTotal.innerText = `Total: $${suma}`;
}

// Fucion para calcular cuanto tiene que aportar cada persona y mostrarlo en el HTML
const calcularAporte = () => {
  let aporte = 0;
  montos.forEach((monto) => {
    aporte = parseInt(monto) / nombres.length;
    aportePorPersona.innerText = `A cada uno le toca aportar: $${aporte}`;
  }
  );
}
