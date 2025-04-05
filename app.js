let form = document.querySelector("form");
let show = document.querySelector(".show");

form.addEventListener("submit", getQR);

function getQR(e) {
  e.preventDefault();
  clearPreviousQR();
  let url = document.querySelector("input").value;
  let size = document.querySelector("select").value;

  if (url == "") {
    alert("Please Enter a url");
  } else {
    setTimeout(() => {
        generateQr(url, size);
        
    }, 250);
  }
}

function generateQr(url, size) {
  let qr = new QRCode(show, {
    text: url,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}

function clearPreviousQR() {
  show.innerHTML = "";
}
