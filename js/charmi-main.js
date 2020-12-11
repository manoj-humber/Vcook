/*------------------------------------------------------------------
    Contact Us
-------------------------------------------------------------------*/

function validate_contactform() {
    let name = document.querySelector('#name').value;
    let pnumber = document.querySelector('#p-number').value;
    let message = document.querySelector('#message').value;
    let namepattern = /^[a-zA-z]{2,20}$/;
    let numberpattern = /^\d{10}$/;

    if (!namepattern.test(name)) {
        alert('Please Enter Valid Name(Only Letter with length 2 to 20)');
        return false
    }

    if (!numberpattern.test(pnumber)) {
        alert('Please Enter Valid Phone number (Only 10 digit)');
        return false
    }

    if (message.trim() == '') {
        alert('Please Enter Your Message');
        return false
    }
}


/*------------------------------------------------------------------
    About
-------------------------------------------------------------------*/


function load_details() {
    let loadmorebtn = document.querySelector('#loadmorebtn');
    loadmorebtn.style.display = 'none';

    let loadmore = document.querySelector('#loadmore');
    loadmore.style.display = 'block';

}


/*------------------------------------------------------------------
    Gallery
-------------------------------------------------------------------*/

function load_image() {

    let loadimgbtn = document.querySelector('#loadimgbtn');
    let loadimg = document.getElementsByClassName('loadimg')

    if (loadimgbtn.textContent == 'Show More') {

        for (let i = 0; i < 9; i++) {
            loadimg.item(i).style.display = 'block';
        }

        loadimgbtn.textContent = 'Show Less';

    } else {

        for (let i = 0; i < 9; i++) {
            loadimg.item(i).style.display = 'none';
        }
        loadimgbtn.textContent = 'Show More';

    }
}