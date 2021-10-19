const express = require('express');
const request = require('request');
const PORT = 8000;
const app = express();

require('dotenv').config();



const options = {
  method: 'GET',
  url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-10-19',
  headers: {
    'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
    'x-rapidapi-key': process.env.API_KEY,
    useQueryString: true
  }
};

app.get('/',function(req,res){
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    res.end(body);

    const obj=body;
    // console.log();

    console.log(obj.results);
    // console.log(body.results);
    // for(matches of body.results){
    //   console.log(matches.match_title ,'\n');
    // }
    
  });
});

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	// console.log(body,null,2);
//   console.log(JSON.stringify(body,null,2));
  
// });

app.listen(PORT,function(err){
  if(err){
    console.log('Error in running the server!!', err);
    return;
  }
  console.log('Server is running on port : ',PORT);
});

