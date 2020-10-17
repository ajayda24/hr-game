
// const form = document.querySelector('#submit-form');


// saving data

function savingScore(){

    db.collection('gamedb').add({
        Name: form.Name.value,
        Score: Number(form.Score.value)
    });
    form.Name.value = '';
    form.Score.value = '';

    setTimeout(function(){
        window.location.href='result.html'
    }, 1000);


}

