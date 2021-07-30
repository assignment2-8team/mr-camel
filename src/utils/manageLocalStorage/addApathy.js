const addApathy = (productId) => {
    const apathy = window.localStorage.getItem("apathy");
    window.localStorage.setItem("apathy", [ ...apathy,  productId]);
}

export default addApathy;