let toggleButton = document.getElementById("toggleButton");
let textDescription = document.querySelector(".textDescription");
let originalContent = textDescription.innerHTML.trim();
let contentLength = 350;
let isToggle = true;

const handleResize = () => {
  if (window.innerWidth <= 768) {
    if (textDescription.textContent.length > contentLength) {
      textDescription.innerHTML =
        textDescription.innerHTML.substring(0, contentLength) + "....";
      toggleButton.textContent = "Show More";
      isToggle = true;
      console.log(true);
    } else {
      textDescription.innerHTML = originalContent;
      toggleButton.textContent = "Show Less";
      isToggle = false;
      console.log(false);
    }
    toggleButton.style.display = "block";
    toggleButton.addEventListener("click", toggleClick);
  } else {
    textDescription.innerHTML = originalContent;
    toggleButton.style.display = "none";
  }
};

const toggleClick = () => {
  if (!isToggle) {
    if (textDescription.innerHTML.length > contentLength) {
      textDescription.innerHTML =
        textDescription.innerHTML.substring(0, contentLength) + "....";
      toggleButton.textContent = "Show More";
      console.log(true);
    }
  } else {
    textDescription.innerHTML = originalContent;
    toggleButton.textContent = "Show Less";
    console.log(false);
  }

  isToggle = !isToggle;
};

handleResize();
window.addEventListener("resize", handleResize);

//  Toggling the Email Form for smaller screen sizes
let enquiryEmail = document.getElementById("enquiry");
let enquiryForm = document.getElementById("enquiryForm");
let toggleSwitch = document.querySelector(".toggleSwitch");

function adjustDisplay() {
  if (window.innerWidth >= 768) {
    enquiryForm.style.display = "block";
    toggleSwitch.textContent = "-";
  } else {
    enquiryForm.style.display = "none";
    toggleSwitch.textContent = "+";
  }
}
adjustDisplay();
enquiryEmail.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    if (enquiryForm.style.display == "none") {
      enquiryForm.style.display = "block";
      toggleSwitch.textContent = "-";
    } else {
      enquiryForm.style.display = "none";
      toggleSwitch.textContent = "+";
    }
  }
});

document.getElementById('word1').addEventListener('click', function() {
  toggleVisibility('description1');
});

// JavaScript function to toggle visibility for Word 2
document.getElementById('word2').addEventListener('click', function() {
  toggleVisibility('description2');
});

// JavaScript function to toggle visibility for Word 3
document.getElementById('word3').addEventListener('click', function() {
  toggleVisibility('description3');
});

// JavaScript function to toggle visibility for Word 4
document.getElementById('word4').addEventListener('click', function() {
  toggleVisibility('description4');
});

// JavaScript function to toggle visibility for Word 5
document.getElementById('word5').addEventListener('click', function() {
  toggleVisibility('description5');
});

document.getElementById('word6').addEventListener('click', function() {
  toggleVisibility('description6');
});

// Generic JavaScript function to toggle visibility
function toggleVisibility(descriptionId) {
  var description = document.getElementById(descriptionId);
  if (description.style.display === 'none' || description.style.display === '') {
    description.style.display = 'block';
  } else {
    description.style.display = 'none';
  }
}


window.addEventListener("resize", adjustDisplay);
//  Toggling the Email Form for smaller screen sizes

module.exports = handleResize;