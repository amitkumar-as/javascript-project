var productData = {
    "id": "7",
        "name": "Unisex Black & Green Reflex 2.0 Smart Band",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
        "photos": [
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/1d9bda95-b63e-4312-bbfa-c25b377c96c21550920383126-2.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/2261262d-8f2f-4451-9584-9d0cb90e48cf1550920383155-3.jpg"
        ],
        "description": "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!",
        "size": [
          1,
          1,
          1,
          1,
          1
        ],
        "isAccessory": true,
        "brand": "Fastrack",
        "price": 1999
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
    
    