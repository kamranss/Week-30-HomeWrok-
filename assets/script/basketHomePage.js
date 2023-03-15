let buttons = document.querySelectorAll(".btn-primary");
let basketCount = document.getElementById("basketCount");

basketCountCalculator();

buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault();
        let id = btn.parentNode.getAttribute("data-id");
        imgSRC = btn.parentNode.previousElementSibling.getAttribute("src");
        productName = btn.parentNode.firstElementChild.innerText
        price = btn.nextElementSibling.innerText

        console.log(id);

        if (localStorage.getItem("basket") == null) {
            
            let arr = []

            arr.push({
                id: id,
                imgSRC: imgSRC,
                productName: productName,
                price:price,
                count: 1
            })

            localStorage.setItem("basket", JSON.stringify(arr));
            

        }
        else{

            let arr = JSON.parse(localStorage.getItem("basket"))
            
            let existProduct = arr.find(product => product.id == id);
            if (existProduct == undefined) {
                arr.push({
                    id: id,
                    imgSRC: imgSRC,
                    productName: productName,
                    price:price,
                    count: 1
                })

            
            }
            else{
                existProduct.count++;
            }

            localStorage.setItem("basket", JSON.stringify(arr));
        }

        basketCountCalculator();
    
        
    })
})


function basketCountCalculator(){
    if (localStorage.getItem("basket") != null) {
        let arr =  JSON.parse(localStorage.getItem("basket"));
        basketCount.innerText = arr.length;
    }
}