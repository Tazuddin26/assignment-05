document
  .getElementById("btn-donate-card")
  .addEventListener("click", function () {
    donateCardById("donation-card", 1);
  });

document.getElementById("btn-history").addEventListener("click", function () {
  donateCardById("history-card", 2);
});
//  Blog Button Toggle ------>
// const btn = document.getElementById("btn-blog");
// btn.addEventListener("click", function () {
//   if (btn.innerText === "Blog") {
//     btn.innerText = "Home";
//     donateCardById("important-fqa");
//   } else {
//     btn.innerText = "Blog";
//     window.location.href = "/index.html";
//   }
// });

let isBtn = true;
document.getElementById('btn-blog').addEventListener('click', function () {
  if (isBtn) {
    donateCardById("important-fqa");
    document.getElementById('btn-blog').innerText = "Home";
  } else {
    window.location.href = '/index.html';
     document.getElementById("btn-blog").innerText = "Blog";
  }
  isBtn = !isBtn;
})