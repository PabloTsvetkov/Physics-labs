document.getElementById('employees').addEventListener('input', function() {
    document.getElementById('employees-value').textContent = this.value;
    calculateCost();
});

document.getElementById('income').addEventListener('input', function() {
    document.getElementById('income-value').textContent = `${this.value} P`;
    calculateCost();
});

document.getElementById('type').addEventListener('change', calculateCost);
document.getElementById('level').addEventListener('change', calculateCost);

function calculateCost() {
    const typeFactor = { 'text': 1, 'standard': 1.5, 'exclusive': 2 };
    const levelFactor = { 'basic': 1, 'advanced': 1.2, 'exclusive': 1.5 };

    const type = document.getElementById('type').value;
    const level = document.getElementById('level').value;
    const employees = parseInt(document.getElementById('employees').value);
    const income = parseInt(document.getElementById('income').value);

    let baseCost = 10000;
    let cost = baseCost * typeFactor[type] * levelFactor[level] * Math.sqrt(employees) * (income / 50000);
    document.getElementById('cost').textContent = `${cost.toFixed(0)} P`;
}

function resetValues() {
    document.getElementById('type').value = 'text';
    document.getElementById('level').value = 'basic';
    document.getElementById('employees').value = 5;
    document.getElementById('income').value = 25000;
    document.getElementById('employees-value').textContent = '5';
    document.getElementById('income-value').textContent = '25000 P';
    calculateCost();
}

calculateCost();