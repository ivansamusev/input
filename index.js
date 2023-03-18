
const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');

function validate() {
  if (username.value === '' || password.value === '') {
      console.log('Заповніть поля');
     if (username.value === '') {
       username.style.borderColor = "red";
     }
     if (password.value === '') {
       password.style.borderColor = "red";
     }
  } else {
      console.log('Інформація відправлена');

  }
}

submitBtn.addEventListener('click', validate);
