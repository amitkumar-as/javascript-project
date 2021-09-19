var productData = {
    "id": "8",
    "name": "Unisex Black Galaxy Fit Fitness Band",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/74a60845-202d-4cea-9531-e16931bd994a1561362162628-Samsung-Galaxy-Fit-4801561362161527-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/eb5f1aca-1b71-49fa-9c41-aba51f6b01941561362162569-Samsung-Galaxy-Fit-4801561362161527-4.jpg"
    ],
    "description": "Keep up your routine for even longer. With plenty of power to last throughout your daily workouts, you can pack in those longer hours to reach your fitness goals. What's more, you won't have to worry about disruptive battery discharge when tracking your activity.",
    "size": [
      1,
      1,
      1,
      1,
      1
    ],
    "isAccessory": true,
    "brand": "Samsung",
    "price": 9990
  }
var X=document.getElementById("main")

  var section = document.createElement("div");
  section.className = "section-total";

  var leftColown= document.createElement("div");
  leftColown.className = "left-colown";

  var leftcolownimg = document.createElement("img");
  leftcolownimg.className = "left-image"
  leftcolownimg.src = productData.photos[0];

  leftColown.appendChild(leftcolownimg);

  var righttColown = document.createElement("div");
  righttColown.className = "right-colown";

  var productdiscription = document.createElement("div");
  productdiscription.className = "product";


  var nameofshirt = document.createElement("h1");
  nameofshirt.innerHTML=productData.name;
  nameofshirt.className = "name";

  var brandofshirt = document.createElement("h4");
  brandofshirt.innerHTML=productData.brand;
  brandofshirt.className = "brand";


  var priceofshirt= document.createElement("h3");
  var value=productData.price;

  var colorcont=document.createElement("span");
  colorcont.innerHTML=value;
  colorcont.className="color-change";

  
  priceofshirt.innerHTML="Price: Rs"+" ";
  priceofshirt.className= "price";
  priceofshirt.appendChild(colorcont);
  
 


  var discriptionmain = document.createElement("div");
  discriptionmain.className = "discription-main";


 var discriptionheading= document.createElement("h3");
      discriptionheading.innerHTML="Description"
      discriptionheading.className = "discription-heading";

  var discriptioninfo= document.createElement("h3");
  discriptioninfo.innerHTML=productData.description;
  discriptioninfo.className = "discription-info";

  var productpreview = document.createElement("div");
  productpreview.className = "product-preview";
  


var productpreviewheading= document.createElement("h3");
productpreviewheading.innerHTML="Product Preview"
productpreviewheading.className = "product-preview-heading";

var productimg= document.createElement("div");
productimg.className = "product-img";

var previewImage1 = document.createElement("img");
previewImage1.className="preview-image"
previewImage1.src = productData.photos[0];
previewImage1.style.border="2px solid #009688"


var previewImage2 = document.createElement("img");
previewImage2.className="preview-image"
previewImage2.src = productData.photos[1];

var previewImage3 = document.createElement("img");
previewImage3.className = "preview-image"
previewImage3.src = productData.photos[2];

var previewImage4 = document.createElement("img");
previewImage4.className = "preview-image"
previewImage4.src = productData.photos[3];

var previewImage5 = document.createElement("img");
previewImage5.className = "preview-image"
previewImage5.src = productData.photos[4];

X.appendChild(section);
section.appendChild(leftColown);
section.appendChild(righttColown);
righttColown.appendChild(productdiscription);
productdiscription.appendChild(nameofshirt);
productdiscription.appendChild(brandofshirt);
productdiscription.appendChild(priceofshirt);
productdiscription.appendChild(discriptionmain);
discriptionmain.appendChild(discriptionheading);
discriptionmain.appendChild(discriptioninfo);
productdiscription.appendChild(productpreview);
productpreview.appendChild(productpreviewheading);
productpreview.appendChild(productimg);
productimg.appendChild(previewImage1);
productimg.appendChild(previewImage2);
productimg.appendChild(previewImage3);
productimg.appendChild(previewImage4);
productimg.appendChild(previewImage5);
previewImage1.addEventListener("click",function(){leftcolownimg.src = productData.photos[0];
    })
previewImage2.addEventListener("click",function(){leftcolownimg.src = productData.photos[1];
    })
previewImage3.addEventListener("click",function(){leftcolownimg.src = productData.photos[2];
    })
previewImage4.addEventListener("click",function(){leftcolownimg.src = productData.photos[3];
    })
previewImage5.addEventListener("click",function(){leftcolownimg.src = productData.photos[4];
    })

    previewImage1.addEventListener("click",function(){ previewImage1.style.border="2px solid #009688";previewImage2.style.border="none";previewImage3.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none"})
    previewImage2.addEventListener("click",function(){ previewImage2.style.border="2px solid #009688";previewImage3.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none";previewImage1.style.border="none"})
    previewImage3.addEventListener("click",function(){ previewImage3.style.border="2px solid #009688";previewImage1.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none";previewImage2.style.border="none"})
    previewImage4.addEventListener("click",function(){ previewImage4.style.border="2px solid #009688";previewImage3.style.border="none";previewImage1.style.border="none";previewImage5.style.border="none";previewImage2.style.border="none"})
    previewImage5.addEventListener("click",function(){ previewImage5.style.border="2px solid #009688";previewImage3.style.border="none";previewImage4.style.border="none";previewImage1.style.border="none";previewImage2.style.border="none"})

    var cart=document.createElement("button")
    cart.innerHTML="Add to Cart"
    cart.className="cartcont"
    righttColown.appendChild(cart);


    var mainBody = document.getElementById("main-body")

    
    cart.onclick = function() {
      var card = document.createElement("div");
      card.style.width = "600px"
      card.style.height = "400px"
     card.style.backgroundColor = "white"
     card.style.transform = "translate(-20px , -485px)"
      var img = document.createElement("img")
     
     img.src = "https://www.pngitem.com/pimgs/m/508-5084702_checkmark-circle-status-icon-transparent-hd-png-download.png"

img.style.width = "80px"
img.style.height = "80px"
img.style.borderRadius = "50%"

card.appendChild(img)
var text = document.createElement("h3")
text.innerText = "Order Placed Successfully!!"
text.style.color = "black"
var textOne = document.createElement("p")
textOne.innerText = "We have sent you an email with the order details"
textOne.style.color = "black"
card.appendChild(text)
card.appendChild(textOne)
mainBody,this.appendChild(card)

    }

