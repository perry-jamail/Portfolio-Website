//Mixed Messages
let mixedMessages = document.getElementsByClassName('MMbutton')[0];
let hiddenMM = document.getElementsByClassName('MMonclick')[0];
let MMclose = document.getElementsByClassName('MMclose')[0];
function MMunhide(){
    hiddenMM.style.display = 'block';
}
mixedMessages.onclick = MMunhide;
function MMhide(){
    hiddenMM.style.display = 'none';
}
MMclose.onclick = MMhide;

//Canyon Creek Champtionship
let canyonCreek = document.getElementsByClassName('CCCbutton')[0];
let hiddenCCC = document.getElementsByClassName('CCConclick')[0];
let CCCclose = document.getElementsByClassName('CCCclose')[0];
function CCCunhide(){
    hiddenCCC.style.display = 'block';
}
canyonCreek.onclick = CCCunhide;
function CCChide(){
    hiddenCCC.style.display = 'none';
}
CCCclose.onclick = CCChide;

//Harper's Game Store
let harpersGameStore = document.getElementsByClassName('HGSbutton')[0];
let hiddenHGS = document.getElementsByClassName('HGSonclick')[0];
let HGSclose = document.getElementsByClassName('HGSclose')[0];
function HGSunhide(){
    hiddenHGS.style.display = 'block';
}
harpersGameStore.onclick = HGSunhide;
function HGShide(){
    hiddenHGS.style.display = 'none';
}
HGSclose.onclick = HGShide;