 let openEye = document.getElementsByClassName("fas");
console.log(openEye);
let input1 = document.querySelector(".third-child input");
console.log(input1);
let input2 = document.querySelector(".fourth-child input");
console.log(input2);
let openEye2 = document.getElementById("eye-second");
 let att = input1.getAttribute("type");
  openEye[0].addEventListener("click" , () => {
     if(att == "password") {
       openEye[0].setAttribute("class" , "fas fa-eye");
       input1.setAttribute("type" , "text");
       att = "text";
     } else {
       openEye[0].setAttribute("class" , "fas fa-eye-slash");
      input1.setAttribute("type" , "password"); 
       att = "password";
     }
  })
  // setting second time type value
   let att2 = input2.getAttribute("type")
  openEye2.addEventListener("click" , () => {
         if(att2 == "password") {
       openEye2.setAttribute("class" , "fas fa-eye");
       input2.setAttribute("type" , "text");
       att2 = "text";
     } else {
       openEye2.setAttribute("class" , "fas fa-eye-slash");
      input2.setAttribute("type" , "password"); 
       att2 = "password";
     }
  })
  