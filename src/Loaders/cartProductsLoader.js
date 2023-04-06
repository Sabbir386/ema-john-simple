import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json();

    const storedCart = getShoppingCart();
    let saveCart = [];
    for (const id in storedCart) {
        const addedproduct = products.find(product => product.id === id);
        if (addedproduct) {
            const quantity = storedCart[id];
            addedproduct.quantity = quantity;
            saveCart.push(addedproduct);
        }
    }


    return saveCart;
}
export default cartProductsLoader;