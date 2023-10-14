const phoneInput = document.getElementById("phone");
const networkIcon = document.querySelector(".network-icon");
const airtelNetwork = document.querySelector(".attachment-icon-airtel");
const gloNetwork = document.querySelector(".attachment-icon-glo");
const nineMobileNetwork = document.querySelector(".attachment-icon-ninemobile");
const inputField = document.getElementById("inputField");
const attachmentIcon = document.getElementById("attachmentIcon");

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
  "0809": "9mobile",
  "0817": "9mobile",
  "0818": "9mobile",
  "0908": "9mobile",
  "0909": "9mobile",
  "0809": "9mobile",
  // Add more prefixes as needed
  // Added the prefix
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

inputField.addEventListener("input", function () {
  const phoneNumber = inputField.value;
  const prefix = phoneNumber.substring(0, 4);
  if (networkProviders[prefix] === "MTN" && inputField.value.trim() !== "") {
    attachmentIcon.style.opacity = 1;
  } else if (
    networkProviders[prefix] === "Airtel" &&
    inputField.value.trim() !== ""
  ) {
    airtelNetwork.style.opacity = 1;
    // airtelNetwork.style.display = "block";
  } else if (
    networkProviders[prefix] === "Glo" &&
    inputField.value.trim() !== ""
  ) {
    gloNetwork.style.opacity = 1;
    // gloNetwork.style.display = "block";
  } else if (
    networkProviders[prefix] === "9mobile" &&
    inputField.value.trim() !== ""
  ) {
    nineMobileNetwork.style.opacity = 1;
    // nineMobileNetwork.style.display = "block";
  } else {
    attachmentIcon.style.opacity = 0;
    airtelNetwork.style.opacity = 0;
    gloNetwork.style.opacity = 0;
    nineMobileNetwork.style.opacity = 0;
  }
});
