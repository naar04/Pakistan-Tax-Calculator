function calculateTax() {
  let income = Number(document.getElementById("income").value);

  let annual = income * 12;

  let tax = 0;

  if (annual <= 600000) {
    tax = 0;
  } else if (annual <= 1200000) {
    tax = annual * 0.05;
  } else if (annual <= 2400000) {
    tax = annual * 0.1;
  } else {
    tax = annual * 0.15;
  }

  document.getElementById("result").innerText =
    "Estimated Tax: Rs. " + tax;
}