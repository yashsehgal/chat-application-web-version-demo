const pageName = "home.htm";
const pagePath = "/pages/home/home.htm";
const localhostPort = "5500";
const localhostURL = "http://127.0.0.1:5500/pages/home/home.htm";
const pageVersion = "1.0";
const pathRedirect = "home";

var redirectToHomePage = function() {
  window.location.assign("https://chatapp.com/home");
}

var redirectToMain = function() {
  window.location.assign("https://chatapp.com/home");
}

var getPageDetails = function() {
  return "pageName: " + pageName + 
        ", pagePath: " + pagePath + 
        ", localhostPort: " + localhostPort + 
        ", localhostURL: " + localhostURL + 
        ", pageVersion: " + pageVersion + 
        ", pathRedirect: " + pathRedirect; 
}

