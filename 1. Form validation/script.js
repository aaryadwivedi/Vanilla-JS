//Simple JS

const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
//functions
function showError(input, message)
{
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input)
{
    const formControl =input.parentElement;
    formControl.className='form-control success'
}
function checkEmail(input)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value))
    {
        showSuccess(input);
    }
    else{
        showError(input,'Email is Invalid.');
    }
}
function getFieldName(input)
{
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkRequired(inputArr)
{
    inputArr.forEach(function(input)
    {
        if(input.value.trim()==='')
        {
            showError(input, `${getFieldName(input)} is Required.`)
        }
        else{
            showSuccess(input);
        }
    })
}
function checkLength(input,min,max)
{
    if(input.value.length <min)
        showError(input,`${getFieldName(input)} must be at least ${min} characters.`);
    else if(input.value.length>max)
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    else
        showSuccess(input);
}
function checkPassword(input1, input2)
{
    if(input1.value!=input2.value)
    {
        showError(input2,"Passwords do not match.")
        if(input2.value.trim()==='')
        {
            showError(input2,"Password is required.")
        }
    }
    else
    {
        showSuccess(input2);
    }
}
//event listeners
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    console.log(username.value);
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,4,16);
    checkPassword(password,password2);
    checkEmail(email)


    /*if(username.value ==='')
        showError(username,'Username is required');
    else
        showSuccess(username);
    console.log(email.value);
    if(email.value ==='')
        showError(email,'Email is required');
    else if(!isValidEmail(email.value))
        showError(email,'Email is not valid');
    else
        showSuccess(email);
    console.log(password.value);
    if(password.value ==='')
        showError(password,'Password is required');
    else
        showSuccess(password);
    console.log(password2.value);
    if(password2.value ==='')
        showError(password2,'Password 2 is required');
    else
        showSuccess(password2);*/
})

