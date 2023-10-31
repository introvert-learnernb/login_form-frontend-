console.log('Javascript working....');
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let loginform = document.getElementById('login');
let registerform = document.getElementById('register');


function login(){
    console.log('login button clicked...');
    loginform.style.left = "4px";
    registerform.style.right = "-520px";
    loginBtn.className += ' white-btn';
    registerBtn.className = 'btn';
    loginform.style.opacity = 1;
    registerform.style.opacity = 0;
}

function register(){
    loginform.style.left = "-510px";
    registerform.style.right = "5px";
    loginBtn.className = 'btn';
    registerBtn.className += ' white-btn';
    loginform.style.opacity = 0;
    registerform.style.opacity = 1;
}

function myMenuFunction(){
    console.log('Menu bar is clicked...');
    let navMenu = document.getElementById('navMenu');

    if(navMenu.className === 'nav-menu'){
        navMenu.className += ' responsive';
    }else{
        navMenu.className = 'nav-menu';
    }
}



