const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event)=>{
    let valid = 1;
    let error_text = '';
    const name = document.querySelector("#full_name").value;
    console.log(name);
    if(name==''&& valid==1){
        error_text = 'Please enter your name';
        valid =0;
    }

    const email = document.querySelector("#email_address").value;
    console.log(email);
    if(email==''&& valid==1){
        error_text = 'Please enter your email address';
        valid =0;
    }

    const phone = document.querySelector("#phone_number").value;
    console.log(phone);
    if(phone==''&& valid==1){
        error_text = 'Please enter your Contact Number';
        valid =0;
    }
    
    const genderValue = document.getElementsByName('gendersel');
    let gender = '';
    for(let i = 0; i < genderValue.length; i++){
        if(genderValue[i].checked){
            gender = genderValue[i].value;
        }
    }
    console.log(gender);
    if(gender==''&& valid==1){
        error_text = 'Please select your gender';
        valid =0;
    }

    const address = document.querySelector("#full_address").value;
    console.log(address);

    const pin = document.querySelector("#inputZip").value;
    console.log(pin);
    if(pin==''&& valid==1){
        error_text = 'Please enter Zip Code';
        valid =0;
    }

    const csr = document.querySelector("#course").value;
    console.log(csr);
    if(csr=='Select Course'&& valid==1){
        error_text = 'Please select your course';
        valid =0;
    }
    
    const check= document.querySelector("#i_agree").checked?document.querySelector('#i_agree').value:'';
    console.log(check);
    if(check == '' && valid==1){
        error_text = 'Please accept the Terms and Conditions';
    }

    if(valid == 0 && error_text!=''){
        document.querySelector('.error_message').style.display='block';
        document.querySelector('.error_message').innerText = error_text;
        document.querySelector('.error_message').style.color ='yellow';
    }
    else{
        document.querySelector('.head').innerHTML= `Registration Info`;
        document.querySelector('.name').innerHTML= 'Name: '+name;
        document.querySelector('.email').innerHTML= 'Email: '+email;
        document.querySelector('.phone').innerHTML= 'Phone: '+phone;
        document.querySelector('.address').innerHTML= 'Address: '+address;
        document.querySelector('.gender').innerHTML= 'Gender: '+gender;
        document.querySelector('.csr').innerHTML= 'Course: '+csr;
        document.querySelector('.tnc').innerHTML= 'Terms & Conditions: '+check;
    }
    event.preventDefault();
}
);