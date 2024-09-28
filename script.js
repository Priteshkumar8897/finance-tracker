document.getElementById('expense-form').addEventListener('submit', addExpense);
document.getElementById('income-form').addEventListener('submit', addIncome);
document.getElementById('investment-form').addEventListener('submit', addInvestment);

let totalExpenses = 0;
let totalIncome = 0;
let totalInvestments = 0;
let overallProfitLoss = 0;

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}

function addExpense(e) {
    e.preventDefault();
    const date = document.getElementById('expense-date').value;
    const desc = document.getElementById('expense-desc').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    
    const entry = `<p>${date} - ${desc} - ${formatCurrency(amount)}</p>`;
    document.getElementById('expense-entries').innerHTML += entry;
    
    totalExpenses += amount;
    updateSummary();
}

function addIncome(e) {
    e.preventDefault();
    const date = document.getElementById('income-date').value;
    const source = document.getElementById('income-source').value;
    const amount = parseFloat(document.getElementById('income-amount').value);
    
    const entry = `<p>${date} - ${source} - ${formatCurrency(amount)}</p>`;
    document.getElementById('income-entries').innerHTML += entry;
    
    totalIncome += amount;
    updateSummary();
}

function addInvestment(e) {
    e.preventDefault();
    const date = document.getElementById('investment-date').value;
    const type = document.getElementById('investment-type').value;
    const quantity = parseInt(document.getElementById('investment-quantity').value);
    const shareValue = parseFloat(document.getElementById('investment-share-value').value);
    const currentValue = parseFloat(document.getElementById('investment-current-value').value);
    
    const profitLoss = (currentValue - shareValue) * quantity;
    const investmentTotal = quantity * shareValue;

    const entry = `<p>${date} - ${type} - ${formatCurrency(investmentTotal)} - Profit/Loss: ${formatCurrency(profitLoss)}</p>`;
    document.getElementById('investment-entries').innerHTML += entry;
    
    totalInvestments += investmentTotal;
    overallProfitLoss += profitLoss;
    updateSummary();
}

function updateSummary() {
    document.getElementById('total-expenses').innerText = formatCurrency(totalExpenses);
    document.getElementById('total-income').innerText = formatCurrency(totalIncome);
    document.getElementById('total-investments').innerText = formatCurrency(totalInvestments);
    document.getElementById('overall-profit-loss').innerText = formatCurrency(totalIncome - totalExpenses + overallProfitLoss);
}

document.getElementById('generate-pdf').addEventListener('click', generatePDF);

function generatePDF() {
    // Use jsPDF or similar to generate a PDF with INR amounts
    alert('PDF Generation feature will be implemented.');
}
