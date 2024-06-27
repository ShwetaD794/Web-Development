let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     console.log(response);
//     return response.json();
//     })
//     .then((data) => {
//         console.log(data);
// })
// .catch((err) => {
// console.log(err);
// });





// FETCH 

async function getFact(){
    try{
        let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    }
    catch(err){
        console.log(err);
    }
}


// AXIOS 

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }catch(err){
        console.log(err)
    }
}

