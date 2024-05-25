export const cart = [];

export function addToCart(productId) {
    let mathcingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
            mathcingItem = cartItem;
        }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const quantity = Number(quantitySelector.value);

    if(mathcingItem) {
        mathcingItem.quantity += quantity;
    } else {
        cart.push( {
            productId,
            quantity
        });
    }
}
