function validation(){
  var type = document.form_log.type;
  var uname = document.form_log.u_name;

  type_valid(type)
}
function type_valid(type){
    if(type.value=="default"){
        alert("Select your type from the list");
        return false;
    }
    else{
        return true;
    }
}