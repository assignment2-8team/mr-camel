const checkForApathy = (currentProductId) => {
    const notInterestedProducts = window.localStorage.getItem("apathy");

    if (notInterestedProducts === undefined)
        return false;

    return notInterestedProducts[currentProductId] ? true : false    
}

export default checkForApathy;