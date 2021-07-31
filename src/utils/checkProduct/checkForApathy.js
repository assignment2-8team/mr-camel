const checkForApathy = (currentProductId) => {
    const notInterestedProducts = JSON.parse(window.localStorage.getItem("apathy"));
    return notInterestedProducts.indexOf(currentProductId) !== -1 ? true : false    
}

export default checkForApathy;