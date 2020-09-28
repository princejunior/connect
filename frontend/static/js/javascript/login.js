function getValues(id) {
  return document.getElementById(id).value;
}

function login() {
  console.log('login function called');

  const email = getValues('email');
  const password = getValues('password');
  console.log(email);
  console.log(password);
}

function changeForm(form) {
  if (form === 0) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'flex';
  }
}
