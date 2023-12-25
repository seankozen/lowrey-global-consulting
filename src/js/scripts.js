const menuDiv = document.querySelector(".sidebar");
const checkBox = document.getElementById("menu-checkbox");
const jumbotron = document.querySelector(".jumbotron");
const header = document.querySelector(".header");
const motto = document.querySelector(".motto-box");

const allPageSections = document.querySelectorAll(".sections");

/*****     For form validation     *****/
const nameValidation = document.getElementById("name_validation");
const submitterName = document.getElementById("name");
const submitterEmail = document.getElementById("email");
const emailValidation = document.getElementById("email_validation");
const submitterMessage = document.getElementById("message");
const messageValidation = document.getElementById("message_validation");

/***************************************/
/*****   Hamburger display or hide *****/
/***************************************/

/** 
const translateMenu = () => {
  checkBox.checked = false;
};
*/

checkBox.addEventListener("change", () => {
  let viewingScreen = screen.width;
  if (viewingScreen < 481) {
    if (checkBox.checked) {
      motto.classList.add("hidden");
    } else {
      motto.classList.remove("hidden");
    }
  }
});

//menuDiv.addEventListener("click", translateMenu);

/***************************************/
/*****     Sticky Navigation       *****/
/***************************************/
const navHeight = header.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.3,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(jumbotron);

/***************************************/
/*****  Reveal Section on Scroll   *****/
/***************************************/

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allPageSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

/***************************************/
/*****       Form Validation       *****/
/***************************************/

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
