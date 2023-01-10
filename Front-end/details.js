document.addEventListener("DOMContentLoaded",function(){
    function printM(){
        var name = document.getElementById("name").value;
        var city = document.getElementById("city").value;
        var contact = document.getElementById("contact").value;
        var query = document.getElementById("feedback").value;
        if(name===""||city===""||contact===""||query===""){
            document.getElementById("content").innerHTML="Please Fill all the details";
        }else{
        var message = "Thank you for your valuable feedback<br>"+name+"!! "+" We will be contact u soon ";
        
        document.getElementById("content").innerHTML=message;
        document.getElementById("Namer").innerHTML="Name :" + name;
        document.getElementById("cityr").innerHTML="City "+city;
        document.getElementById("phone").innerHTML="Contact "+contact;
        document.getElementById("mssg").innerHTML=query;
        document.getElementById("show").style.visibility='visible';
    }}
    document.getElementById("submit").addEventListener("click",printM);
})   
 