const addInquiryHistory = (productInfo) => {
    let inquiryHistory = JSON.parse(window.localStorage.getItem("inquiryHistory"));
    const productId = productInfo.id;
    const recentIdx = inquiryHistory.recent.indexOf(productId);
    if (recentIdx !== -1) {
        inquiryHistory.recent.splice(recentIdx, 1);
        inquiryHistory.recent.unshift(productId);
    }
    else {
        (inquiryHistory.items)[productId] = productInfo;
        inquiryHistory.recent.unshift(productId);
    }
    window.localStorage.setItem("inquiryHistory", JSON.stringify(inquiryHistory));
}

export default addInquiryHistory;