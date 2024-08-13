const btnScreamer = document.getElementById("buttonStartScreamer");
const main = document.getElementById("main");
console.log(main);


function showScreamer() {
    const imgScreamer = document.createElement("img");
    imgScreamer.src = "../img/resources/screamer.jpg";
    imgScreamer.className = "screamer";
    main.append(imgScreamer);
}


btnScreamer.addEventListener("click", showScreamer);