const like = document.querySelectorAll(".like");
const windowElectricity = document.querySelector(".container.subscribe>p");
const blockHelp = document.querySelector(".wraper_block_help");
const wrapperButtonNav = document.querySelector(".wrapper_button_nav");
const buttonNav = document.querySelector(".button_nav");
const containerNav = document.querySelector(".container.nav");
const ulNav = document.querySelector(".nav.ul");

console.log(blockHelp);
like.forEach(el => { el.addEventListener("click", () => giveLike(el)) });

function giveLike(el) {
    el.classList.toggle("active");
}

windowElectricity.addEventListener("mouseover", () => openClousWindowElectricity());
windowElectricity.addEventListener("mouseout", () => openClousWindowElectricity());

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


// 

// console.log(like)

// contentServise.forEach((el, ind) => el.addEventListener("click", ()=> toggleBlockServise(el, ind)));

// function toggleBlockServise(el, ind) {
//   contentServise.forEach(elem => elem.classList.remove("active"));
//   el.classList.add("active");

//   blockPService.forEach(elem => elem.classList.remove("active"));
//   blockPService[ind].classList.add("active");
// }