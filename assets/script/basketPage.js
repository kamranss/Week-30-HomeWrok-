// let buttons = document.querySelectorAll(".btn-primary");


if (localStorage.getItem("basket") != null) {
    
    let productList = JSON.parse(localStorage.getItem("basket"));
    productList.forEach(product=>{

        let tableHead = document.getElementById("tableHead");
        let headTr = document.createElement("tr");
            if (tableHead.innerText == "") {
                headTr.innerHTML = `
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
                `
                tableHead.append(headTr);
                let table = document.querySelector(".table");
                let totalPrice =0
                productList.forEach(p =>{
                    totalPrice+= product.price.slice(0,product.price.length-1) * product.count
                })
                // ${product.price.slice(0,product.price.length-1)}
                let span = document.createElement("span");
                span.classList.add("total-price")
                span.innerHTML = `<span class="d-flex justify-content-center">Total Price</span><span class="d-flex justify-content-center"> ${totalPrice} $<br></span>`
                table.append(span)
                

            }
            


        let tableBody = document.getElementById("tableBody");
        let bodyTr = document.createElement("tr")
            bodyTr.innerHTML = `
            <tr>
                <th id = "number" scope="row"></th>
                <td><img src="${product.imgSRC}" alt="" width = "120" height = "120"></td>
                <td id = "productName">${product.productName}</td>
                <td><i id = "decrement" class="fa-solid fa-circle-minus"></i> <span id = "count">${product.count}</span> <i id = "increment" class="fa-solid fa-circle-plus" ></i></td>
                <td>${product.price}</td>
                <td><i id = "Icon-delete"class="fa-solid fa-trash" style="cursor: pointer;"></i></td>
            </tr>
          `
          
        tableBody.append(bodyTr);
        numarationforItems();
        DeleteFilesUsingIcon();

    })
    decrementIcon();
    incrementIcon();
    
}



function numarationforItems() {
    let numbers = document.querySelectorAll("#number");
    let temp = 0;
    numbers.forEach(function (number) {

        temp++;
        number.innerText = temp;
    })
}


function DeleteFilesUsingIcon(){
    let icondeleteBoxes = document.querySelectorAll("#Icon-delete");

    icondeleteBoxes.forEach(function (icondeleteBox) {

        icondeleteBox.addEventListener("click", function () {
            let colsestTd = icondeleteBox.closest("td");
            console.log(colsestTd);
            if (colsestTd) {
                let mainTr = colsestTd.parentElement;
                console.log(mainTr);
                let tBody = mainTr.parentNode;
                console.log(tBody);
                if (tBody) {


                    let productName = icondeleteBox.closest("td").previousElementSibling.previousElementSibling.previousElementSibling.innerText
                    console.log(typeof(productName));
                    let arr = JSON.parse(localStorage.getItem("basket"));
                    console.log(arr);
                    let existProduct = arr.find(product => product.productName == productName);
                    console.log(existProduct);
                    if (existProduct != undefined) {
                        let newArr = arr.filter(product =>  product.productName != productName);
                        localStorage.setItem("basket", JSON.stringify(newArr));
                    }
                    // Swal.fire({
                    //     title: 'Do you want to save the changes?',
                    //     showDenyButton: true,
                    //     showCancelButton: true,
                    //     confirmButtonText: 'Save',
                    //     denyButtonText: `Don't save`,
                    //   }).then((result) => {
                    //     /* Read more about isConfirmed, isDenied below */
                    //     if (result.isConfirmed) {
                    //       Swal.fire('Saved!', '', 'success')
                    //     } else if (result.isDenied) {
                    //       Swal.fire('Changes are not saved', '', 'info')
                    //     }
                    //   })
                    
                    mainTr.parentNode.removeChild(mainTr);

                }
            }

        
            let numbers = document.querySelectorAll("#number");
            console.log(numbers);

            if (!numbers.length > 0) {

                tHeadChildTr = document.querySelector(".trHead");

                tHeadChildTrParent = tHeadChildTr.parentNode; // issue

                tHeadChildTr.parentNode.removeChild(tHeadChildTr);

            }

            numarationforItems();
            

        });


    })
}


function decrementIcon (){

    decrementIcons = document.querySelectorAll("#decrement");

    decrementIcons.forEach(function(dIcon){
        dIcon.addEventListener("click", function (){
          
            let productName = dIcon.parentNode.previousElementSibling.innerText;
            console.log(productName);
            let arr = JSON.parse(localStorage.getItem("basket"));
            let newArr = arr.find(p => p.productName == productName)
            console.log(newArr);

            if (newArr.count >=2) {
                newArr.count--;
                dIcon.nextElementSibling.innerText = newArr.count
                localStorage.setItem("basket", JSON.stringify(arr))

            }  

        } )

    })

}

function incrementIcon (){

    incrementIcons = document.querySelectorAll("#increment");

    incrementIcons.forEach(function(iIcon){
        iIcon.addEventListener("click", function (){
          
            let productName = iIcon.parentNode.previousElementSibling.innerText;
            console.log(productName);
            let arr = JSON.parse(localStorage.getItem("basket"));
            let newArr = arr.find(p => p.productName == productName)
            console.log(newArr);

            if (newArr.count >0) {
                newArr.count++;
                iIcon.previousElementSibling.innerText = newArr.count
                localStorage.setItem("basket", JSON.stringify(arr))

            }  

        } )

    })

}

