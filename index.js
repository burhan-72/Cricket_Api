const express = require('express');
const request = require('request');
const PORT = 8000;
const app = express(); 
require('dotenv').config();

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

function pad2(n) { 
  return (n < 10 ? '0' : '') + n;
}

let obj = {
  "results" : []
};
var date = new Date(); 
const date1 = new Date();
var month = pad2(date.getMonth()+1);//months (0-11)
var day = pad2(date.getDate());//day (1-31)
var year= date.getFullYear(); 
var formattedDate =  year+"-"+month+"-"+day;
for (let i = 0; i < 5; i++) {
  console.log(formattedDate);
  const options = {
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${formattedDate}`,
    headers: {
      'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY,
      useQueryString: true 
    }  
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let s = JSON.parse(body);
    for(mat of s.results){
      obj.results.push(mat);
    }
  });
  date = new Date(date.getTime() + (24 * 60 * 60 * 1000));
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  formattedDate =  year+"-"+month+"-"+day;
}

app.get('/',function(req,res){
  return res.render('match_card', {
    title: 'Home Page', 
    matches: obj,
    currDate: date1
  })
});

app.get('/match/contest',function(req,res){
  const match_id = req.query.id;
  const homeTeamName = req.query.homeTeamName;
  const awayTeamName = req.query.awayTeamName;
  const options = {
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/match/${match_id}`,
    headers: {
      'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY,
      useQueryString: true
    }
  };
  let matchDet = {
    "results": []
  };
  let s;
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let s = JSON.parse(body);
    matchDet.results.push(s.results);
    return res.render('contest_card', {
      title: 'Contests',
      match_details: matchDet,
      homeTeamName: homeTeamName,
      awayTeamName: awayTeamName
    })
  });
});

app.listen(PORT,function(err){
  if(err){
    console.log('Error in running the server!!', err);
    return;
  }
  console.log('Server is running on port : ',PORT);
});

