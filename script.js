function onSubmit(){
    console.log('click')
    var email = document.getElementById('user').value
    var pass = document.getElementById('pass').value 

    console.log(email,pass)
    
    if(!email || !pass  ){
        alert('required fields are missing')
        return
    }

    var isValid = email.indexOf('@gmail.com')
    console.log(isValid)
    
    if(isValid == -1){
        alert('Wrong Email')
        return
    }

    if(email === 'minhajwahid@gmail.com' && pass === 'admin123'){
        alert('Login Successfully')
        window.location.href = './home.html'
    }else{
        alert('invalid email and password')
    }
}

function iconChange(event) {
    
    
    var passIcon = document.getElementById("pass");

    if (passIcon.type === "password") {
        passIcon.type = "text"
        event.classList.remove("ri-lock-password-fill")
        event.classList.add("ri-lock-unlock-line")
        
    } else {
        passIcon.type = "password"
        event.classList.remove("ri-lock-unlock-line")
        event.classList.add("ri-lock-password-fill")
        
    }
} 