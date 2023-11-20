const showSidebar = document.querySelector("#showSiderbar");
const sidebar = document.querySelector(".side-bar");
const body = document.querySelector("body");

const hideSidebar = document.querySelector("#hideSidebar");

showSidebar.addEventListener("click", function () {
  sidebar.style.display = "flex";
  //   menuContent.textContent = "CLOSE";
});

hideSidebar.addEventListener("click", function () {
  sidebar.style.display = "none";
});
