function ContactForm() {
  let forms1 = document.getElementsByClassName("contact-form");
  let form1 = forms1[0];
  let writeMessage = document.getElementById("contact-write-message");

  if (form1.style.display === "none" || form1.style.display === "") {
    form1.style.display = "flex";
    writeMessage.textContent = "Submit";
  } else {
    form1.style.display = "none";
    writeMessage.textContent = "Write message";
  }
}

function ClickNavbar() {
  let displayNone = document.getElementsByClassName("displayNone");

  // let writeMessage=document.getElementById("contact-write-message");

  if (
    displayNone[0].style.display === "none" ||
    displayNone[0].style.display === ""
  ) {
    displayNone[0].style.display = "flex";
    displayNone[1].style.display = "flex";
    displayNone[2].style.display = "flex";
    displayNone[3].style.display = "flex";
    // writeMessage.textContent="Submit"
  } else {
    displayNone[0].style.display = "none";
    displayNone[1].style.display = "none";
    displayNone[2].style.display = "none";
    displayNone[3].style.display = "none";
    // writeMessage.textContent="Write message"
  }
}

// function cl() {
  
//     let displayNone1 = document.getElementsByClassName("displayNone1");

//     // let writeMessage=document.getElementById("contact-write-message");
  
//     if (
//       displayNone1[0].style.display === "none" ||
//       displayNone1[0].style.display === ""
//     ) {
//       displayNone1[0].style.display = "flex";
    
//       // writeMessage.textContent="Submit"
//     } else {
//       displayNone1[0].style.display = "none";
   
//       // writeMessage.textContent="Write message"
//     }
// }

function cl() {
  
    
     let other=document.getElementById("other-project");
     let text=document.getElementById("showMore");
     let img1=document.getElementById("img1");
  
    if (
        other.style.display === "none" ||
        other.style.display === ""
    ) {
        other.style.display = "block";
        text.textContent="Show Less"
        img1.src="img/viewless.png"
    } else {
        other.style.display = "none";
   
        text.textContent="Show More"
        img1.src="img/viewmore.png"
    }
}
