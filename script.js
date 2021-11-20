let nameDOM = document.querySelector("#myName");
let userName = prompt("İsminiz nedir?");
userName = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}` // İlk harfi büyük yap
nameDOM.innerHTML = userName;
let clockDOM = document.querySelector("#myClock");

function showTime() {
    
    let date = new Date();
    let day = date.getDay()
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let today = days[day];

    let time = date.toLocaleTimeString();
    clockDOM.innerHTML = `${time} ${today}`;
}

    

