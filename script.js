// DROPDOWN MENU

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector(".nav-bg");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

// CHANGING AMOUNT

const numberInput = document.querySelector("#number");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");

minusBtn.addEventListener("click", () => {
  if (numberInput.value <= 0) {
    numberInput.value === 0;
  } else {
    numberInput.value--;
  }
});

plusBtn.addEventListener("click", () => {
  numberInput.value++;
});

// CART MODAL

const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart_modal");
const cartBadge = document.createElement("span");

cartBtn.addEventListener("click", () => {
  cartModal.classList.toggle("open");
});

// ADDING ITEM TO CART

const addBtn = document.querySelector("#add-btn");
const cartItems = document.querySelector(".cart_items");
const productNameValue = document.querySelector(".product-name");
const currentPrice = document.querySelector(".price");

// CREATING ORDER DETAILS ELEMENT

const createOrderDetailsElement = () => {
  const orderDetails = document.createElement("div");
  orderDetails.classList.add("order-details");

  const productThumbnail = document.createElement("img");
  productThumbnail.src = "images/image-product-1-thumbnail.jpg";
  productThumbnail.classList.add("product-thumbnail");

  const productNameAndValue = document.createElement("div");
  productNameAndValue.classList.add("product_name-and-value");

  const productName = document.createElement("p");
  productName.innerText = productNameValue.innerHTML;

  const totalValue = document.createElement("span");
  totalValue.classList.add("total-value");
  const a = currentPrice.innerHTML.replace("$", "");
  const result = parseFloat(a).toFixed(2) * numberInput.value;

  totalValue.innerText = `$${result.toFixed(2)}`;

  const productValue = document.createElement("p");
  productValue.innerText = `${currentPrice.innerHTML} x ${numberInput.value} `;
  productValue.appendChild(totalValue);

  const deleteProduct = document.createElement("img");
  deleteProduct.src = "images/icon-delete.svg";
  deleteProduct.classList.add("delete-btn");

  const checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add("checkout-btn");
  checkoutBtn.innerText = "Checkout";

  cartItems.append(orderDetails, checkoutBtn);
  orderDetails.append(productThumbnail, productNameAndValue, deleteProduct);
  productNameAndValue.append(productName, productValue);

  deleteProduct.addEventListener("click", deleteOrderFromCart);
  checkoutBtn.addEventListener("click", () => {
    cartModal.classList.remove("open");
  });
};

// DELETE ORDER FROM CART

const deleteOrderFromCart = () => {
  cartItems.innerHTML = "<p>Your cart is empty</p>";
  numberInput.value = "0";
  cartBadge.style.display = "none";
};

// SHOW BADGE

const showBadge = () => {
  cartBadge.classList.add("cart-badge");
  cartBadge.innerText = numberInput.value;
  cartBadge.style.display = "block";

  cartBtn.appendChild(cartBadge);
};

// ADD ITEM TO CART

const addItemToCart = () => {
  if (numberInput.value > 0) {
    cartItems.innerHTML = "";
    createOrderDetailsElement();
    showBadge();
  }
};

addBtn.addEventListener("click", addItemToCart);
