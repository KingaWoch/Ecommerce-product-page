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

// SHOW AND HIDE LIGHTBOX GALLERY

const productImage = document.querySelectorAll(".product-image img");
const lightboxGallery = document.querySelector(".lightbox-gallery-bg");
const closeGalleryBtn = document.querySelector(".close-gallery");

productImage.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxGallery.classList.remove("hidden");
  });
});
closeGalleryBtn.addEventListener("click", () => {
  lightboxGallery.classList.add("hidden");
});

// SLIDER

const arrowRight = document.querySelector(".right-arrow");
const arrowLeft = document.querySelector(".left-arrow");
const images = document.querySelectorAll(".product-image img");
const thumbnails = document.querySelectorAll(".thumbnails img");
const lightboxImages = document.querySelectorAll(".lightbox_product-image img");

let currentImage = 0;
let currentThumbnail = 0;

const changeImage = (n) => {
  if (n >= images.length) {
    n = 0;
  }

  if (n < 0) {
    n = images.length - 1;
  }

  images[currentImage].classList.toggle("active");
  images[n].classList.toggle("active");
  thumbnails[currentThumbnail].classList.toggle("active");
  thumbnails[n].classList.toggle("active");
  lightboxImages[currentImage].classList.toggle("active");
  lightboxImages[n].classList.toggle("active");
  lightboxThumbnails[currentThumbnail].classList.toggle("active");
  lightboxThumbnails[n].classList.toggle("active");
  currentThumbnail = n;
  currentImage = n;
  //console.log(n);
};

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    changeImage(thumbnail.classList[0]);
  });
});

arrowLeft.addEventListener("click", () => {
  changeImage(currentImage - 1);
});

arrowRight.addEventListener("click", () => {
  changeImage(currentImage + 1);
});

// LIGHTBOX GALLERY - SLIDER

const lightboxArrowLeft = document.querySelector(".gallery-left-arrow");
const lightboxArrowRight = document.querySelector(".gallery-right-arrow");
const lightboxThumbnails = document.querySelectorAll(
  ".lightbox_thumbnail_wrapper"
);

lightboxArrowLeft.addEventListener("click", () => {
  changeImage(currentImage - 1);
});

lightboxArrowRight.addEventListener("click", () => {
  changeImage(currentImage + 1);
});

lightboxThumbnails.forEach((lightboxThumbnail) => {
  lightboxThumbnail.addEventListener("click", () => {
    changeImage(lightboxThumbnail.classList[0]);
  });
});
