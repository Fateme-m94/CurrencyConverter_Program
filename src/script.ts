const rates: { [key: string]: number } = {
  USD: 1,
  EUR: 0.93,          // {the exchange rate of each currency against the US dollar.}
  //GBP: 0.79,
  JPY: 156.5,
  IRR: 830000
};

function convertCurrency(): void {
  const amountInput = document.getElementById("amount") as HTMLInputElement;
  const fromSelect  = document.getElementById("fromCurrency") as HTMLSelectElement;
  const toSelect = document.getElementById("toCurrency") as HTMLSelectElement;
  const resultElement = document.getElementById("result") as HTMLElement;

  const amount = parseFloat(amountInput.value);
  const fromtype= fromSelect.value;
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




