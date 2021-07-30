const addInquiryHistory = (productInfo) => {
    const inquiryHistory = window.localStorage.getItem("inquiryHistory");
    const productId = productInfo.id;
    inquiryHistory[productId] = productInfo;
    window.localStorage.setItem("InquiryHistory", inquiryHistory);
}

export default addInquiryHistory;