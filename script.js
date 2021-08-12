const like = document.querySelectorAll(".like");
const windowElectricity = document.querySelector(".container.subscribe>p");
const blockHelp = document.querySelector(".wraper_block_help");
const wrapperButtonNav = document.querySelector(".wrapper_button_nav");
const buttonNav = document.querySelector(".button_nav");
const containerNav = document.querySelector(".container.nav");
const ulNav = document.querySelector(".nav.ul");
const search = document.querySelector(".search");
const searchButton = document.querySelector(".icon_search");
const formSubscribe = document.querySelector(".form_subscribe");

// console.log(blockHelp);
like.forEach((el) => {
  el.addEventListener("click", () => giveLike(el));
});

function giveLike(el) {
  el.classList.toggle("active");
}

windowElectricity.addEventListener("mouseover", () =>
  openClousWindowElectricity()
);
windowElectricity.addEventListener("mouseout", () =>
  openClousWindowElectricity()
);

function openClousWindowElectricity() {
  blockHelp.classList.toggle("active");
}

wrapperButtonNav.addEventListener("click", () => openClousMenu());
containerNav.addEventListener("click", () => openClousMenu());

function openClousMenu() {
  buttonNav.classList.toggle("active");
  wrapperButtonNav.classList.toggle("active");
  containerNav.classList.toggle("active");
  ulNav.classList.toggle("active");
}

// ------------------search----------------

searchButton.addEventListener("click", () => getSearchValue());
search.addEventListener("keydown", (e) => getSearchValue(e));

const searchValue = !localStorage.getItem("searchValue")
  ? []
  : JSON.parse(localStorage.getItem("searchValue"));

function getSearchValue(e) {
  !!e ? e.key === "Enter" && setInLocalStorage() : setInLocalStorage();
}

function setInLocalStorage() {
  searchValue.push(search.value);
  localStorage.setItem("searchValue", JSON.stringify(searchValue));
  search.value = "";
  // localStorage.clear()
}

// -------------formSubscribe----------------

// formSubscribe.addEventListener()
console.log(formSubscribe.elements.submit);

const isValueSubscribe = !localStorage.getItem("Email")
  ? []
  : JSON.parse(localStorage.getItem("Email"));

formSubscribe.elements.submit.addEventListener("click", (event) =>
  getValueSubscribe(event)
);

function getValueSubscribe(event) {
  event.preventDefault();

  isValueSubscribe.push(formSubscribe.elements.email.value);
  localStorage.setItem("Email", JSON.stringify(isValueSubscribe));
  formSubscribe.elements.email.value = "";


  // localStorage.clear()
}
