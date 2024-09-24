document.getElementById("btn-donate").addEventListener("click", function (e) {
  e.preventDefault();
  const addMoney = getMoneyValueById("add-money-donate");
  document.getElementById("add-money-donate").value = "";
  if (!isNaN(addMoney) && addMoney > 0) {
    alert("Wellcome To your Donate");
    const balance = getTextValueById("total-balance");
    const totalBalance = balance + addMoney;
    document.getElementById("total-balance").innerText = totalBalance;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoney} Taka is Donated for Donate for Feni,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
    document.getElementById("history-card").appendChild(newDiv);
    const topBalance = getTextValueById("top-balance");
    if (addMoney > topBalance) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalance = topBalance - addMoney;
    document.getElementById("top-balance").innerText = totalTopBalance;
  } else {
    alert("wrong input");
  }
});

document
  .getElementById("btn-donate-two")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const addMoneyTwo = getMoneyValueById("add-money-donate-two");
    document.getElementById("add-money-donate-two").value = "";
    if (!isNaN(addMoneyTwo) && addMoneyTwo > 0) {
      const balanceTwo = getTextValueById("total-balance-two");
      const totalBalanceTwo = balanceTwo + addMoneyTwo;
      document.getElementById("total-balance-two").innerText = totalBalanceTwo;
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoneyTwo} Taka is Donated for Donate for Feni,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
      document.getElementById("history-card").appendChild(newDiv);

      const topBalanceTwo = getTextValueById("top-balance");
      if (addMoneyTwo > topBalanceTwo) {
        alert("Is Not enough Money!");
        return;
      }
      const totalTopBalanceTwo = topBalanceTwo - addMoneyTwo;
      document.getElementById("top-balance").innerText = totalTopBalanceTwo;
    } else {
      alert("wrong input");
    }
  });

document.getElementById("btn-donate3").addEventListener("click", function (e) {
  e.preventDefault();
  addMoneyThree = getMoneyValueById("add-money-donate3");
  document.getElementById("add-money-donate3").value = "";
  if (!isNaN(addMoneyThree) && addMoneyThree > 0) {
    const balanceThree = getTextValueById("total-balance3");
    const totalBalanceThree = balanceThree + addMoneyThree;
    document.getElementById("total-balance3").innerText = totalBalanceThree;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoneyThree} Taka is Donated for Donate for Feni,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
    document.getElementById("history-card").appendChild(newDiv);

    const topBalanceThree = getTextValueById("top-balance");
    if (addMoneyThree > topBalanceThree) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceThree = topBalanceThree - addMoneyThree;
    document.getElementById("top-balance").innerText = totalTopBalanceThree;
  } else {
    alert("wrong input");
  }
});

document.getElementById("btn-donate4").addEventListener("click", function (e) {
  e.preventDefault();
  addMoneyFour = getMoneyValueById("add-money-donate4");
  document.getElementById("add-money-donate4").value = "";
  if (!isNaN(addMoneyFour) && addMoneyFour > 0) {
    const balanceFour = getTextValueById("total-balance4");
    const totalBalanceFour = balanceFour + addMoneyFour;
    document.getElementById("total-balance4").innerText = totalBalanceFour;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoneyFour} Taka is Donated for Donate for Sylhet,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
    document.getElementById("history-card").appendChild(newDiv);

    const topBalanceFour = getTextValueById("top-balance");
    if (addMoneyFour > topBalanceFour) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceFour = topBalanceFour - addMoneyFour;
    document.getElementById("top-balance").innerText = totalTopBalanceFour;
  } else {
    alert("wrong input");
  }
});

document.getElementById("btn-donate5").addEventListener("click", function (e) {
  e.preventDefault();
  addMoneyFive = getMoneyValueById("add-money-donate5");
  document.getElementById("add-money-donate5").value = "";
  if (!isNaN(addMoneyFive) && addMoneyFive > 0) {
    const balanceFive = getTextValueById("total-balance5");
    const totalBalanceFive = balanceFive + addMoneyFive;
    document.getElementById("total-balance5").innerText = totalBalanceFive;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoneyFive} Taka is Donated for Donate for Comilla,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
    document.getElementById("history-card").appendChild(newDiv);

    const topBalanceFive = getTextValueById("top-balance");
    if (addMoneyFive > topBalanceFive) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceFive = topBalanceFive - addMoneyFive;
    document.getElementById("top-balance").innerText = totalTopBalanceFive;
  } else {
    alert("wrong input");
  }
});

document.getElementById("btn-donate6").addEventListener("click", function (e) {
  e.preventDefault();
  addMoneySix = getMoneyValueById("add-money-donate6");
  document.getElementById("add-money-donate6").value = "";
  if (!isNaN(addMoneySix) && addMoneySix > 0) {
    const balanceSix = getTextValueById("total-balance6");
    const totalBalanceSix = balanceSix + addMoneySix;
    document.getElementById("total-balance6").innerText = totalBalanceSix;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="mx-10 border-2 rounded-lg py-6 mt-4">
    <p class="text-lg mx-4 ">
    ${addMoneySix} Taka is Donated for Donate for Lakshmipur,Bangladesh</p>
    <p class="text-sm mx-4 py-3 rounded-lg bg-gray-200">${new Date()}</p>
    </div>`;
    document.getElementById("history-card").appendChild(newDiv);

    const topBalanceSix = getTextValueById("top-balance");
    if (addMoneySix > topBalanceSix) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceSix = topBalanceSix - addMoneySix;
    document.getElementById("top-balance").innerText = totalTopBalanceSix;
  } else {
    alert("wrong input");
  }
});
