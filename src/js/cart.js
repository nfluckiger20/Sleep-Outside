import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter, getParam } from "../js/utils.mjs";
import renderTotal from "./cartTotal.js";

loadHeaderFooter();


function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  console.log(cartItems);
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  if(cartItems.length > 0){
    document.querySelector(".cart-footer").classList.remove('hide');
  }
  renderTotal(cartItems);
}




function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
