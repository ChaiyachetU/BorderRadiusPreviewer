const inputs = document.querySelectorAll("input");
const btnCopy = document.querySelector(".container .btn");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    let result = getValues();
    showResult(result);
  });
});

btnCopy.addEventListener("click", copyText);

function getValues() {
  let result = [];
  inputs.forEach((input) => {
    if (input.value != "") {
      result.push(input.value);
    } else {
      result.push(0);
    }
  });
  return result;
}

function showResult(result) {
  const box = document.querySelector(".container .box");
  const values = document.querySelector(".container .result .values");

  box.style.borderRadius = `${result[0]}% ${result[1]}% ${result[2]}% ${result[3]}% / ${result[4]}% ${result[5]}% ${result[6]}% ${result[7]}%`;

  values.innerText = `${result[0]}% ${result[1]}% ${result[2]}% ${result[3]}% / ${result[4]}% ${result[5]}% ${result[6]}% ${result[7]}%`;
}

function copyText() {
  let copyText = document.querySelector(".container .result .values");
  let textAreaDummy = document.createElement("textarea");

  textAreaDummy.value = copyText.textContent;

  document.body.appendChild(textAreaDummy);
  textAreaDummy.select();
  document.execCommand("Copy");
  textAreaDummy.remove();
}
