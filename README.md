# nodesheet

http://voidcanvas.com/node-js-googleapis-v4-spreadsheet/

To make your node.js application connect to and manipulate your google spreadsheet, you need three things. client_id, client_secret and refresh_token. 

To get client_id and secret you need to perform the following tasks.

Login to your google account in your browser.
Use this wizard to create or select a project in the Google Developers Console and automatically turn on the API.

https://console.developers.google.com/flows/enableapi?apiid=sheets.googleapis.com

1. After landing to the console page, click Continue button.
2. Now click on Go to credentials button.
3. On the Add credentials to your project page, click the Cancel button.
4. Click on the OAuth consent screen tab.
4. Select an Email address, enter a Product name if not already set, and click the Save button.
5. Select the Credentials tab (probably it’s already selected by now), click the Create credentials button and select OAuth client ID.
6. Select the application type Other and enter the name “WhatsoeverYouWant”, and click the Create button.
7. Click OK to dismiss the resulting dialog.
8. You should see a download icon at the right side. Click on this to download the json file containing credentials.
9. Rename the file as credentials.json and save in the root directory of your node application.

The above steps will complete generating the two important auth credentials; i.e. client_id and client_secret. 

So we need one more thing, which is refresh_token. 

Well, fetching refresh_token will be the part of our program itself. So let’s move to the code Now.