function getMoneyValueById(id) {
  const inputAddMoney = document.getElementById(id).value;
  const inputAddMoneyNumber = parseFloat(inputAddMoney);
  return inputAddMoneyNumber;
}

function getTextValueById(id) {
  const inputTextValue = document.getElementById(id).innerText;
  const inputTextValueNumber = parseFloat(inputTextValue);
  return inputTextValueNumber;
}


function donateCardById(id) {
  document.getElementById("donation-card").classList.add("hidden");
  document.getElementById("history-card").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

