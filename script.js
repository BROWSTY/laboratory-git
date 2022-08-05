const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $btnPass = document.querySelector('.pass-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');
      $passWord  = document.querySelector('.password');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
        $passWord.classList.toggle('active')
    }
});
