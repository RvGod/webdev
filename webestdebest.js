function scanButton(){
  const barcode1 = parseInt(document.getElementById("barcode1").value);
  let quantity1 = document.getElementById("quantity1").value;

  switch (barcode1){
  case 10101:
  price1 = 100;
  document.getElementById("item1").textContent = "sabaw";
  document.getElementById("price1").textContent = "100"; 
  break;

  case 20202:
  price1 = 200* quantity1;
  document.getElementById("item1").textContent = "lanchaw";
  document.getElementById("price1").textContent = "200"; 
  break;

  case 30303:
  price1 = 300 * quantity1;
  document.getElementById("item1").textContent = "lugaw ";
  document.getElementById("price1").textContent = "300"; 
  break;

  case 40404:
  price1 = 1000 * quantity1;
  document.getElementById("item1").textContent = "lugaw with rice";
  document.getElementById("price1").textContent = "1000"; 
  break;

  case 50505:
  price1 = 100000 * quantity1;
  document.getElementById("item1").textContent = "lechon iro";
  document.getElementById("price1").textContent = "100000"; 
  break;

  default:
  price = 0;
  document.getElementById("item1").textContent = "invalid";
  document.getElementById("price1").textContent = "invalid"; 
  break;
   }
   return price1;
  }

  function scanButton2(){
  const barcode2 = parseInt(document.getElementById("barcode2").value);
  let quantity2 = document.getElementById("quantity2").value;

  switch (barcode2){
  case 10101:
  price2 = 100 * quantity2;
  document.getElementById("item2").textContent = "sabaw";
  document.getElementById("price2").textContent = "100"; 
  break;

  case 20202:
  price2 = 200 * quantity2;
  document.getElementById("item2").textContent = "lanchaw";
  document.getElementById("price2").textContent = "200"; 
  break;

  case 30303:
  price2 = 300 * quantity2;
  document.getElementById("item2").textContent = "lugaw ";
  document.getElementById("price2").textContent = "300"; 
  break;

  case 40404:
  price2 = 1000 * quantity2;
  document.getElementById("item2").textContent = "lugaw with rice";
  document.getElementById("price2").textContent = "1000"; 
  break;

  case 50505:
  price2 = 100000 * quantity2;
  document.getElementById("item2").textContent = "lechon iro";
  document.getElementById("price2").textContent = "100000"; 
  break;

  default:
  price2 = 0;
  document.getElementById("item2").textContent = "invalid";
  document.getElementById("price2").textContent = "invalid"; 
  break;
   }
   return price2;
  }

  function scanButton3(){
  const barcode3 = parseInt(document.getElementById("barcode3").value);
  let quantity3 = document.getElementById("quantity3").value;

  switch (barcode3){
  case 10101:
  price3 = 100 * quantity3;
  document.getElementById("item3").textContent = "sabaw";
  document.getElementById("price3").textContent = "100"; 
  break;

  case 20202:
  price3 = 200 * quantity3;
  document.getElementById("item3").textContent = "lanchaw";
  document.getElementById("price3").textContent = "200"; 
  break;

  case 30303:
  price3 = 300 * quantity3;
  document.getElementById("item3").textContent = "lugaw ";
  document.getElementById("price3").textContent = "300"; 
  break;

  case 40404:
  price3 = 1000 * quantity3;
  document.getElementById("item3").textContent = "lugaw with rice";
  document.getElementById("price3").textContent = "1000"; 
  break;

  case 50505:
  price3 = 100000 * quantity3;
  document.getElementById("item3").textContent = "lechon iro";
  document.getElementById("price3").textContent = "100000"; 
  break;

  default:
  price3 = 0;
  document.getElementById("item3").textContent = "invalid";
  document.getElementById("price3").textContent = "invalid"; 
  break;
   }
   return price3;
  }


  function totalButton(){
    const price1 = scanButton();
    const price2 = scanButton2();
    const price3 = scanButton3();

    const sum = price1 + price2 + price3;
    const discount = sum - (sum * .10);

    if(sum >= 1000){
        document.getElementById("total").textContent = `${discount}`;
    }else{
        document.getElementById("total").textContent = `${sum}`;
    }
  }

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
