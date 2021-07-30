const isNotInterested = (currentProductId) => {
    const notInterestedProducts = window.localStorage.getItem(notInterestedProducts);

    if (notInterestedProducts === undefined)
        return false;

    return notInterestedProducts[currentProductId] ? true : false    
}

export default isNotInterested;