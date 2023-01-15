document.addEventListener("DOMContentLoaded", function () {
    var prod_list = [
        { image: "4.jpg", brand: "Apple", model: "iPhone 13", ram: "8GB", memory: "128GB", rating: "3.0", price: 60999 },
        { image: "1.jpg", brand: "Vivo", model: "Y 15", ram: "12GB", memory: "128GB", rating: "3.9", price: 64599 },
        { image: "3.jpg", brand: "Oppo", model: "Note 5", ram: "8GB", memory: "256GB", rating: "4.0", price: 30999 },
        { image: "1.jpg", brand: "Samsung", model: "Galaxy 13", ram: "8GB", memory: "64GB", rating: "4.0", price: 45999 },
        { image: "3.jpg", brand: "Apple", model: "iPhone 12", ram: "4GB", memory: "128GB", rating: "3.0", price: 44999 },
        { image: "4.jpg", brand: "Redmi", model: "Pixle 12", ram: "8GB", memory: "64GB", rating: "3.0", price: 28809 },
        { image: "2.jpg", brand: "Poco", model: "Note 13", ram: "12GB", memory: "128GB", rating: "5.0", price: 30999 },
        { image: "1.jpg", brand: "Vivo", model: "V 20", ram: "8GB", memory: "128GB", rating: "3.0", price: 35999 },
        { image: "1.jpg", brand: "Realme", model: "Hexa 13", ram: "8GB", memory: "64GB", rating: "3.0", price: 16000 },
        { image: "4.jpg", brand: "Oppo", model: "Note Pro", ram: "4GB", memory: "128GB", rating: "2.0", price: 40099 },
        { image: "2.jpg", brand: "Oneplus", model: "Pro max", ram: "8GB", memory: "256GB", rating: "3.0", price: 70999 }
    ]


    var quan = [];
    var count = 0;

    function displayTable(prod_list) {
        var table = document.getElementById('items');

        for (var i = 0; i < prod_list.length; ++i) {
            var pro = prod_list[i];

            var row = document.createElement('tr');

            var properties = ['image', 'brand', 'model', 'ram', 'memory', 'rating', 'price'];



            for (var j = 0; j < properties.length; ++j) {
                if (j == 0) {
                    var cell = document.createElement("td");
                    cell.style.border = 'solid 1px black';
                    cell.style["padding-top"] = "20px";

                    var x = document.createElement("IMG");
                    x.setAttribute("src", pro[properties[j]]);
                    x.setAttribute("width", "100px");
                    x.setAttribute("height", "200px");
                    cell.appendChild(x);
                    row.appendChild(cell);

                } else {
                    var cell = document.createElement('td');

                    cell.style.border = 'solid 1px black';
                    cell.style["padding-top"] = "20px";

                    cell.innerHTML = pro[properties[j]];

                    row.appendChild(cell);
                }
            }

            var d = document.createElement('td');
            d.style.border = 'solid 1px black';
            d.style["padding-top"] = "20px";

            var btn = document.createElement("BUTTON");
            btn.id = "btnid" + i;
            btn.className = "cartButtons";
            pro.buttonid = btn.id;

            console.log(pro);
            var txt = document.createTextNode("Add to cart");
            btn.appendChild(txt);
            d.appendChild(btn);

            row.appendChild(d);
            table.appendChild(row);
        }
    }


    function shop(unique, prod_list) {



        var table1 = document.getElementById('purchase');

        for (var k = 0; k < prod_list.length; ++k) {

            var cart = prod_list[k];

            var c = JSON.stringify(cart.buttonid);






            if (Object.is(unique, c)) {


                var plusbut = document.createElement("button");
                plusbut.id = "plus" + k;
                plusbut.className = "plusbuttons";
                var brea = document.createTextNode("   ");
                var subbutton = document.createElement("button");
                subbutton.id = "sub" + k;
                subbutton.className = "subbuttons";

                var plustxt = document.createTextNode("+");
                var subtxt = document.createTextNode("-");

                plusbut.appendChild(plustxt);
                subbutton.appendChild(subtxt);

                var prop = [cart.brand, cart.model, cart.price];
                var rowcart = document.createElement('tr');
                for (var l = 0; l < prop.length; ++l) {
                    var cartcell = document.createElement('td');
                    cartcell.style.border = 'solid 1px black';
                    cartcell.style["padding-top"] = "20px";
                    cartcell.innerHTML = prop[l];
                    rowcart.appendChild(cartcell);
                }

                var cartcell = document.createElement("td");
                var cartype = document.createElement("input");
                cartype.id = "input" + k;
                quan.push(cartype.id);
                cartcell.style.border = 'solid 1px black';
                cartcell.style["padding-top"] = "20px";
                cartype.type = "number";

                cartcell.appendChild(cartype);
                cartcell.appendChild(plusbut);
                cartcell.appendChild(brea);
                cartcell.appendChild(subbutton);
                rowcart.appendChild(cartcell);
                table1.appendChild(rowcart);
                document.getElementById(cartype.id).value = 1;
                count++;
                console.log(count);

            }


        }


    }

    function prod1() {
        var a = JSON.stringify(this.id);
        document.getElementById(this.id).disabled = true;
        document.getElementById(this.id).innerHTML = "Added";

        shop(a, prod_list);

    }

    displayTable(prod_list);

    var buttons = document.getElementsByClassName("cartButtons");

    var buttonPressed = e => {
        document.getElementById(e.target.id).addEventListener("click", prod1);
    }

    for (let e of buttons) {
        e.addEventListener("mouseover", buttonPressed);
    }

    function dis() {
        window.alert("Total products : " + count);
    }

    document.getElementById("out1").addEventListener("click", dis);

    function search() {
        var name = document.getElementById("name").value;
        var model = document.getElementById("modelno").value;
        var ram = document.getElementById("ram").value;
        var memory = document.getElementById("memory").value;
        var price = document.getElementById("price").value;
        var textToChangeBackTo = "Add Mobile Here!!!"

        console.log(name);
        console.log(model);
        console.log(ram);
        console.log(memory);
        console.log(price);

        if (name === "" || model === "" || ram === "" || memory === "" || price === "") {
            window.alert("Please fill all the details");

        } else {
             var buttonId = document.getElementById("additem");
            buttonId.textContent = "Mobile Added";
            setTimeout(function () { back(buttonId, textToChangeBackTo); }, 3000);
            function back(button, textToChangeBackTo) {
                button.textContent = textToChangeBackTo;
            }



            var details = {

            }

            details.Name = name;
            details.Model = model;
            details.Ram = ram;
            details.Memory = memory;
            details.Price = price;

            console.log(details);


        }
    }

    function searchbox(event) {
        var pro = document.getElementById("search").value;
        window.alert("You have searched " + pro);
    }

    document.getElementById("search_button").addEventListener('click', searchbox);
    document.getElementById("additem").addEventListener('click', search);
    // document.getElementById("add_to_cart1").addEventListener('click', shop);


  



})



// function addqu(adid){
    //       for(var w = 0;w<quan.length;++w){
    //         var c1 = adid.replace(/\D/g,'');
    //         if(c1===(quan[w].replace((/\D/g,'')))){
    //             document.getElementById(quan[w]).value+=1;
    //         }
    //       }
    // }

    // function add1(){
    //     console.log("dfghj");
    //     var ad = JSON.stringify(this.id);
    //     addqu(ad);
    // }







    // var plus_class = document.getElementsByClassName("plusbuttons");

    // var plpr = t => {
    //      console.log("fghj");
    //      document.getElementById(t.target.id).addEventListener("click",add);
    // }

    // for(let r of plus_class){
    //     r.addEventListener("click",plpr);
    // }

