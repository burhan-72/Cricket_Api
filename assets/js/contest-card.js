const createBtn=document.getElementById('create-team-button');
createBtn.addEventListener('click',function(){
    console.log('Button Clicked');
    const div=document.getElementById('select-players');
    if(div.style.display==="none"){
        div.style.display="block";
    }else{
        div.style.display="none";
    }

});