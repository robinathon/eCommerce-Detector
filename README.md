
# eCommerce Detector


Our tool identifies Ecommerce platforms on websites, such as SHOPIFY, WOOCOMMERCE, BIG COMMERCE, MAGENTO.


## preRequisites
```bash
Step 1 : First you need to create a google spreadsheet.

Step 2 : go to https://console.cloud.google.com and create a new project.
         get credential.json file from there.

        for more information you can follow this upto 5 minutes. https://www.youtube.com/watch?v=PFJNJQCU_lo&t=201s

Step 3 : now copy the spreadsheet ID which is in the url of your spreadsheet.
         for reference it looks like this (1hjtSCj_Af1-zQUnY1uxG3JsXAhjygdfgAG4PL1_cPTE6E)

Step 4 : Now open the cloned repo in your code-editor, in the index.js file change the spreadSheetID to your's.
        Also you have to attach the credential.json(from step 2) to this repo, if it is already there then 
        replace it by your's and rename it to credentials.json if it was not.

Step 5 : Hola, ready to go !
```
## Getting Started



    Fork the repository.

    Clone the repo

    Open your terminal

    Run these commands in your terminal:
    
    npm init
    npm i google-spreadsheet --save
    npm i axios


To deploy this project run

```bash
  npm start
```

