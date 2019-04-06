
const {google} = require('googleapis');
const authentication = require("./authentication");

// nodesheet demo
// https://docs.google.com/spreadsheets/d/1EXYgPBj8QvdlulJEzN13mMliZd1B8EuF2DwQx7Zt5YU/edit#gid=0

// https://github.com/googleapis/google-api-nodejs-client/blob/master/samples/sheets/quickstart.js

let gsId = '1EXYgPBj8QvdlulJEzN13mMliZd1B8EuF2DwQx7Zt5YU'
 
function getData(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: gsId,
    range: 'Sheet1!A2:C', //Change Sheet1 if your worksheet's name is something else
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } 
    console.log(`spreadsheet response`)
    console.log(response)
    var rows = response.data.values;
    if (rows.length === 0) {
      console.log('No data found.');
    } else {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        console.log(row.join(", "));
      }
    }
  });
}

//////
function appendData(auth) {
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.append({
      auth: auth,
      spreadsheetId: gsId,
      range: 'Sheet1!A3:B', //Change Sheet1 if your worksheet's name is something else
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [ ["Void", "Canvas", "Website"], ["Paul", "Shan", "Human"] ]
      }
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      } else {
          console.log("Appended");
      }
    });
  }
  

  ///////  
 
function addSheet(auth) {
    var sheets = google.sheets('v4');
    sheets.spreadsheets.create({
      auth: auth,
      resource: {
          properties:{
              title: "nodesheettest"
          }
      }
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      } else {
          console.log("Added");
      }
    });
  }

   
authentication.authenticate().then((auth)=>{ 
  getData(auth);
});
 

authentication.authenticate().then((auth)=>{
  appendData(auth);
});

authentication.authenticate().then((auth)=>{
  addSheet(auth);
 });
