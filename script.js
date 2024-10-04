function toggleCustomTip() {
    const tipSelect = document.getElementById('tip');
    const customTipContainer = document.getElementById('customTipContainer');
    
    if (tipSelect.value === 'custom') {
        customTipContainer.style.display = 'block';
    } else {
        customTipContainer.style.display = 'none';
    }
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipSelect = document.getElementById('tip');
    let tipPercentage;

    if (tipSelect.value === 'custom') {
        tipPercentage = parseFloat(document.getElementById('customTip').value) / 100;
    } else {
        tipPercentage = parseFloat(tipSelect.value);
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `
        <strong>Suma inițială:</strong> ${billAmount.toFixed(2)} RON<br>
        <strong>Valoarea bacșișului:</strong> ${tipAmount.toFixed(2)} RON<br>
        <strong>Total:</strong> ${totalAmount.toFixed(2)} RON
    `;
}

function resetCalculator() {
    document.getElementById('bill').value = '';
    document.getElementById('tip').value = '0';
    document.getElementById('customTip').value = '';
    document.getElementById('customTipContainer').style.display = 'none';
    document.getElementById('resultText').innerHTML = '';
}
