const showSidebar = document.querySelector("#showSiderbar");
const sidebar = document.querySelector(".side-bar");
const body = document.querySelector("body");

const hideSidebar = document.querySelector("#hideSidebar");

function closeSidebar() {
  sidebar.style.display = "none";
  body.style.overflowY = "visible";
}

showSidebar.addEventListener("click", function () {
  sidebar.style.display = "flex";
  body.style.overflowY = "hidden";
});

hideSidebar.addEventListener("click", closeSidebar);

// Add event listeners to "Home" and "Roadmap" links
document.querySelectorAll(".link-to").forEach(function (link) {
  link.addEventListener("click", closeSidebar);
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

// GSAP ANIMATION

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

gsap.fromTo(".logo", { scale: 0.5 }, { scale: 1, duration: 5 });
gsap.fromTo(
  ".intro-paragraph",
  { opacity: 0 },
  { opacity: 1, duration: 5 },
  "<50%"
);

// gsap.fromTo(".btn-buy", { opacity: 0.5 }, { opacity: 1, duration: 10 });
