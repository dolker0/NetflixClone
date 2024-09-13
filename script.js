const disclaimerClose = document.querySelector(".disclaimer-close");
const disclaimerBox = document.querySelector(".disclaimer");
disclaimerClose.addEventListener("click" , ()=>{
  disclaimerBox.style.display = "none";
})

let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


document.addEventListener('DOMContentLoaded', ()=>{
  const topTen = document.querySelector('.top-ten-list');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('previous');

  nextBtn.addEventListener('click' , ()=>{
    topTen.scrollBy({
      left : 800,
      behavior : 'smooth'
    });
  })

  prevBtn.addEventListener('click' , ()=>{
    topTen.scrollBy({
      left : -800,
      behavior : 'smooth'
    });
  })

})

const emailPlaceholder = document.querySelector(".email-container-txt");
const emailContainer = document.querySelector(".email-container");
const emailInput = document.getElementById('email');

emailContainer.addEventListener("click", () => {
  emailPlaceholder.style.fontSize = "0.7rem";  
  emailPlaceholder.style.transform = "translateY(-10px)"
  emailPlaceholder.style.transition = "all 0.3s ease";  
});

document.addEventListener("click", (event) => {
  if (!emailContainer.contains(event.target)) {
    if(emailInput.value.trim() === ""){
      emailPlaceholder.style.fontSize = "1rem";  
      emailPlaceholder.style.transform = "translateY(0)"; 
      emailPlaceholder.style.transition = "all 0.3s ease"; 
    }
  }
});
const emailPlaceholderFooter = document.querySelector(".email-container-txt-footer");
const emailContainerFooter = document.querySelector(".footer-email-container");
const emailInputFooter = document.querySelector('.footer-email-btn');

emailContainerFooter.addEventListener("click", () => {
  emailPlaceholderFooter.style.fontSize = "0.7rem";  
  emailPlaceholderFooter.style.transform = "translateY(-10px)"
  emailPlaceholderFooter.style.transition = "all 0.3s ease";  
});

document.addEventListener("click", (event) => {
  if (!emailContainerFooter.contains(event.target)) {
    if(emailInputFooter.value.trim() === ""){
      emailPlaceholderFooter.style.fontSize = "1rem";  
      emailPlaceholderFooter.style.transform = "translateY(0)"; 
      emailPlaceholderFooter.style.transition = "all 0.3s ease"; 
    }
  }
});

