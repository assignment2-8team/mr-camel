const manageHistoryPush = (productInfo, history) => {
  history.push({
    pathname: "/product",
    state: { productInfo: { ...productInfo } },
  });
};

export default manageHistoryPush;
