let mainObject = document.getElementById("mainObject");
let boxProducto = document.getElementById("div");

mainObject.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-Producto");

let boxImgProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);

let boxInfoProducto = document.createElement("div");
boxProducto.appendChild(boxInfoProducto);

let imgProduct = document.createElement("img");
boxImgProducto.appendChild(imgProducto);
imgProducto.setAttribute("src", "img/ssdnv2.png")
imgProduct.setAttribute("class", "img-producto")