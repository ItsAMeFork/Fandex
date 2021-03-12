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





const url2 = window.location.href;
function info(){
    localStorage.intro = "Done";
}
function checkinfo(){
    if(localStorage.intro === "Done"){
        url22 = url2.substring(0, url2.lastIndexOf("/") + 1);
        url22 += "library.html";
        window.location.replace(url22);

    }else{ 
    }
}
function resetinfo(){
    if(localStorage.intro === "Done"){
    localStorage.intro = "Null"
    }
}