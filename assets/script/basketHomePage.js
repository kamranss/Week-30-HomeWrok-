let buttons = document.querySelectorAll(".btn-primary");


buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        let id = btn.parentNode.getAttribute("data-id");
        imgSRC = btn.parentNode.previousElementSibling.getAttribute("src");
        productName = btn.parentNode.firstElementChild.innerText
        price = btn.nextElementSibling.innerText

        console.log(id);

        if (localStorage.getItem("basket") != null) {
            getArr = JSON.parse(localStorage.getItem("basket"))

            getArr.push({
                id: id,
                imgSRC: imgSRC,
                productName: productName,
                price:price,
                count: 1
            })

            localStorage.setItem("basket", JSON.stringify(getArr));
            console.log(getArr);
        }
        else{

            let arr =[];
        
        arr.push({
            id: id,
            imgSRC: imgSRC,
            productName: productName,
            price:price,
            count: 1
        })
    
        
        localStorage.setItem("basket", JSON.stringify(arr));

        }
        
        
    })
})