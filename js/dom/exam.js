const slavs = [{capital:"Moscow", country: "Russia"},
                {capital:"Kiev", country: "Ukraine"},
                {capital:"Minsk", country: "Belorussia"},
]
const container = document.getElementById("banner");

for ( let item of slavs )
    {
        const str = document.createElement("div");
        str.innerHTML = `<p> ${item.capital} this is  ${item.country}</p>`;
        container.append(str);     
    }

let day = +prompt("Enter day of the week from 1 to 7");
let dayName = "";

switch (day) {
    case 1 : {dayName = "Monday"; break}
    case 2 : {dayName = "Tuesday"; break}
    case 3 : {dayName = "Wednesday"; break}
    case 4 : {dayName = "Thursday"; break}
    case 5 : {dayName = "Friday"; break}
    case 6 : {dayName = "Saturday"; break}
    case 7 : {dayName = "Sunday"; break}
    default: dayName = "Enter digits from 1 to 7"
}    
alert(dayName);

const btn = document.getElementById("btn");
const img = document.querySelector("img");

btn.onclick = function () {img.style.display = "none"} 
