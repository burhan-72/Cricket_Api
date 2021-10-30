var createBtn=document.getElementById('create-team-button');
createBtn.addEventListener('click',function(){
    console.log('Button Clicked');
    document.getElementsByClassName("select-players").style.visibility = "visible";
});