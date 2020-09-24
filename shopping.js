// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },

  {
    id: 7,
    name: "Kancheepura Silk",
    size: "M",
    color: "Pinl with yellow",
    price: 2500,
    image: "product7.jpg",
    description: "Good looking Traditional Kanchipura silk",
  },

  {
    id: 8,
    name: "Red Top",
    size: "M",
    color: "Red",
    price: 1300,
    image: "product8.jpg",
    description: "Good looking Modern Dress",
  },

  {
    id: 9,
    name: "Couples Outfit",
    size: "M",
    color: "White and Grey",
    price: 3200,
    image: "product9.jpg",
    description: "For couples Matching Set",
  },

  {
    id: 10,
    name: "Yellow Top",
    size: "M",
    color: "Yellow",
    price: 1500,
    image: "product10.jpg",
    description: "Good looking, Best for Jeans",
  },

  {
    id: 11,
    name: "Court Suit",
    size: "L",
    color: "Grey",
    price: 2000,
    image: "product11.jpg",
    description: "Attractive Look",
  },

  {
    id: 12,
    name: "Kurta",
    size: "M",
    color: "Navy blue",
    price: 1500,
    image: "product12.jpg",
    description: "Good looking Seems like King",
  }
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="products/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="products/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search
let count=0;
function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });

}

function addToCart(id) {
  // getting the product
  let flag=0;
  let pro = getProductByID(products, id);
  cart.forEach(function(no){
     if(no.id==pro.id){ 
      alert("This Product is already in Cart");
      flag=1; 
     }
   })
  //   putting in cart
  if(flag==0){
    cart.push(pro);
    count++;
    document.getElementsByClassName("h")[0].innerHTML=`<h4>Cart (${count})</h4>`;
    displayProducts(cart, "cart");
  }
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  count--;
  document.getElementsByClassName("h")[0].innerHTML=`<h4>Cart (${count})</h4>`;
  displayProducts(cart, "cart");
}
function so(){
  let f=document.getElementsByClassName("modal")[0];
  f.style.display="block";
  copy(index);
}
function hide(event){
  if(event.target.className=="modal"){
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
}
function dynamicsort(property,order) {
  var sort_order = 1;
  if(order === "desc"){
      sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
      if(a[property] < b[property]){
              return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(a[property] > b[property]){
              return 1 * sort_order;
      // a and b are the same
      }else{
              return 0 * sort_order;
      }
  }
}
function one(){
  let newa=[];
  let max=document.getElementById("max").value;
  let min=document.getElementById("min").value;
  products.forEach(function(no){
    if(no.price<=max && no.price>=min){
      newa.push(no);
    }
  })
  displayProducts(newa);
  document.getElementById("max").value="";
  document.getElementById("min").value="";
}