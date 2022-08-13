let salaryFinal = 0;
let salaryHour = document.getElementById('salary_hour');
let workedDays = document.getElementById('days');
let resultSalaryFinal = document.getElementById('result_salary_final');
const hourDaily = 8;

const calculateSalaryFinal = () => {
    salaryFinal = (salaryHour.value * hourDaily) * workedDays.value;
    resultSalaryFinal.innerHTML = salaryFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const calculateSalaryHour = () => {
    salaryFinal = (salaryHour.value / workedDays.value) / hourDaily;
    resultSalaryFinal.innerHTML = salaryFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}