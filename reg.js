function form_validation(){
    var uid=document.form_1.uid;
    var pass=document.form_1.password;
    var name=document.form_1.name;
    var country=document.form_1.country;
    var email=document.form_1.email;
    var sex=document.form_1.sex;

    if(uid_valid(uid,5,7)){
        if(pass_valid(pass,7,12)){
            if(name_valid(name)){
                if(cntry_validation(country)){
                    if(email_valid(email)){
                        if(sex_valid(sex)){
                            if(lan_valid()){
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
} 
//valid user name
function uid_valid(uid,min,max){
    var len=uid.value.length;
    if(len==0||len>max||len<=min){
        alert("User Id should not be empty and length be between "+min+" to"+max);
        return false;
    }
    else{
        return true;
    }
}
//valid password
function pass_valid(pass,min,max){
    var len=pass.value.length;
    if(len==0||len>max||len<=min){
        alert("Password should not be empty and length be between "+min+" to"+max);
        return false;
    }
    else{
        return true;
    }
}
//valid name
function name_valid(name){
    var name_format=/^[A-Za-z]+$/;
    if(name.value.match(name_format)){
        return true;
    }
    else{
        alert("Name should not be empty and Username must have alphabet characters only");
        return false; 
    }
}

//country validation
function cntry_validation(country){
    if(country.value=="default"){
        alert("Select your country from the list");
        return false;
    }
    else{
        return true;
    }
}
//email validation
function email_valid(email){
    var e_format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(e_format)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
}
//sex validation
function sex_valid(sex){
    x=0;
    if(sex[0].checked){
        x++;
    }
    if(sex[1].checked){
        x++;
    }
    if(x==0){
        alert("Select Male/Female");
        return false;
    }
    else{
        return true;
    }
}
//check boxes validation
function lan_valid(){
    var check=false;
    if(document.getElementById("en").checked){
        check=true;
    }
    else if(document.getElementById("nen").checked){
        check=true;
    }
    if(check){
        return true;
    }
    else{
        alert("Please Choose your language");
        return false;
    }
}