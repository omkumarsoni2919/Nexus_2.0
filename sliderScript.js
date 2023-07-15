var indexValue=1;
showImg(indexValue);
function sideslide(e){
    showImg(indexValue+=e);}
function showImg(e){
    var i;
    const img=document.querySelectorAll('img');
    const text=document.querySelectorAll('.text h1')
    if(e>img.length){indexValue=1}
    if(e<1){indexValue=img.length}
    for(i=0;i<img.length;i++){
        img[i].style.display="none"
        text[i].style.display="none"

    }
    img[indexValue-1].style.display="block";
    text[indexValue-1].style.display="block";
}


