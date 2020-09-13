"use strict";

var pageName = "home.htm";
var pagePath = "/pages/home/home.htm";
var localhostPort = "5500";
var localhostURL = "http://127.0.0.1:5500/pages/home/home.htm";
var pageVersion = "1.0";
var pathRedirect = "home";

var redirectToHomePage = function redirectToHomePage() {
  window.location.assign("https://chatapp.com/home");
};

var redirectToMain = function redirectToMain() {
  window.location.assign("https://chatapp.com/home");
};

var getPageDetails = function getPageDetails() {
  return "pageName: " + pageName + ", pagePath: " + pagePath + ", localhostPort: " + localhostPort + ", localhostURL: " + localhostURL + ", pageVersion: " + pageVersion + ", pathRedirect: " + pathRedirect;
};