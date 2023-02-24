let signUp = document.querySelector('.logup');
let logIn = document.querySelector('.signup');


let logInForm = document.querySelector('.loginup-form')
let signUpForm = document.querySelector('.signup-form')
let loginuser=document.querySelector("#logginup-form")
let signinuser=document.querySelector('#signupp-form')


signUp.addEventListener('click',function(){
   
    logInForm.style.display = 'none';
    signUpForm.style.display = 'block';
})

logIn.addEventListener('click',function(){
    logInForm.style.display = 'block';
    signUpForm.style.display = 'none';
})


let userDB = JSON.parse(localStorage.getItem('users'))||[];

signinuser.addEventListener('submit',function(e){
    
  e.preventDefault()
    let formData = {
        name:  signinuser.sName.value,
        email:  signinuser.sEmail.value,
        password:  signinuser.sPassword.value
    }
  
    if( signinuser.sPassword.value!= signinuser.sPassword1.value){
        alert('passwords mismatch!')
    }
    else{
        let count = 0;
        userDB.forEach(function(el){
            if(el.email == formData.email){
                count++;
            }
        })
        if(count>0){
            alert('user already registered!')
        }
        else{
       
            userDB.push(formData);
       
            localStorage.setItem('users',JSON.stringify(userDB));
            alert('registered successfully!')

        }
    }
})

loginuser.addEventListener('submit',function(event){
    // prevent default
    event.preventDefault();
            userDB.forEach(function(el){
            if(el.email == loginuser.lEmail.value){
                if(el.password===loginuser.lPassword.value){
                    alert("login successful!");
                    window.location.assign('./index1.html');
                }
                else{
                    alert('wrong crendentials!')
                }
            }else{
                alert("User email is not found")
            }
        })
})