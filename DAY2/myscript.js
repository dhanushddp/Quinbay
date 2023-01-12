function search(){
    var name = document.getElementById("name").value;
    var model = document.getElementById("modelno").value;
    var ram = document.getElementById("ram").value;
    var memory = document.getElementById("memory").value;
    var price=document.getElementById("price").value;
    var textToChangeBackTo = "Add Mobile Here!!!"

    if(name===""||model===""||ram===""||memory===""||price===""){
        window.alert("Please fill all the details");
    }else{
        buttonId = document.getElementById("additem");
        buttonId.textContent = "Mobile Added";
        setTimeout(function () { back(buttonId, textToChangeBackTo); }, 3000);
        function back(button, textToChangeBackTo) {
            button.textContent = textToChangeBackTo;
            document.getElementById("out").textContent = " ";
        }
        var details={

        }
  
        details.Name=name;
        details.Model=model;
        details.Ram=ram;
        details.Memory=memory;
        details.Price=price;
  
        console.log(details);
   
}
    

}