var x = document.querySelectorAll('.match-status');
for(let i = 0; i < x.length; i++){
    var myVar = setInterval(function(){
        let ans;
        const date1 = new Date();
        let d1 = x[i].getAttribute('id');
        let d2 = new Date(d1);
        let diffTime = (d2 - date1);
        console.log(diffTime);
        let hour = parseInt(diffTime/(60 * 60 * 1000));
        let min = parseInt(diffTime/(60 * 1000)) - (hour * 60);
        let sec = parseInt(diffTime/(1000)) - (min * 60) - (hour * 3600);
        if(diffTime <= 0) {
            ans = "Match has already started";
            clearInterval(myVar);
        } else {
            ans = hour.toString() + " h " + min.toString() + " m " + sec.toString() + " s ";
        }
        x[i].innerHTML = ans;
    }, 1000);
}