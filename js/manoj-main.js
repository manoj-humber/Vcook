/*------------------------------------------------------------------
  Home slider and Typewriter  
-------------------------------------------------------------------*/
if ($(window).width() > 1000) {

  class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
   
  }
  else{
      
      var imageWidth = 1024;
  
  // Slider Js Start Here (Auto play) 
  jQuery(document).ready(function($) {
    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('#slider2').css({
      width: slideWidth,
      height: slideHeight
    });
    $('#slider2 ul').css({
      width: sliderUlWidth,
      marginLeft: -slideWidth
    });
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');
  
    function moveLeft() {
      $('#slider2 ul').animate({
        left: +slideWidth
      }, 700, function() {
        $('#slider2 ul li:last-child').prependTo('#slider2 ul');
        $('#slider2 ul').css('left', '');
      });
    };
  
    function moveRight() {
      $('#slider2 ul').animate({
        left: -slideWidth
      }, 700, function() {
        $('#slider2 ul li:first-child').appendTo('#slider2 ul');
        $('#slider2 ul').css('left', '');
      });
    };
  
    // Slider Arrows
    $('#slider2 .prevarrow2').click(function() {
      moveLeft();
    });
    $('#slider2 .nextarrow2').click(function() {
      moveRight();
    });
  
    // auto play function
    setInterval(function() {
      moveRight();
    }, 6000);
  });
  
  }



/*------------------------------------------------------------------
  Profile modal window
-------------------------------------------------------------------*/
function orderDetail(ls) {
  if (ls == "ham") {
    // Get the button that opens the modal
    var btn = document.getElementById("detail");
    var modal1 = document.getElementById("hamModal");
    var cl1 = document.getElementById("cl1");

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal1.style.display = "block";
      document.getElementById("color").color = "color:black";
    }
    // When the user clicks on <span> (x), close the modal
    cl1.onclick = function () {
      modal1.style.display = "none";
    }
  } else if (ls == "bry") {
    // Get the button that opens the modal
    var btn2 = document.getElementById("detail2");
    var modal = document.getElementById("bryModal");
    var cl2 = document.getElementById("cl2");

    // When the user clicks on the button, open the modal
    btn2.onclick = function () {
      modal.style.display = "block";
      document.getElementById("color").color = "color:black";
    }
    // When the user clicks on <span> (x), close the modal
    cl2.onclick = function () {
      modal.style.display = "none";
    }
  } else if (ls == "las") {
    // Get the button that opens the modal
    var btn3 = document.getElementById("detail3");
    var modal3 = document.getElementById("lasModal");
    var cl3 = document.getElementById("cl3");

    // When the user clicks on the button, open the modal
    btn3.onclick = function () {
      modal3.style.display = "block";
      document.getElementById("color").color = "color:black";
    }
    // When the user clicks on <span> (x), close the modal
    cl3.onclick = function () {
      modal3.style.display = "none";
    }
  }

}

/*------------------------------------------------------------------
  Reservation form validate 
-------------------------------------------------------------------*/
function formvalidate() {
  var letters = /^[A-Za-z]+$/;
  var phoneno = /^\d{10}$/;
  var ate = document.getElementById("email").value;
  var date = document.getElementById("input_date");
  var ates = ate.indexOf("@");
  var name = document.getElementById("name");
  var seat = document.getElementById("person");
  var phone = document.getElementById("phone");
  if (ates < 1) {
    document.getElementById("mailerr").innerHTML = "Enter proper mail";
    document.getElementById("email").style.border = "2px solid red";
  } else {
    document.getElementById("mailerr").innerHTML = "";
    document.getElementById("email").style.border = "1px solid green";
  }
  if (name.value == "") {
    document.getElementById("nameerr").innerHTML = "Fill your name Field";
    document.getElementById("name").style.border = "2px solid red";

  } else if (!name.value.match(letters)) {
    alert('Please input alphabet in name field');
    document.getElementById("name").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("nameerr").innerHTML = "";
    document.getElementById("name").style.border = "1px solid green";
  }
  if (date.value == "") {
    document.getElementById("dateerr").innerHTML = "Fill your date Field";
    document.getElementById("input_date").style.border = "2px solid red";
  } else {
    document.getElementById("dateerr").innerHTML = "";
    document.getElementById("input_date").style.border = "1px solid green";
  }
  if (seat.value == "") {
    document.getElementById("seaterr").innerHTML = "Please fill the seat Filed";
    document.getElementById("person").style.border = "2px solid red";
  } else {
    document.getElementById("seaterr").innerHTML = "";
    document.getElementById("person").style.border = "1px solid green";
  }
  if (phone.value == "") {
    document.getElementById("phoneerr").innerHTML = "Please fill you Phone Number";
    document.getElementById("phone").style.border = "2px solid red";
  } else if (!phone.value.match(phoneno)) {
    alert('Enter 10 digit number or numeric character only');
    document.getElementById("phone").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("phoneerr").innerHTML = "";
    document.getElementById("phone").style.border = "1px solid green";

  }
}

/*------------------------------------------------------------------
  Login/signup
-------------------------------------------------------------------*/



function loginValidate() {
  var letters = /^[A-Za-z]+$/;

  let email2 = document.getElementById("mail2").value;
  var chck = email2.indexOf("@");
  var name2 = document.getElementById("name2");

  var spass = document.getElementById("spass");
  var confirmpass = document.getElementById("confirmpass").value;
  if (chck < 1) {
    document.getElementById("emailerr2").innerHTML = "Enter proper mail";
    document.getElementById("mail2").style.border = "2px solid red";
  } else {
    document.getElementById("emailerr2").innerHTML = "";
    document.getElementById("mail2").style.border = "1px solid green";
  }
  if (name2.value == "") {
    document.getElementById("nameerr2").innerHTML = "Fill your name Field";
    document.getElementById("name2").style.border = "2px solid red";

  } else if (!name2.value.match(letters)) {
    alert('Please input alphabet in name field');
    document.getElementById("name2").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("nameerr2").innerHTML = "";
    document.getElementById("name2").style.border = "1px solid green";

  }
  if (pass.value == "") {
    document.getElementById("passerr").innerHTML = "Enter your password";
    document.getElementById("pass").style.border = "2px solid red";
  } else {
    document.getElementById("passerr").innerHTML = "";
    document.getElementById("pass").style.border = "1px solid green";

  }
  if (spass.value == "") {
    document.getElementById("spasserr").innerHTML = "Enter your password";
    document.getElementById("spass").style.border = "2px solid red";
  } else {
    document.getElementById("spasserr").innerHTML = "";
    document.getElementById("spass").style.border = "1px solid green";
  }
  if (spass.value != confirmpass) {
    alert("Password did not match: Please try again..");
    return false;
  }

}

/*------------------------------------------------------------------
                        Bottom to up
-------------------------------------------------------------------*/
$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  $('#back-to-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});