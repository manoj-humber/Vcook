/*------------------------------------------------------------------
                          Menu   
-------------------------------------------------------------------*/

function toogle_visibility(tab_id, id) {
    let Tab_ID = document.querySelector(tab_id);
    let ID = document.querySelector(id);

    let home_tab = document.querySelector('#v-pills-home-tab');
    let profile_tab = document.querySelector('#v-pills-profile-tab');
    let messages_tab = document.querySelector('#v-pills-messages-tab');
    let settings_tab = document.querySelector('#v-pills-settings-tab');

    let home = document.querySelector('#v-pills-home');
    let profile = document.querySelector('#v-pills-profile');
    let messages = document.querySelector('#v-pills-messages');
    let settings = document.querySelector('#v-pills-settings');

    home_tab.classList.remove("active");
    profile_tab.classList.remove("active");
    messages_tab.classList.remove("active");
    settings_tab.classList.remove("active");

    home.classList.remove("show", "active");
    profile.classList.remove("show", "active");
    messages.classList.remove("show", "active");
    settings.classList.remove("show", "active");

    if (id == '#v-pills-home') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else if (id == '#v-pills-profile') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else if (id == '#v-pills-messages') {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    } else {

        Tab_ID.classList.add("active");
        ID.classList.add("show", "active");

    }
}


/*------------------------------------------------------------------
    Order Timeline
-------------------------------------------------------------------*/

function load_phase() {

    loadphasebtn = document.querySelector('#loadphasebtn');
    loadphasebtn.style.display = 'none';

    orderdiv = document.createElement("div");
    orderdiv.classList.add("medium-12", "description");

    orderh3 = document.createElement("h3");
    orderh3.textContent = "Ordered Phase:- ";

    orderp = document.createElement("p");
    orderp.textContent = "During this phase we record all your order details and confirm that payment has been received. After getting Confirmation ordered food will be ready by cooks and then perform quality check.In the last order will be packed and ready for shipped.";

    orderdiv.append(orderh3);
    orderdiv.append(orderp);

    descdiv = document.querySelector('#loadphase');
    descdiv.append(orderdiv);

    shipdiv = document.createElement("div");
    shipdiv.classList.add("medium-12", "description");

    shiph3 = document.createElement("h3");
    shiph3.textContent = "Shipped Phase:- ";

    shipp = document.createElement("p");
    shipp.textContent = "In this phase, first of all we print the order invoice and packing slip. After that we pack the order securely and attach the shipping label to the package. In the end parcel will be ready for dispatch. Moreover, E-mail is sent to the customer about order status and delivery date so they can follow proper timeline.";

    shipdiv.append(shiph3);
    shipdiv.append(shipp);

    descdiv.append(shipdiv);

    dispdiv = document.createElement("div");
    dispdiv.classList.add("medium-12", "description");

    disph3 = document.createElement("h3");
    disph3.textContent = "Dispatched Phase:- ";

    dispp = document.createElement("p");
    dispp.textContent = "This is the phase where order has been picked from restaurant and get out for delivery. In the first step of this phase we examine your other orders for delivery. Then we load item into the delivery vehicle and order go through diffent delivery center to main customer location.";

    dispdiv.append(disph3);
    dispdiv.append(dispp);

    descdiv.append(dispdiv);

    delidiv = document.createElement("div");
    delidiv.classList.add("medium-12", "description");

    delih3 = document.createElement("h3");
    delih3.textContent = "Deliverd Phase:- ";

    delip = document.createElement("p");
    delip.textContent = "This is the final phase where order has been deliverd to Customer location. After that E-mail and message has been sent to the customer for confirmation.";

    delidiv.append(delih3);
    delidiv.append(delip);

    descdiv.append(delidiv);

}

/*------------------------------------------------------------------
    Customer Reviews
-------------------------------------------------------------------*/

function load_feedbackform() {
    let review = document.querySelector('#Review');
    review.style.display = 'none';

    let feedback_form = document.querySelector('#feedback_form');
    feedback_form.style.display = 'block';
}

function validate_feedbackform() {
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