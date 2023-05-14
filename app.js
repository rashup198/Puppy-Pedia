const container = document.querySelector(".container");
const display= document.querySelector(".display-container")

const url="https://dogapi.dog/api/facts?number=5"

const btn= document.getElementById("submit");

const data1= document.getElementById("data1");
const data2= document.getElementById("data2");
const data3= document.getElementById("data3");
const data4= document.getElementById("data4");
const data5= document.getElementById("data5");

btn.addEventListener("click", function(){
    getuserdate(url);
})

async function getuserdate(url) {

    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
        updateProfile(data);

    } catch (error) {
        console.log("error found" + error);
    }
}
function updateProfile(data){
    data1.innerText =`1) ${data.facts[0]}`
    data2.innerText =`2) ${data.facts[1]}`
    data3.innerText =`3) ${data.facts[2]}`
    data4.innerText =`4) ${data.facts[3]}`
    data5.innerText =`5) ${data.facts[4]}`  

    console.log(data);
}