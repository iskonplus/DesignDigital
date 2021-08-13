// const like = document.querySelectorAll(".like");
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
}

// -------------formSubscribe----------------

const isValueSubscribe = !localStorage.getItem("Email")
  ? []
  : JSON.parse(localStorage.getItem("Email"));

let chechEmail;
const inputEmail = formSubscribe.elements.email;
const inputSubmit = formSubscribe.elements.submit;

formSubscribe.elements.submit.addEventListener("click", (event) =>
  getValueSubscribe(event)
);

function getValueSubscribe(event) {
  event.preventDefault();
  if (chechEmail) {
    isValueSubscribe.push(formSubscribe.elements.email.value);
    localStorage.setItem("Email", JSON.stringify(isValueSubscribe));
    inputEmail.value = "";
    inputEmail.style.border = "1px solid #d6e6f5";
    inputSubmit.style.border = "1px solid #d6e6f5";
    inputEmail.style.borderRight = "none";
    inputSubmit.style.borderLeft = "none";
  }
}

inputEmail.addEventListener("input", () => validationEmail());

function validationEmail() {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const address = inputEmail.value;

  if (!reg.test(address)) {
    chechEmail = false;
    inputEmail.style.border = "1px solid red";
    inputEmail.style.borderRight = "none";
    inputSubmit.style.border = "1px solid red";
    inputSubmit.style.borderLeft = "none";
    return false;
  } else {
    chechEmail = true;
    inputEmail.style.border = "1px solid green";
    inputEmail.style.borderRight = "none";
    inputSubmit.style.border = "1px solid green";
    inputSubmit.style.borderLeft = "none";
  }
}

// -------------get like----------------

const likeHtml = document.querySelectorAll(".like");

let islike = !localStorage.getItem("Like")
  ? []
  : JSON.parse(localStorage.getItem("Like"));


islike && islike.forEach((el, ind) => likeHtml[ind].classList = `${el}`);
  

likeHtml.forEach((el) => {
  el.addEventListener("click", () => giveLike(el));
});

function giveLike(el) {
  el.classList.toggle("active");
  islike.length = 0;

  likeHtml.forEach((el) => islike.push(el.className));
  localStorage.removeItem("Like");
  localStorage.setItem("Like", JSON.stringify(islike));
}

// localStorage.clear();
