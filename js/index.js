let currentNav = "all";

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

function createPage(nav) {
    const items = data[nav];
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
    document.getElementById(currentNav).style.backgroundColor = 'rgb(35, 130, 255)';
    document.getElementById(nav).style.backgroundColor = 'rgb(255, 61, 61)';
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
    const title = nav[0].toUpperCase() + nav.slice(1, nav.length);
    document.getElementById("card-title").innerText = title;
    currentNav = nav;
}

function initNav() {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            createPage(tabs[i].id);
        });
    }
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
    data["all"] = [
        ...data["smileys"],
        ...data["handGestures"],
        ...data["people"],
        ...data["clothingAndAccessories"],
        ...data["animals"],
        ...data["nature"],
        ...data["foodsAndDrink"],
        ...data["activity"],
        ...data["travelAndPlaces"],
        ...data["objects"],
        ...data["symbols"],
        ...data["flags"]
    ];
    createPage("all");
    initNav();
    document.getElementById("myinput").addEventListener("keyup", tableFilter);
}