let salarioFinal = 0;
let salarioHora = document.getElementById('salario_hora');
let diasTrabalhados = document.getElementById('dias');
let resultadoSalarioFinal = document.getElementById('resultado_salario_final');
const horaDiaria = 8;

const calcularSalarioFinal = () => {
    salarioFinal = (salarioHora.value * horaDiaria) * diasTrabalhados.value;
    resultadoSalarioFinal.innerHTML = 'R$ ' + salarioFinal;
}