import {
    xhrAjax,
    fetchAjax
} from "./util/ajax.js";

import "./less/index.less";



let btnXhr = document.querySelector("button.xhr-btn");
let btnFet = document.querySelector("button.fetch-btn");
    
btnXhr.onclick = function () {
    xhrAjax({
        url:"http://106.13.225.53:81/login/isLogin"
    }).then((res) => {
        console.log("xhr res666", JSON.parse(res));
    })
}

btnFet.onclick = function () {
    fetchAjax({
        url:"http://106.13.225.53:81/login/isLogin"
    }).then((res) => {
        console.log("fetch res666",res);
    })
}



