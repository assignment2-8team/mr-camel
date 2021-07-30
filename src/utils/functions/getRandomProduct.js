import Product from "../../pages/Product"
import PRODUCT_LIST from "../constants/PRODUCT_LIST"
import isNotInterestedProducts from "./isNotInderested";

const getRandomProduct = (currentProductId) => {
    while (true) {
        let newProductId = Math.floor(Math.random() * 101)
        if (newProductId === 0 || newProductId === currentProductId || isNotInterestedProducts(productId))
            continue;
        return PRODUCT_LIST.find((e) => e.id === newProductId);
    }
}

export default getRandomProduct;