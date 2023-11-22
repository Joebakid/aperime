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

// FAQ

function toggleAnswer(questionNumber) {
  var answer = document.getElementById("answer" + questionNumber);
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

const tl = gsap.timeline({ defaults: { duration: 1, ease: "Power2.easeOut" } });

//Animting the logo with gsap
const logo = document.querySelector(".logo-title");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)" }
);

// gsap.fromTo(".logo-title", { opacity: 0 }, { opacity: 1, duration: 5 });
gsap.fromTo(".logo", { scale: 0.5 }, { scale: 1, duration: 5 });
