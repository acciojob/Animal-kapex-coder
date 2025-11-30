//your JS code here. If required.

const animals = [
  {
    id: 1,
    name: "camel",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/camel.jpg",
    alt: "camel"
  },
  {
    id: 2,
    name: "cheetah",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/cheetah.jpg",
    alt: "cheetah"
  },
  {
    id: 3,
    name: "elephant",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/elephant.jpg",
    alt: "elephant"
  },
  {
    id: 4,
    name: "gorilla",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/gorilla.jpg",
    alt: "gorilla"
  },
  {
    id: 5,
    name: "koala",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/koala.jpg",
    alt: "koala"
  },
  {
    id: 6,
    name: "lion",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/lion.jpg",
    alt: "lion"
  },
  {
    id: 7,
    name: "polar_bear",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/polar_bear.jpg",
    alt: "polar bear"
  },
  {
    id: 8,
    name: "tiger",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/tiger.jpg",
    alt: "tiger"
  },
  {
    id: 9,
    name: "wolf",
    img: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/wolf.jpg",
    alt: "wolf"
  }
];

const mainContainer = document.getElementById("animal-photos");

animals.forEach(animal => {
  const animalDiv = document.createElement("div");
  animalDiv.className = "animal-photo";
    const imgElement = document.createElement("img");
    imgElement.src = animal.img;
    imgElement.alt = animal.alt;
    animalDiv.appendChild(imgElement);
    mainContainer.appendChild(animalDiv);
});
