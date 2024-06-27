

let btn = document.querySelector('button');
let url2 = "https://dog.ceo/api/breed/image/random";

// btn.addEventListener("click", async() => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// });

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector('#res');
    img.setAttribute("src", link);

});


async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        console.log(e);
        return "/";
    }
}


let url ="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log(e);
        return "no fact found";
    }
}

// AXIOS HEADERS 
const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = { headers: { Accept: "application/json"} };
        let res = await axios.get(url3, config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}