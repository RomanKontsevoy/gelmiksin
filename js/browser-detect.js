function checkBrowser() {
    var sBrowser, sUsrAg = navigator.userAgent;
    if(sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("MSIE") > -1) {
        sBrowser = "Microsoft Internet Explorer";
    } else {
        sBrowser = "unknown";
    }
    console.log("You are using browser: " + sBrowser);
    return sBrowser;
}

function addClassForNotChrome() {
    let browser = checkBrowser();
    if (browser === 'Google Chrome') {
        return
    } else {
        document.getElementsByTagName("BODY")[0].classList.add('not-chrome');
    }

}

addClassForNotChrome();