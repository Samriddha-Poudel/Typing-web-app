let typecontent=document.querySelector(".type-content p");
let input = document.getElementById('typeValue');
let letterindex = (mistakes = isTyping = 0);
let resetBtn = document.querySelector('.bottom-part button');

let time;
let tleft= document.querySelector('.time-left');
let error=document.querySelector('.mistakes');
let wpm= document.querySelector('.WPM');
let cpm = document.querySelector('.CPM');


let maxTime= 60;
let timeleft = maxTime;



const loadpara = () => {
    let randompara = Math.floor(Math.random() * article.length); 
    typecontent.innerHTML = "";
    article[randompara].split('').forEach(element => {
        let realdata= `<span>${element}</span>`;
        typecontent.innerHTML += realdata;
    })

    typecontent.querySelectorAll('span')[0].classList.add('active');
    
    document.addEventListener('click', ()=> {
        input.focus();
    })
    typecontent.addEventListener('click', () => {
        input.focus();
    })
}
loadpara();


input.addEventListener('input',(e) => {
    let char = typecontent.querySelectorAll('span');
    let inputvalue = e.target.value.split('')[letterindex];
    
    if(!isTyping){

        time= setInterval(timesetup, 1000);
        isTyping = true;
    }

    if(letterindex < char.length -1 ){
        if(inputvalue == null){
            console.log(`opps`);
        }else{

            if(char[letterindex].innerText == inputvalue){
                char[letterindex].classList.add('correct');  
            }else{
                char[letterindex].classList.add('incorrect');
                mistakes++;
                error.innerText = `Mistakes : ${mistakes}`;
            }
            letterindex++;
            char.forEach(element => {
                element.classList.remove('active');
            })

            char[letterindex].classList.add('active');
            cpm.innerText = `CPM :${letterindex - mistakes}`;

            }
         } else{


    }
    });


const timesetup = () => {
    if(timeleft > 0){

        timeleft--;
        tleft.innerText = `Time-left : ${timeleft}S`;
        let wpmval= Math.round((letterindex - mistakes) / 5 / (maxTime - timeleft) * 60);
        wpm.innerText=`WPM : ${wpmval}`;
    }
}

resetBtn.addEventListener('click', () => {
    loadpara();
    clearInterval(time);
    wpm.innerText =`WPM : `;
    error.innerText = `Mistakes : `;
    cpm.innerText =`CPM :`;
    timeleft= maxTime;
    tleft.innerText =`Time-left:${maxTime}s`;
    input.value="";
    letterindex = mistakes = isTyping = 0;
})