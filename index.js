const firstCurr = document.getElementById("currency-first");
const secondCurr = document.getElementById("currency-second");
const firstInp = document.getElementById("inp-first");
const secondInp = document.getElementById("inp-second");
const exchangeRate = document.getElementById("exchange-rate");
updateRate();
function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/7dcc4f8b8caaaad5352b8481/latest/${firstCurr.value}`).then((res) => res.json()).then((data) => {
        const rate = data.conversion_rates[secondCurr.value];
        exchangeRate.innerText = `1 ${firstCurr.value} = ${rate} ${secondCurr.value}`;
        secondInp.value = (firstInp.value * rate).toFixed(3);
    })
}
firstCurr.addEventListener("change", updateRate);
secondCurr.addEventListener("change", updateRate);
firstInp.addEventListener("input", updateRate);