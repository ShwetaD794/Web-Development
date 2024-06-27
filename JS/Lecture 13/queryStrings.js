let url = "https://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener("click", async () => {
    let country = document.querySelector('input').value;
    console.log(country);
    let collArr = await getColleges(country);
    Show(collArr);
});

function Show(collArr){
    let list = document.querySelector('#list');
    list.innerText = "";
    for(col of collArr){
        console.lof(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
}