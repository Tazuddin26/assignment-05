document.getElementById("btn-donate").addEventListener("click", function (e) {
  e.preventDefault();
  const name = "Noakhali";
  const addMoney = getMoneyValueById("add-money-donate");
  document.getElementById("add-money-donate").value = "";

  if (isNaN(addMoney) || addMoney < 0) {
    alert("Please enter a valid and positive number!");
  } else if (addMoney === "") {
    alert("Please Input a Valid Amount!");
  } else {
    const balance = getTextValueById("total-balance");
    const totalBalance = balance + addMoney;
    document.getElementById("total-balance").innerText = totalBalance;
    historyTextById(addMoney,name);
    const topBalance = getTextValueById("top-balance");
    if (addMoney > topBalance) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalance = topBalance - addMoney;
    document.getElementById("top-balance").innerText = totalTopBalance;
    document.getElementById("show-modal").classList.remove("hidden");
  }
});

document
  .getElementById("btn-donate-two")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const name = 'Feni'
    const addMoneyTwo = getMoneyValueById("add-money-donate-two");
    document.getElementById("add-money-donate-two").value = "";
    if (isNaN(addMoneyTwo) || addMoneyTwo < 0) {
      alert("Please enter a valid and positive number!");
    } else if (addMoneyTwo === "") {
      alert("Please Input a Valid Amount!");
    } else {
      const balanceTwo = getTextValueById("total-balance2");
      const totalBalanceTwo = balanceTwo + addMoneyTwo;
      document.getElementById("total-balance2").innerText = totalBalanceTwo;
      historyTextById(addMoneyTwo,name);
      const topBalanceTwo = getTextValueById("top-balance");
      if (addMoneyTwo > topBalanceTwo) {
        alert("Is Not enough Money!");
        return;
      }
      const totalTopBalanceTwo = topBalanceTwo - addMoneyTwo;
      document.getElementById("top-balance").innerText = totalTopBalanceTwo;
      document.getElementById("show-modal").classList.remove("hidden");
    }
  });

document.getElementById("btn-donate3").addEventListener("click", function (e) {
  e.preventDefault();
  const name = "Feni";
  const addMoneyThree = getMoneyValueById("add-money-donate3");
  document.getElementById("add-money-donate3").value = "";
  if (isNaN(addMoneyThree) || addMoneyThree < 0) {
    alert("Please enter a valid and positive number!");
  } else if (addMoneyThree === "") {
    alert("Please Input a Valid Amount!");
  } else {
    const balanceThree = getTextValueById("total-balance3");
    const totalBalanceThree = balanceThree + addMoneyThree;
    document.getElementById("total-balance3").innerText = totalBalanceThree;
    historyTextById(addMoneyThree,name);
    const topBalanceThree = getTextValueById("top-balance");
    if (addMoneyThree > topBalanceThree) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceThree = topBalanceThree - addMoneyThree;
    document.getElementById("top-balance").innerText = totalTopBalanceThree;
    document.getElementById("show-modal").classList.remove("hidden");
  }
});

document.getElementById("btn-donate4").addEventListener("click", function (e) {
  e.preventDefault();
  const name = "Sylhet";
  const addMoneyFour = getMoneyValueById("add-money-donate4");
  document.getElementById("add-money-donate4").value = "";
  if (isNaN(addMoneyFour) || addMoneyFour < 0) {
    alert("Please enter a valid and positive number!");
  } else if (addMoneyFour === "") {
    alert("Please Input a Valid Amount!");
  } else {
    const balanceFour = getTextValueById("total-balance4");
    const totalBalanceFour = balanceFour + addMoneyFour;
    document.getElementById("total-balance4").innerText = totalBalanceFour;
    historyTextById(addMoneyFour,name);
    const topBalanceFour = getTextValueById("top-balance");
    if (addMoneyFour > topBalanceFour) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceFour = topBalanceFour - addMoneyFour;
    document.getElementById("top-balance").innerText = totalTopBalanceFour;
    document.getElementById("show-modal").classList.remove("hidden");
  }
});

document.getElementById("btn-donate5").addEventListener("click", function (e) {
  e.preventDefault();
    const name = "Comilla";
  const addMoneyFive = getMoneyValueById("add-money-donate5");
  document.getElementById("add-money-donate5").value = "";
  if (isNaN(addMoneyFive) || addMoneyFive < 0) {
    alert("Please enter a valid and positive number!");
  } else if (addMoneyFive === "") {
    alert("Please Input a Valid Amount!");
  } else {
    const balanceFive = getTextValueById("total-balance5");
    const totalBalanceFive = balanceFive + addMoneyFive;
    document.getElementById("total-balance5").innerText = totalBalanceFive;
    historyTextById(addMoneyFive,name);
    const topBalanceFive = getTextValueById("top-balance");
    if (addMoneyFive > topBalanceFive) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceFive = topBalanceFive - addMoneyFive;
    document.getElementById("top-balance").innerText = totalTopBalanceFive;
    document.getElementById("show-modal").classList.remove("hidden");
  }
});

document.getElementById("btn-donate6").addEventListener("click", function (e) {
  e.preventDefault();
  const name = "Lakshmipur";
  const addMoneySix = getMoneyValueById("add-money-donate6");
  document.getElementById("add-money-donate6").value = "";
  if (isNaN(addMoneySix) || addMoneySix < 0) {
    alert("Please enter a valid and positive number!");
  } else if (addMoneySix === "") {
    alert("Please Input a Valid Amount!");
  } else {
    const balanceSix = getTextValueById("total-balance6");
    const totalBalanceSix = balanceSix + addMoneySix;
    document.getElementById("total-balance6").innerText = totalBalanceSix;
    historyTextById(addMoneySix,name);
    const topBalanceSix = getTextValueById("top-balance");
    if (addMoneySix > topBalanceSix) {
      alert("Is Not enough Money!");
      return;
    }
    const totalTopBalanceSix = topBalanceSix - addMoneySix;
    document.getElementById("top-balance").innerText = totalTopBalanceSix;
    document.getElementById("show-modal").classList.remove("hidden");
  }
});
closeModal();
