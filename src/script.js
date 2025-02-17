document.querySelector("#addblue").addEventListener("click", function (){
    let objednani = document.createElement("p")
    
    objednani.textContent = "máte objednáno..."
    
    document.querySelector(".addcart").appendChild(objednani)
    
});
