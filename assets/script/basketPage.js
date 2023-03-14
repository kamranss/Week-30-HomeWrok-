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
            }
            


        let tableBody = document.getElementById("tableBody");
        let bodyTr = document.createElement("tr")
            bodyTr.innerHTML = `
            <tr>
                <th id = "number" scope="row"></th>
                <td><img src="${product.imgSRC}" alt="" width = "120" height = "120"></td>
                <td>${product.productName}</td>
                <td>${product.count}</td>
                <td>@mdo</td>
                <td><i id = "Icon-delete"class="fa-solid fa-trash" style="cursor: pointer;"></i></td>
            </tr>
          `
          
        tableBody.append(bodyTr);
        numarationforItems();
        DeleteFilesUsingIcon();
        



    })
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
    console.log(icondeleteBoxes);

    icondeleteBoxes.forEach(function (icondeleteBox) {

        icondeleteBox.addEventListener("click", function () {
            let colsestTd = icondeleteBox.closest("td");
            console.log(colsestTd);
            if (colsestTd) {
                let mainTr = colsestTd.parentElement;
                console.log(mainTr);
                let trPArent = mainTr.parentNode;
                console.log(trPArent);
                if (trPArent) {
                    mainTr.parentNode.removeChild(mainTr);
                }
            }

        
            let numbers = document.querySelectorAll("#number");
            console.log(numbers);

            if (!numbers.length > 0) {

                tHeadChildTr = document.querySelector(".trHead")

                tHeadChildTrParent = tHeadChildTr.parentNode; // issue

                tHeadChildTr.parentNode.removeChild(tHeadChildTr)

                // let deleteAllButton = document.querySelector(".Delete-all");
                // deleteAllButton.parentNode.removeChild(deleteAllButton);


            }

            numarationforItems();

        });


    })
}

// buttons.forEach(btn=>{
//     btn.addEventListener("click", function(){
//         let arr = JSON.parse(localStorage.getItem("basket"));

//         arr.array.forEach(element => {
            
//         });
//     })
// })


