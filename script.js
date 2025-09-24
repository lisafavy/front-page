const frontPage = document.querySelector(".front-page");
const loader = document.querySelector(".loader");
const hide = "hidden";

function setDispay() {
  setTimeout(() => {
    loader.classList.add(hide);
    frontPage.classList.remove(hide);
  }, 2000);
}
window.addEventListener("load", setDispay);

const btnContainer = document.querySelector(".btn");
const tabContents = document.querySelectorAll(".tab-content");
const allBtns = document.querySelectorAll(".btn button");

function removeActive(item) {
  item.classList.remove("active");
}

function handleClick(e) {
  const currentBtn = e.target;

  if (currentBtn.tagName === "BUTTON") {
    const tab = currentBtn.dataset.tabName;

    tabContents.forEach(removeActive);

    const activeTab = document.querySelector(`#${tab}`);
    activeTab.classList.add("active");

    allBtns.forEach(removeActive);
    currentBtn.classList.add("active");
  }
}

btnContainer.addEventListener("click", handleClick);

// Select modals
const signUpModal = document.querySelector(".signUp-modal");
const loginModal = document.querySelector(".login-modal");
// Select buttons
const getStartedBtn = document.querySelector(".getStarted");
const signUpBtn = document.querySelector(".signUp");
const signInBtn = document.querySelector(".signIn");
const loginBtn = document.querySelector(".login");
// Select close buttons
const closeSignUp = document.getElementById("closeSignUp");
const closeLogin = document.getElementById("closeLogin");

// Open Sign Up modal (Get Started + Sign Up)
function openSignUpModal() {
  signUpModal.classList.add("active");
  loginModal.classList.remove("active");
}

getStartedBtn.addEventListener("click", openSignUpModal);
signUpBtn.addEventListener("click", openSignUpModal);

// Open Login modal (Sign In + Login)
function openLoginModal() {
  loginModal.classList.add("active");
  signUpModal.classList.remove("active");
}

signInBtn.addEventListener("click", openLoginModal);
loginBtn.addEventListener("click", openLoginModal);

// Close Sign Up modal
function closeSignUpModal() {
  signUpModal.classList.remove("active");
}

closeSignUp.addEventListener("click", closeSignUpModal);

// Close Login modal
function closeLoginModal() {
  loginModal.classList.remove("active");
}

closeLogin.addEventListener("click", closeLoginModal);

// Close modal when clicking outside content
window.addEventListener("click", function (e) {
  if (e.target === signUpModal) {
    signUpModal.classList.remove("active");
  }
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
});

// Select the sign-up form
const signUpForm = document.querySelector(".signUp-form");

// form submission
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //input elements
  const fullNameInput = signUpForm.querySelector(
    'input[placeholder="Enter your name"]'
  );
  const emailInput = signUpForm.querySelector(
    'input[placeholder="Enter your email"]'
  );
  const phoneInput = signUpForm.querySelector(
    'input[placeholder="Enter your phone number"]'
  );
  const passwordInput = signUpForm.querySelector(
    'input[placeholder="Enter your password"]'
  );
  const confirmPasswordInput = signUpForm.querySelector(
    'input[placeholder="Confirm your password"]'
  );

  //error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  //Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  //input values
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const phoneNumber = phoneInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Validation
  let isValid = true;

  // Validate Full Name
  const namePattern = /^[a-zA-Z\s]+$/;
  if (fullName === "") {
    nameError.textContent = "Full Name is required";
    isValid = false;
  } else if (!namePattern.test(fullName)) {
    nameError.textContent =
      "Full Name cannot contain numbers or special characters";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate Phone Number
  const phonePattern = /^\d+$/;
  if (phoneNumber === "") {
    phoneError.textContent = "Phone Number is required";
    isValid = false;
  } else if (!phonePattern.test(phoneNumber)) {
    phoneError.textContent = "Phone Number can only contain digits";
    isValid = false;
  }

  // Validate Password
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    isValid = false;
  }

  // Validate Confirm Password
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Confirm Password is required";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  // If all validations pass, submit the form
  if (isValid) {
    alert("Form submitted successfully!");
    signUpForm.submit();
  }
});
