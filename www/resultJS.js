//-----------------------------------------
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {

    document.addEventListener("backbutton", onBackKeyDown, false);
    // document.addEventListener("offline", onOffline, false);
    if (navigator.connection.type == Connection.NONE) {
        document.getElementById("offline").innerHTML = "No Internet Connection !!! 😧";
    }
   
}

function onBackKeyDown() {
    // Handle the back button
    window.location.href='index.html';
}
//--------------------------------------------------




const highscoreTable = document.querySelector('#highscore-table');
const form = document.querySelector('#submit-form');
var tr;
var tdName;
var tdScore;

function renderScore(doc){
    tr = document.createElement('tr');
    // let tdSlNo = document.createElement('td');
    tdName = document.createElement('td');
    tdScore = document.createElement('td');

    tr.setAttribute('data-id', doc.id);

    // for(var i = 0;i<doc.data();i++){
    //     tdSlNo.textContent = i+1;
    // }
    
    tdName.textContent = doc.data().Name;
    tdScore.textContent = doc.data().Score;

    // tr.appendChild(tdSlNo);
    tr.appendChild(tdName);
    tr.appendChild(tdScore);

    highscoreTable.appendChild(tr);

}

db.collection('gamedb').orderBy("Score", "desc").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderScore(change.doc);
        }
    });
});

