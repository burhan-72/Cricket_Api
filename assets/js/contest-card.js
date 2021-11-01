const createBtn=document.getElementById('create-team-button');
createBtn.addEventListener('click',function(){
    const div=document.getElementById('select-players');
    const body=document.getElementsByClassName('container');
    body.style.opacity = "0.5";
    div.style.display="block";
});

const addPlayer = document.querySelectorAll('.player-add-icon');
var addedPlayers = [];
for(let i = 0; i < addPlayer.length; i++){
    let player = addPlayer[i];
    player.addEventListener('click', function(){
        const playerName = player.getAttribute('data-player-info');
        const isPresent = addedPlayers.indexOf(playerName);
        console.log(isPresent);
        if(isPresent > -1){
            const index = addedPlayers.indexOf(playerName);
            if (index > -1) {
                addedPlayers.splice(index, 1);
            }
            player.parentElement.parentElement.style.backgroundColor = "black";
        }
        else{
            if(addedPlayers.length == 11){
                alert('Cannot Add more than 11 players');
                return;
            }
            addedPlayers.push(playerName);
            player.parentElement.parentElement.style.backgroundColor = "#00b137";
        }
        console.log(addedPlayers);
    });
}