const addApathy = (productId) => {
    const apathy = JSON.parse(window.localStorage.getItem("apathy"));
    window.localStorage.setItem("apathy", JSON.stringify([ ...apathy,  productId]));
}

export default addApathy;