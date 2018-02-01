var hourNow = new Date().getHours();
var greeting="";

if (hourNow > 18) {
    greeting= "Good evening";
   } else if (hourNow > 12) { 
   	greeting = "Good afternoon";
   }else if (hourNow > 0){ 
   	greeting = "Good morning";
   }else {
   greeting = "Don't stay up late";
   }
var customername = "Blaise";
// var price = 10;
// var quantity = 3;

var products = [
    "Pizza",
    "Naan",
    "Sourdough",
    "Foccacia",
    "iPhone X",
];
var price = [40, 10, 20, 80, 1000];
var percent = 0.75;
var productsText = "";
var productsElement = document.getElementById("product-list");
var totalPrice = price[0]+price[1]+price[2]+price[3]+price[4];
var discountPrice=percent*totalPrice;
 for(var i = 0; i < 5; i++){
            productsText += "<li class='list-group-item'>" +products[i] + "<span class='badge'>$" +price[i] + "</li>";
        }
// productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='bridge'>$" +
//   price[0] + "</li>";
// productsText = productsText + "<li class='list-group-item'>" + products[1] + "<span class='bridge'>$" +
//     price[1] + "</li>";
// productsText = productsText + "<li class='list-group-item'>" + products[2] + "<span class='bridge'>$" +
//     price[2] + "</li>";
// productsText = productsText + "<li class='list-group-item'>" + products[3] + "<span class='bridge'>$" +
//     price[3] + "</li>";
// productsText = productsText + "<li class='list-group-item'>" + products[4] + "<span class='bridge'>$" +
//     price[4] + "</li>";
productsElement.innerHTML = productsText;


document.getElementById("greeting").innerHTML = greeting;
document.getElementById("customer-name").innerHTML = "Blaise";
document.getElementById("price").innerHTML = "$" + discountPrice + "<span class='badge'>25% off";