function pickUrl(String){
    const url = window.location.href;
    if(url.includes("?id")){
        let urlInfo = url.split("*")[0];
        let urlId = urlInfo.split("?");
    
        let isId = urlId[1].split("=");
        let id = parseInt(isId[1]);
        if(String==='book-information'){
            bookInfo(id);
        }

        if(String === "reader"){
            loadBook(id);
        }

        else {
            return;
        }
    }else{
        if(String === "book-information"){
            window.location.replace(`${url}?id=0*`)
        }
        if(String === "reader"){
        window.location.replace(`${url}?id=0*`)
    }
    }
}

function blpickUrl(String){
    const url = window.location.href;
    if(url.includes("?id")){
        let urlInfo = url.split("*")[0];
        let urlId = urlInfo.split("?");
    
        let isId = urlId[1].split("=");
        let id = parseInt(isId[1]);
        if(String==='book-information'){
            blacklistbookInfo(id);
        }

        if(String === "reader"){
            blacklistbookInfo(id);
        }

        else {
            return;
        }
    }else{
        if(String === "book-information"){
            window.location.replace(`${url}?id=0*`)
        }
        if(String === "reader"){
        window.location.replace(`${url}?id=0*`)
    }
    }
}






function checkinfo(){
    if(localStorage.intro != "Done"){
        const url2 = window.location.href;
        url22 = url2.substring(0, url2.lastIndexOf("/") + 1);
        url22 += "landing.html";
        window.location.replace(url22);
        localStorage.intro = "Done";
    }else{ 
    }
}
function resetinfo(){
    if(localStorage.intro === "Done"){
    localStorage.intro = "Null"
    }
}