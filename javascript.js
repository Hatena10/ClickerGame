document.getElementById("cookie").addEventListener('click',count);
document.getElementById("buy-cursor").addEventListener('click',buycursor);




let score = 0;
function count() {
    score+=1;
}

let cursor_number=0;
let cursor_price=20;
function buycursor() {
    if (score >=cursor_price){
        score-=cursor_price;
        cursor_number+=1;
        
        
    }   
}   
function cursor_event() {
    score+=cursor_number;
}
function update(){
    document.getElementById("how-many").innerHTML=cursor_number;
    document.getElementById("bake").innerHTML=score;
}


setInterval(update,100);
setInterval(cursor_event,1000);
