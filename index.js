let salaryFinal = 0;
let salaryInitial = document.getElementById('salary');
let workedDays = document.getElementById('days');
let resultSalaryFinal = document.getElementById('result_salary_final');
const hourDaily = 8;

const calculateSalaryFinal = () => {
    salaryFinal = (salaryInitial.value * hourDaily) * workedDays.value;
    resultSalaryFinal.innerHTML = salaryFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const calculateSalary = () => {
    salaryFinal = (salaryInitial.value / workedDays.value) / hourDaily;
    resultSalaryFinal.innerHTML = salaryFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}