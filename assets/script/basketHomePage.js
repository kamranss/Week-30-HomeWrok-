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

        Animate(e)
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


function Animate(e){
    let parent = e.target.parentNode.parentNode
            console.log(parent);
            let image = parent.querySelector("img");
            console.log(image);
            let span = document.createElement("span");
            span.classList.add("image-mover");
            parent.insertBefore(span, parent.lastElementChild);
            
            let s_image = image.cloneNode(true);
            span.appendChild(s_image);
//             span.classList.add("active")


        
//             setTimeout(()=>{
//                 span.classList.remove("active");
//                 span.removeChild(s_image);
//             },500)
}