import PRODUCT_LIST from "./PRODUCT_LIST";

const brandSet = new Set();
PRODUCT_LIST.map(product => brandSet.add(product.brand));
const BRAND_LIST = Array.from(brandSet);

export default BRAND_LIST;
