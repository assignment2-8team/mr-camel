const addInquiryHistory = (productInfo) => {
    let inquiryHistory = JSON.parse(window.localStorage.getItem("inquiryHistory"));
    const productId = productInfo.id;
    if (inquiryHistory.hasOwnProperty(productId)) {
        inquiryHistory.recent.remove(productId);
        inquiryHistory.recent.unshift(productId);
    }
    else 
        inquiryHistory[productId] = productInfo;
    window.localStorage.setItem("InquiryHistory", JSON.stringify(inquiryHistory));
}

export default addInquiryHistory;