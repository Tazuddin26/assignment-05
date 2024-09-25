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

function donateCardById(id, buttonNumber) {
  document.getElementById("donation-card").classList.add("hidden");
  document.getElementById("history-card").classList.add("hidden");
  document.getElementById("important-fqa").classList.add("hidden");
  document.getElementById(id,buttonNumber).classList.remove("hidden");

  if (buttonNumber === 1) {
    document.getElementById("btn-donate-card").style.backgroundColor =
      "#B4F461";
    document.getElementById("btn-history").style.backgroundColor = "#e6e6e6";
  } else if (buttonNumber === 2) {
    document.getElementById("btn-history").style.backgroundColor = "#B4F461";
    document.getElementById("btn-donate-card").style.backgroundColor =
      "#e6e6e6";
  }
}

// History Text function----->
function historyTextById(moneyValue,name) {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 font-bold">
    ${moneyValue} Taka is Donated for Donate for  ${name},Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
  document.getElementById("history-card").appendChild(newDiv);
}
// Close Modal function
function closeModal() {
  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("show-modal").classList.add("hidden");
  });
}

