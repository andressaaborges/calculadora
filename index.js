let salaryFinal = 0;
let salaryHour = document.getElementById('salary_hour');
let workedDays = document.getElementById('dias');
let resultSalaryFinal = document.getElementById('result_salary_final');
const hourDaily = 8;

const calculateSalaryFinal = () => {
    salaryFinal = (salaryHour.value * hourDaily) * workedDays.value;
    resultSalaryFinal.innerHTML = 'R$ ' + salaryFinal;
}

const calculateSalaryHour = () => {
    salaryFinal = (salaryHour.value / workedDays.value) / hourDaily;
    resultSalaryFinal.innerHTML = 'R$ ' + salaryFinal;
}