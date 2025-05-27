"use strict";
const rates = {
    USD: 1,
    EUR: 0.93,
    JPY: 156.5,
    IRR: 830000
};
function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("fromCurrency");
    const toSelect = document.getElementById("toCurrency");
    const resultElement = document.getElementById("result");
    const amount = parseFloat(amountInput.value);
    const fromtype = fromSelect.value;
    const totype = toSelect.value;
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }
    if (!(fromtype in rates) || !(totype in rates)) {
        resultElement.textContent = "Invalid currency selection.";
        return;
    }
    const converted = (amount / rates[fromtype]) * rates[totype];
    resultElement.textContent = `${amount.toLocaleString()} ${fromtype} ≈ ${converted.toLocaleString()} ${totype}`;
}
