const smileys = [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃",
    "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚",
    "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭",
    "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄",
    "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕",
    "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳",
    "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯",
    "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭",
    "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡",
    "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺",
    "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽",
    "🙀", "😿", "😾"  
];

const foods = [
    "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏",
    "🍐", "🍑", "🍒", "🍓", "🫐", "🥝", "🍅", "🫒", "🥥", "🥑",
    "🍆", "🥔", "🥕", "🌽", "🌶️", "🫑", "🥒", "🥬", "🥦", "🧄",
    "🧅", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🫓", "🥨", "🥯",
    "🥞", "🧇", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕",
    "🌭", "🥪", "🌮", "🌯", "🫔", "🥙", "🧆", "🥚", "🍳", "🥘",
    "🍲", "🫕", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘",
    "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥",
    "🥮", "🍡", "🥟", "🥠", "🥡", "🦪", "🍦", "🍧", "🍨", "🍩",
    "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯",
    "🍼", "🥛", "☕", "🫖", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺",
    "🍻", "🥂", "🥃", "🥤", "🧋", "🧃", "🧉", "🧊", "🥢", "🍽️", "🍴", "🥄"
];

const handGestures = [
    "💋", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️",
    "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️",
    "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐",
    "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿",
    "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴",
    "👀", "👁️", "👅", "👄"
];

const animalsAndNatures = [
    "🙈", "🙉", "🙊", "💥", "💫", "💦", "💨", "🐵", "🐒", "🦍",
    "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱",
    "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓",
    "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽",
    "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏",
    "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔",
    "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡",
    "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️",
    "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸",
    "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋",
    "🐬", "🦭", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🐌", "🦋",
    "🐛", "🐜", "🐝", "🪲", "🐞", "🦗", "🪳", "🕷️", "🕸️", "🦂",
    "🦟", "🪰", "🪱", "🦠", "💐", "🌸", "💮", "🏵️", "🌹", "🥀",
    "🌺", "🌻", "🌼", "🌷", "🌱", "🪴", "🌲", "🌳", "🌴", "🌵",
    "🌾", "🌿", "☘️", "🍀", "🍁", "🍂", "🍃", "🍄", "🌰", "🦀",
    "🦞", "🦐", "🦑", "🌍", "🌎", "🌏", "🌐", "🪨", "🌑", "🌒",
    "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜",
    "☀️", "🌝", "🌞", "⭐", "🌟", "🌠", "☁️", "⛅", "⛈️", "🌤️",
    "🌥️", "🌦️", "🌧️", "🌨️", "🌩️", "🌪️", "🌫️", "🌬️", "🌈", "☂️",
    "☔", "⚡", "❄️", "☃️", "⛄", "☄️", "🔥", "💧", "🌊", "🎄", "✨", "🎋", "🎍"
];

let preNav = "smileys";
let currentNav = "smileys";

function createPage(nav) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    let items;
    preNav = currentNav;
    if (nav == "smileys") {
        items = smileys;
        currentNav = "smileys";
    } else if (nav == "foods") {
        items = foods;
        currentNav = "foods";
    } else if (nav == "handGestures") {
        items = handGestures;
        currentNav = "handGestures";
    }
    else if (nav == "animalsAndNatures") {
        items = animalsAndNatures;
        currentNav = "animalsAndNatures";
    }
    document.getElementById(preNav).style.backgroundColor = 'blue';
    document.getElementById(currentNav).style.backgroundColor = 'red';

    for (var i = 0; i < items.length; i++) {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
        <div class="card-text">${items[i]}</div>
        <div class="darkness" onclick="copyStringToClipboard('${items[i]}')">COPY</div>
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
    noti.style.opacity = 1;
    setTimeout(() => {
        document.body.removeChild(noti);
    }, 1000);
}

window.onload = () => {
    createPage("smileys");
}