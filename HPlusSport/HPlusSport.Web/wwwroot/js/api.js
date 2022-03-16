var url = "https://localhost:44315/products";

var productsList = document.getElementById("products-list");
if (productsList) {
    fetch(url)
        .then(response => reponse.json())
        .then(data => showProducts(data))
        .catch(ex => {
            alert("Something went wrong ...");
            console.log(ex);
        });
}

function showProducts(products) {
    products.forEach(product => {
        let li = document.createElement("li");
        let text = `${producname} ($${product.price})`;
        li.appendChild(documencreateTextNode(text));
        productsList.appendChild(li);
        productsList.appendChild(li);
    })
}