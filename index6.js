var productData = {
    "id": "6",
        "name": "Unisex Silver-Toned Series 3 Smart Watch",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
        "photos": [
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/dd1e37da-0de2-417f-abd2-6df8996040eb1558948536526-Apple-Unisex-Smart-Watches-1441558948536225-2.jpg",
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/9dfea59a-4d94-43bd-a140-77b58e42e8971558948536512-Apple-Unisex-Smart-Watches-1441558948536225-3.jpg"
        ],
        "description": "Low and high heart rate notifications. Emergency SOS. New Breathe watch faces. Automatic workout detection. New yoga and hiking workouts. Advanced features for runners like cadence and pace alerts. New head-to-head competitions. Activity sharing with friends. Personalized coaching. Monthly challenges and achievement awards. Walkie-Talkie, make phone calls, and send messages. Listen to Apple Music and Apple Podcasts. Use Siri in all-new ways. Silver aluminum case. Built-in GPS, GLONASS, Galileo, and QZSS. S3 with dual-core processor. W2 Apple wireless chip. Barometric altimeter Capacity 8GB. Optical heart sensor. 1 Year Manufacture Warranty",
        "size": [
          1,
          1,
          1,
          1,
          1,
          1
        ],
        "isAccessory": true,
        "brand": "Apple",
        "price": 31999
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
    
    
    