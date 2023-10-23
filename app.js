// const phoneInput = document.getElementById("phone");
const networkIcon = document.querySelector(".network-icon");
const airtelNetwork = document.querySelector(".attachment-icon-airtel");
const gloNetwork = document.querySelector(".attachment-icon-glo");
const nineMobileNetwork = document.querySelector(".attachment-icon-ninemobile");
const inputField = document.getElementById("inputField");
const attachmentIcon = document.getElementById("attachmentIcon");
const pattern = /^\d+$/;
const getNetworkBtn = document.querySelector(".btn-validate");
const error = document.querySelector("#error");

// Map of phone number prefixes to network provider names
const networkProviders = {
  "0803": "MTN",
  "0806": "MTN",
  "0813": "MTN",
  "0810": "MTN",
  "0814": "MTN",
  "0816": "MTN",
  "0703": "MTN",
  "0706": "MTN",
  "0903": "MTN",
  "0906": "MTN",
  "0805": "Glo",
  "0905": "Glo",
  "0811": "Glo",
  "0815": "Glo",
  "0705": "Glo",
  "0807": "Glo",
  "0915": "Glo",
  "0701": "Airtel",
  "0802": "Airtel",
  "0808": "Airtel",
  "0708": "Airtel",
  "0702": "Airtel",
  "0902": "Airtel",
  "0907": "Airtel",
  "0901": "Airtel",
  "0812": "Airtel",
  "0809": "9mobile",
  "0817": "9mobile",
  "0818": "9mobile",
  "0908": "9mobile",
  "0909": "9mobile",
  "0809": "9mobile",
  // Add more prefixes as needed
  // Added the prefix
};

const changeInputBorder = (status) => {
  if (status === true) {
    inputField.style.border = "2px solid rgb(0,255,0)";
  } else if (status === "original") {
    inputField.style.border = "2px solid hsla(192, 100%, 9%, 0.913)";
  } else {
    inputField.style.border = "2px solid 8B0023";
  }
};

// phoneInput.addEventListener("input", updateNetworkIcon);

// function updateNetworkIcon() {
//   const phoneNumber = phoneInput.value;
//   const prefix = phoneNumber.substring(0, 4);

//   if (networkProviders[prefix] === "MTN") {
//     networkIcon.style.display = "block";
//   } else if (networkProviders[prefix] === "Airtel") {
//     airtelNetwork.style.display = "block";
//   } else if (networkProviders[prefix] === "Glo") {
//     gloNetwork.style.display = "block";
//   } else if (networkProviders[prefix] === "9mobile") {
//     nineMobileNetwork.style.display = "block";
//   } else {
//     networkIcon.style.display = "none";
//     airtelNetwork.style.display = "none";
//     gloNetwork.style.display = "none";
//     nineMobileNetwork.style.display = "none";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".nav-collapse");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

let clearNetworkIcons = () => {
  attachmentIcon.style.opacity = 0;
  airtelNetwork.style.opacity = 0;
  gloNetwork.style.opacity = 0;
  nineMobileNetwork.style.opacity = 0;
};

let updateNetworkIcon = (userInput, with234) => {
  const prefix =
    with234 === true
      ? "0" + userInput.substring(4, 7)
      : userInput.substring(0, 4);
  console.log("PREFIX: ", prefix);
  if (networkProviders[prefix] === "MTN") {
    attachmentIcon.style.opacity = 1;
    error.innerHTML = "";
    changeInputBorder(true);
  } else if (networkProviders[prefix] === "Airtel") {
    airtelNetwork.style.opacity = 1;
    error.innerHTML = "";
    changeInputBorder(true);
  } else if (networkProviders[prefix] === "Glo") {
    gloNetwork.style.opacity = 1;
    error.innerHTML = "";
    changeInputBorder(true);
  } else if (networkProviders[prefix] === "9mobile") {
    nineMobileNetwork.style.opacity = 1;
    error.innerHTML = "";
    changeInputBorder(true);
  } else {
    clearNetworkIcons();
    changeInputBorder(false);
    error.innerHTML =
      "Try another number as we don't know the network of the number";
  }
};

getNetworkBtn.addEventListener("click", () => {
  let userInput = document.getElementById("inputField").value.trim();
  let error = document.querySelector("#error");

  let pattern = /^\d+$/;
  try {
    if (userInput.length == 0) {
      throw "You need to enter a number";
    }
    if (userInput.slice(0, 4) === "+234") {
      userInput = "0" + userInput.slice(4);
      console.log("USERINPUT CHANGED", userInput);
    }
    if (userInput.length < 11) {
      throw "Number must not be less than 11 digits";
    }
    if (userInput.length > 11) {
      throw "Number must not be greater than 11 digits";
    }
    if (!pattern.test(userInput)) {
      throw "Number contains unwanted characters";
    }

    updateNetworkIcon(userInput);
  } catch (err) {
    error.innerHTML = err;
  } finally {
    inputField.value = "";
  }
});

inputField.addEventListener("input", function () {
  error.innerHTML = "";
  let userInput = inputField.value.trim();
  let pattern = /^\d+$/;

  try {
    if (userInput.length === 0) {
      error.innerHTML = "";
      changeInputBorder("original");
      clearNetworkIcons();
    } else {
      if (!pattern.test(userInput) && userInput.slice(0, 4) !== "+234") {
        changeInputBorder(false);
        throw "Number contains unwanted characters";
      }
      if (userInput.length >= 4 && userInput.slice(0, 4) !== "+234") {
        updateNetworkIcon(userInput, false);
      } else if (userInput.length >= 7 && userInput.slice(0, 4) === "+234") {
        updateNetworkIcon(userInput, true);
      } else {
        clearNetworkIcons();
        changeInputBorder("original");
        error.innerHTML = "";
      }
    }
  } catch (err) {
    error.innerHTML = err;
  }
});

// inputField.addEventListener("input", function () {
//   error.innerHTML = "";
//   let userInput = document.getElementById("inputField").value.trim();
//   let pattern = /^\d+$/;
//   try{

//     if (!pattern.test(userInput)) {
//       changeInputBorder(false);
//       throw "Number contains unwanted characters";
//       //   }

//   }catch (err) {
//       error.innerHTML = err;
//     }
// clearNetworkIcons(true);
// error.innerHTML = "";
//
// let error = document.querySelector("#error");
// let pattern = /^\d+$/;
// try {
//   // if (userInput.length == 0) {
//   //   throw "You need to enter a number";
//   // }
//   if (userInput.slice(0, 4) === "+234") {
//     userInput = "0" + userInput.slice(4);
//     // console.log("USERINPUT CHANGED", userInput);
//   }
//   if (userInput.length < 11) {
//     throw "Number must not be less than 11 digits";
//   }
//   if (userInput.length > 11) {
//     throw "Number must not be greater than 11 digits";
//   }
//   if (!pattern.test(userInput)) {
//     throw "Number contains unwanted characters";
//   }
//   updateNetworkIcon(userInput);
// } catch (err) {
//   error.innerHTML = err;
// } finally {
//   inputField.value = "";
// }
// });

// inputField.addEventListener("input", function () {
//   const phoneNumber = inputField.value;
//   const prefix = phoneNumber.substring(0, 4);
//   if (networkProviders[prefix] === "MTN" && inputField.value.trim() !== "") {
//     attachmentIcon.style.opacity = 1;
//   } else if (
//     networkProviders[prefix] === "Airtel" &&
//     inputField.value.trim() !== ""
//   ) {
//     airtelNetwork.style.opacity = 1;
//     // airtelNetwork.style.display = "block";
//   } else if (
//     networkProviders[prefix] === "Glo" &&
//     inputField.value.trim() !== ""
//   ) {
//     gloNetwork.style.opacity = 1;
//     // gloNetwork.style.display = "block";
//   } else if (
//     networkProviders[prefix] === "9mobile" &&
//     inputField.value.trim() !== ""
//   ) {
//     nineMobileNetwork.style.opacity = 1;
//     // nineMobileNetwork.style.display = "block";
//   } else {
//     attachmentIcon.style.opacity = 0;
//     airtelNetwork.style.opacity = 0;
//     gloNetwork.style.opacity = 0;
//     nineMobileNetwork.style.opacity = 0;
//   }
// });
