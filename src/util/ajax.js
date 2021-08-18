
export function xhrAjax({url}){
    let xhr=new XMLHttpRequest();
    return new Promise((resolve)=>{
        xhr.open("get",url,true);
        xhr.onload=()=>{
            resolve(xhr.response);
        }
        xhr.send();
    })
}

export function fetchAjax({url}){
    return new Promise((resolve)=>{
        fetch(url).then((res)=>{
            console.log("fetch res",res);
            resolve(res.json());
        })
    })
}