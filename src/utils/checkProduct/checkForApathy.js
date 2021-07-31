const checkForApathy = (currentProductId) => {
    const notInterestedProducts = window.localStorage.getItem("apathy");
    return notInterestedProducts.indexOf(currentProductId) !== -1 ? true : false    
}

export default checkForApathy;