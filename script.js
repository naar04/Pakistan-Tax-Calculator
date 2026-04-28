function calculateTax() {
  let income = Number(document.getElementById("income").value);

  if (!income || income <= 0) {
    document.getElementById("result").innerHTML =
      "⚠️ Please enter valid income";
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

  let net = annual - tax;

  document.getElementById("result").innerHTML = `
    <b>Annual Income:</b> Rs ${annual.toLocaleString()}<br>
    <b>Estimated Tax:</b> Rs ${tax.toFixed(0)}<br>
    <b>Net Income:</b> Rs ${net.toFixed(0)}
  `;
}


// WhatsApp Share
function shareWhatsApp() {
  let income = Number(document.getElementById("income").value);

  if (!income || income <= 0) {
    alert("Enter income first");
    return;
  }

  let annual = income * 12;

  let tax = annual <= 600000 ? 0 :
            annual <= 1200000 ? annual * 0.05 :
            annual <= 2400000 ? annual * 0.10 :
            annual * 0.15;

  let msg =
`🇵🇰 Pakistan Tax Calculator 2025–26

Monthly Income: Rs ${income}
Annual Income: Rs ${annual}
Tax: Rs ${tax.toFixed(0)}
Net: Rs ${(annual - tax).toFixed(0)}

Try it:
https://your-link-here`;

  window.open("https://wa.me/?text=" + encodeURIComponent(msg), "_blank");
}


// DOWNLOAD IMAGE
function downloadImage() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    let link = document.createElement("a");
    link.download = "tax-result.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}


// DOWNLOAD PDF
function downloadPDF() {
  html2canvas(document.getElementById("captureArea")).then(canvas => {
    let img = canvas.toDataURL("image/png");

    let pdf = new jspdf.jsPDF();

    let width = pdf.internal.pageSize.getWidth();
    let height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("tax-result.pdf");
  });
}
