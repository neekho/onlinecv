function email_validate(email) {
    // email address
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (!regMail.test(email)) 
        document.getElementById("status").innerHTML    = "<span class='warning'>Invalid Email</span>";

    else 
        document.getElementById("status").innerHTML    = "<span class='warning'>Correct Email Format</span>";
        
    

}

function clearFields() {

    let btnClear = document.querySelector('#submit_button');
    let inputts = document.querySelectorAll('.form-control');

   

    btnClear.addEventListener('click', () => {
    inputts.forEach(input => input.value = '');


    alert('Form Submitted');
    document.getElementById("status").innerHTML    = "<span class='warning'></span>";
})



  

}