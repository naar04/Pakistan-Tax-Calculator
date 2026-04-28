function calculateTax() {
  let income = Number(document.getElementById("income").value);
  let resultBox = document.getElementById("result");

  // Validation
  if (!income || income <= 0) {
    resultBox.innerHTML = "⚠️ Please enter a valid monthly income";
    return;
  }

  // Annual income
  let annual = income * 12;

  // Tax calculation (simple slabs)
  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.10;
  } else {
    tax = annual * 0.15;
  }

  let netIncome = annual - tax;

  // Show result
  resultBox.innerHTML = `
    <b>Annual Income:</b> Rs ${annual.toLocaleString()}<br>
    <b>Estimated Tax:</b> Rs ${tax.toFixed(0).toLocaleString()}<br>
    <b>Net Income:</b> Rs ${netIncome.toFixed(0).toLocaleString()}
  `;
}


// 🌐 WhatsApp Share Function
function shareWhatsApp() {
  let income = Number(document.getElementById("income").value);

  if (!income || income <= 0) {
    alert("Please enter income and calculate first.");
    return;
  }

  let annual = income * 12;

  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.10;
  } else {
    tax = annual * 0.15;
  }

  let netIncome = annual - tax;

  let message =
`🇵🇰 Pakistan Tax Calculator 2025-26

💰 Monthly Income: Rs ${income}
📊 Annual Income: Rs ${annual}
💸 Estimated Tax: Rs ${tax.toFixed(0)}
🏦 Net Income: Rs ${netIncome.toFixed(0)}

Try it here:
👉 https://naar04.github.io/Pakistan-Tax-Calculator/`;

  let url = "https://wa.me/?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
