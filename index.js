let salaryFinal = 0;
let salaryInitial = document.getElementById("salary");
let workedDays = document.getElementById("days");
let resultSalaryFinal = document.getElementById("result_salary_final");
const hourDaily = 8;

const calculateSalaryFinal = () => {
    if (!isEmpty()) {
        salaryFinal = salaryInitial.value * hourDaily * workedDays.value;
        writeSalaryFinal(salaryFinal);
    }
};

const calculateSalaryHour = () => {
    if (!isEmpty()) {
        salaryFinal = salaryInitial.value / workedDays.value / hourDaily;
        writeSalaryFinal(salaryFinal);
    }
};

const writeSalaryFinal = (valueSalaryFinal) => {
    resultSalaryFinal.innerHTML = valueSalaryFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
  });
};

const isEmpty = () => {
    if (salaryInitial.value == "" || workedDays.value == "") {
        alert("Digite um valor númerico e não deixe campos vazios!");
        return true;
    }
    return false;
};