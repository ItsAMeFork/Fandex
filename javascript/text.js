function loadBook(bookId){
    if(books[bookId].id === bookId){
    document.querySelector(".book").innerHTML = `<h1 id="booktitle">${books[bookId].name}</h1>`;
    document.querySelector(".book").innerHTML += `<div class="chapter-container"><div id="chapter">${books[bookId].chapter}</div><div>`;
    document.querySelector(".book").innerHTML += `<div id="chapter2-positioner"><a href="${books[bookId].chapter2}" id="chapter2"><h2 id="chapter2text">Next Chapter</h2></a></div>`;
    }else{
        console.log("a error has occurred")
    }
}


function bookInfo(bookId){
    if(books[bookId].id === bookId){
    document.querySelector(".book").innerHTML = `<div class="info-picture-container"><a class="info_picture_link" href="index.html?id=${books[bookId].id}*"><img class="info_picture" src="${books[bookId].picture}"></a>`;
    document.querySelector(".book").innerHTML += `<div class="info_container"><div>`;
    document.querySelector(".info_container").innerHTML += `<h1 class="info_name">${books[bookId].name}</h1>`;
    document.querySelector(".info_container").innerHTML += `<p class="info_desc">${books[bookId].originalDesc}</p>`;
    // document.querySelector(".info_container").innerHTML += `<a href='index.html' class="info_button">Read</a>`;
    document.querySelector(".book").innerHTML += `<div class="info_read_chapter"><a href="index.html" class="info_read"><h1 class="info_read_text">Read</h1></a></div>`;
    }else{
        console.log("a error has occurred");
    }
}

function libraryinfo(bookId){
    if(books[bookId].id === bookId){
        document.querySelector(".row").innerHTML += `<a href="book.html?id=${bookId}*" class="item"><div class="pictureContainer"><img class="picture"src="${books[bookId].picture}"alt=""></img> </div> <div class="infoContainer"><div class="title">${books[bookId].name}</div><div class="sum">${books[bookId].originalDesc}</div></div></a>`
    }else{
        console.log("a error has occurred")
    }
}
function libraryload(){
    for(let i = 0; i < books.length;){
        libraryinfo(i);
        i++
    }
}