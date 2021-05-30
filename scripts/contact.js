function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    var text;

    if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
      }
      

      if(email.indexOf("@") == -1 || email.length < 5){
        text = "Please Enter a valid Email";
        error_message.innerHTML = text;
        return false;
      }
      if(subject.length < 15){
        text = "Please Enter More Than 15 Characters in Subject";
        error_message.innerHTML = text;
        return false;
      }

      if(message.length <= 25){
        text = "Please Enter More Than 25 Characters in message";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
 

}




