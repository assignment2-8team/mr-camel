import checkForApathy from "utils/checkProduct/checkForApathy";
import addInquiryHistory from "utils/manageLocalStorage/addInquiryHistory";
import manageHistoryPush from "utils/manageHistory/manageHistoryPush";

let setTimeoutId;

const handleOnClick = (productInfo, history) => {
    if (checkForApathy(productInfo.id)) {
        document.querySelector('.modal').innerHTML = "관심없는 상품입니다";
        document.querySelector('.modal').style.transform = 'translate(23em, 0)';
        if (setTimeoutId)
            clearTimeout(setTimeoutId);
        setTimeoutId = window.setTimeout(() => { 
            document.querySelector('.modal').style.transform = 'translate(-23em, 0)';
            console.log("됐다");
        }, 3000)
        return;
    }
    console.log(checkForApathy(productInfo.id));
    addInquiryHistory(productInfo);
    manageHistoryPush(productInfo, history);
};

export default handleOnClick;