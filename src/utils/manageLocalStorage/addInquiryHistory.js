const addInquiryHistory = (productInfo) => {
    let inquiryHistory = JSON.parse(window.localStorage.getItem("inquiryHistory"));
    const productId = productInfo.id;
    console.log(inquiryHistory);
    if (inquiryHistory.hasOwnProperty(productId)) {
        inquiryHistory.recent.splice(inquiryHistory.recent.indexOf(productId), 1);
        inquiryHistory.recent.unshift(productId);
    }
    else {
        inquiryHistory[productId] = productInfo;
        inquiryHistory.recent.unshift(productId);
    }
    window.localStorage.setItem("inquiryHistory", JSON.stringify(inquiryHistory));
}

export default addInquiryHistory;