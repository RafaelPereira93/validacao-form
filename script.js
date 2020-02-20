const form = document.querySelector(".form");
const erro = document.querySelector(".erro");

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.classList.remove("valido");
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalido");
    target.classList.add("valido");
    target.nextElementSibling.innerText = "";
  }
}

form.addEventListener("change", handleChange);
