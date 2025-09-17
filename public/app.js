const tbody = document.querySelector("tbody");

document.addEventListener('DOMContentLoaded', async ()=>{
    const data = await fetch("http://localhost:3005/api/v1/products");
    const products = await data.json();

    products.forEach(products => {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${products.ref}</th>
                <td>${products.name}</td>
                <td>
                    <button class="btn btn-sm btn-warning">edit</button>
                    <button class="btn btn-sm btn-danger">destroy</button>
                </td>
            </tr>
        `
    });
})