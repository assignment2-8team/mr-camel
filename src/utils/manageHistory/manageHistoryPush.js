const manageHistoryPush = (productInfo, history) => {
    window.sessionStorage.setItem("currentProductInfo", JSON.stringify(productInfo));
    history.push({
        pathname: "/product",
    });
};

export default manageHistoryPush;
