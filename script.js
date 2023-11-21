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

// GRAPH

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Aperime Holders",
      "Team Allocation",
      "Community and Airdrop",
      "Liquidity Pool",
      "Partnership",
    ],
    datasets: [
      {
        label: "32,000,000 of Total",
        data: [50, 15, 10, 15, 10],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
