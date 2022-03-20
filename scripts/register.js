class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    cardNumber,
    age,
    address,
    phoneNumber,
    payment,
    color
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cardNumber = cardNumber;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber; //##attention
    this.payment = payment;
    this.color = color;
  }
}

function isValid(user) {
  // return flase when the user is not valid
  //return true when the user is valid
  let valid = true;
  //we need to reset the original appearance of the inputs
  //by removing the input error class
  $("input").removeClass("input-error");
  if (user.email.length == 0) {
    valid = false;
    $("#txtEmail").addClass("input-error");
  }
  if (user.password == 0) {
    valid = false;
    $("#txtPassword").addClass("input-error");
  }
  if (!valid) {
    console.error("Missing data");
    $("#alertError").removeClass("hide");
    setTimeout(function () {
      $("#alertError").addClass("hide");
    }, 2000);
  }
  return valid;
}

function register() {
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputEmail = $("#txtFirstName").val();
  let inputPassword = $("#txtEmail").val();
  let inputCardNumber = $("#txtCardNumber").val();
  let inputAge = jQuery("#txtAge").val();
  let inputAddress = $("#txtAddress").val();
  let inputPhoneNumber = $("#txtPhoneNumber").val();
  let inputPayment = $("#txtPayment").val();
  let inputColor = $("#txtColor").val();

  //create theUser
  let theUser = new User(
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPassword,
    inputCardNumber,
    inputAge,
    inputAddress,
    inputPhoneNumber,
    inputPayment,
    inputColor
  );
  //validate the user
  if (isValid(theUser)) {
    saveUser(theUser); //this function is in the store manager
    $("input").val("");
  }

  //clear the inputs
  //   $("input").val(""); not working
}

function init() {
  console.log("Registration");
  //hook events
}
window.onload = init;
