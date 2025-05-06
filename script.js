const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox); 
    });
});

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const productImg = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if (item.textContent === productTitle) {
            alert("This item is already in the cart!");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
                <img src="${productImg}" alt="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    </div>
                </div>
                <i class="ri-close-circle-line cart-remove"></i>
    `;

    cartContent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();

        updateTotalPrice();
});



    const updateTotalPrice = () => {
        const totalPriceElement = document.querySelector(".total-price");
        const cartBoxes = cartContent.querySelectorAll(".cart-box");
        let total = 0;
        cartBoxes.forEach(cartBox => {
            const priceElement = cartBox.querySelector(".cart-price");
            // const quantityElement = cartBox.querySelector(".number");
            const price = priceElement.textContent("₱", "");
            const quantity = quantityElement .textContent;
            total += price + price;

        });
        totalPriceElement.textContent = `₱${total}`;
    };

};


























// cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
//         const numberElement = cartBox.querySelector(".number");
//         const decrementButton = cartBox.querySelector("#decerement");
//         let quantity = numberElement.textContent;

//         if (event.target.id == "decrement" && quantity > 1){
//             quantity--;
//             if (quantity == 1){
//                 decrementButton.style.color = "#999";
//             }
//         } else if (event.target.id == "increment"){
//             quantity++;
//             decrementButton.style.color = "#333";
//         }

//         numberElement.textContent = quantity;

//         updateTotalPrice();
//     });

//     updateTotalPrice();
// }; 