


function addSheet(auth) {
    var sheets = google.sheets('v4');

    sheets.spreadsheets.batchUpdate({
        auth: auth,
        spreadsheetId: 'spreadsheet-id-here',
        resource: {
        requests: [{'addSheet':{'properties':{'title': 'name-of-sheet'}} }], 
        }
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
    } else {
        console.log("Created sheet");
        }
    });
}