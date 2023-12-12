const menuDiv = document.querySelector(".sidebar");
const checkBox = document.getElementById("menu-checkbox");

/***************************************/
/*****   Hamburger display or hide *****/
/***************************************/

const translateMenu = () => {
  checkBox.checked = false;
};

menuDiv.addEventListener("click", translateMenu);

/***************************************/
/*****     Sticky Navigation       *****/
/***************************************/
const jumbotron = document.querySelector(".jumbotron");
const header = document.querySelector(".header");
const navHeight = header.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(jumbotron);

/***************************************/
/*****       Form Validation       *****/
/***************************************/

const nameValidation = document.getElementById("name_validation");
const submitterName = document.getElementById("name");
const submitterEmail = document.getElementById("email");
const emailValidation = document.getElementById("email_validation");
const submitterMessage = document.getElementById("message");
const messageValidation = document.getElementById("message_validation");

const checkName = (e) => {
  let submitterName = e.target.value;
  if (submitterName == null || submitterName.length < 4) {
    nameValidation.innerText = "Please enter a valid name.";
  } else {
    nameValidation.innerText = "";
  }
};

const checkEmail = (e) => {
  let submitterEmail = e.target.value;
  if (!submitterEmail.includes("@") || !submitterEmail.includes(".")) {
    emailValidation.innerText = "Please enter a valid email.";
  } else {
    emailValidation.innerText = "";
  }
};

const checkMessage = (e) => {
  let submitterMessage = e.target.value;
  if (submitterMessage == null || submitterMessage.length < 5) {
    messageValidation.innerText = "Please enter a message.";
  } else {
    messageValidation.innerText = "";
  }
};

submitterName.addEventListener("input", checkName);
submitterEmail.addEventListener("input", checkEmail);
submitterMessage.addEventListener("input", checkMessage);
