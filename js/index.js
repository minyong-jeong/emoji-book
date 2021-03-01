const all = smileys.concat(
    handGestures,
    people,
    clothingAndAccessories,
    animals,
    nature,
    foodsAndDrink,
    activity,
    travelAndPlaces,
    objects,
    symbols,
    flags
);

let preNav = "all";
let currentNav = "all";

function createPage(nav) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    let items;
    preNav = currentNav;
    switch (nav) {
        case "all":
            items = all;
            currentNav = "all";
            break;
        case "smileys":
            items = smileys;
            currentNav = "smileys";
            break;
        case "handGestures":
            items = handGestures;
            currentNav = "handGestures";
            break;
        case "people":
            items = people;
            currentNav = "people";
            break;
        case "clothingAndAccessories":
            items = clothingAndAccessories;
            currentNav = "clothingAndAccessories";
            break;
        case "animals":
            items = animals;
            currentNav = "animals";
            break;
        case "nature":
            items = nature;
            currentNav = "nature";
            break;
        case "foodsAndDrink":
            items = foodsAndDrink;
            currentNav = "foodsAndDrink";
            break;
        case "activity":
            items = activity;
            currentNav = "activity";
            break;
        case "travelAndPlaces":
            items = travelAndPlaces;
            currentNav = "travelAndPlaces";
            break;
        case "objects":
            items = objects;
            currentNav = "objects";
            break;
        case "symbols":
            items = symbols;
            currentNav = "symbols";
            break;
        case "flags":
            items = flags;
            currentNav = "flags";
            break;
        default:
            console.log(`Cannot found nav (${nav})`);
            return;
    }

    document.getElementById(preNav).style.backgroundColor = 'rgb(35, 130, 255)';
    document.getElementById(currentNav).style.backgroundColor = 'rgb(255, 61, 61)';
    for (var i = 0; i < items.length; i++) {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <div class="card-text">${items[i]["emoji"]}</div>
        <div class="card-description" hidden>${items[i]["description"]}</div>
        <div class="darkness" onclick="copyStringToClipboard('${items[i]["emoji"]}')">COPY</div>
        `
        cardContainer.appendChild(div);
    }
}

function copyStringToClipboard (str) {
    console.log(str + " copied!");
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    notification(str);
}

function notification(str) {
    const noti = document.createElement('div');
    noti.className = "noti";
    noti.innerText = str + " Copied!";
    document.body.appendChild(noti);
    setTimeout(() => {
        document.body.removeChild(noti);
    }, 1000);
}

function initNav() {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            createPage(tabs[i].id);
        });
    }
}

function tableFilter() {
let filter, i, txtValue;
    filter = document.getElementById("myinput").value.toUpperCase();
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        description = card[i].getElementsByClassName("card-description")[0];
        if (description) {
            txtValue = description.textContent || description.innerText;
            txtOk = txtValue.toUpperCase().indexOf(filter) > -1;
            card[i].style.display = (txtOk) ? "" : "none";
        }
    }
}

window.onload = () => {
    createPage("all");
    initNav();
    document.getElementById("myinput").addEventListener("keyup", tableFilter);
}