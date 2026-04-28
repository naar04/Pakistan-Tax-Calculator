function shareWhatsApp() {
  let income = Number(document.getElementById("income").value);

  if (!income || income <= 0) {
    alert("Enter income first");
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

  let message =
`🇵🇰 Pakistan Tax Calculator 2025-26

💰 Monthly Income: Rs ${income}
📊 Annual Income: Rs ${annual}
💸 Tax: Rs ${tax.toFixed(0)}
🏦 Net Income: Rs ${(annual - tax).toFixed(0)}

Try it:
https://naar04.github.io/Pakistan-Tax-Calculator/`;

  let url = "https://wa.me/?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
