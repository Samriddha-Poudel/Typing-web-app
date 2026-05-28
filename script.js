let typecontent=document.querySelector(".type-content p");


const loadpara = () => {
    let randompara = Math.floor(Math.random() * article.length); 
    article[randompara].split('').forEach(element => {
        let realdata= `<span>${element}</span>`;
        typecontent.innerHTML += realdata;
    })
    
}
loadpara();