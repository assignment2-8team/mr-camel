const checkForApathy = (currentProductId) => {
    const notInterestedProducts = window.localStorage.getItem("Apathy");

    if (notInterestedProducts === undefined)
        return false;

    return notInterestedProducts[currentProductId] ? true : false    
}

export default checkForApathy;