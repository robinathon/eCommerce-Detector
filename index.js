// Google sheet npm package
const { GoogleSpreadsheet } = require('google-spreadsheet');
const axios= require('axios');

// File handling package
const fs = require('fs');

// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1vetSCj_Af1-zQUnY1uxG3JsXA5ydfgAG4PL1_cPTE6E';

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// Credentials for the service account
const CREDENTIALS = JSON.parse(fs.readFileSync('credentials.json'));

const getRow = async () => {

    // use service account creds
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    // load the documents info
    await doc.loadInfo();

    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];

    // Get all the rows
    let rows = await sheet.getRows();
    
    let hValues = sheet.headerValues;
    hValues[1]="Category";

    for (let index = 0; index < rows.length; index++) {
        console.log(rows[index]._rawData[0]);
        var s = rows[index]._rawData[0];
        var er = false; //er is false , if there is any error in next steps, we will change it to true
        var j=await axios.get(s).catch(function (error) {
            er=true;
        });
        if(er===true)
        {
            rows[index]._rawData[1] ='NOT_WORKING';
            await rows[index].save();
            continue;
        }
        var l=j['data'];
        
        if(l.split('shopify').length<l.length && l.split('shopify').length!=1) rows[index]._rawData[1] = 'SHOPIFY'
        else if(l.split('woocommerce').length<l.length && l.split('woocommerce').length!=1) rows[index]._rawData[1] ='WOOCOMMERCE'
        else if(l.split('bigcommerce').length<l.length && l.split('bigcommerce').length!=1) rows[index]._rawData[1] ='BIGCOMMERCE'
        else if(l.split('magento').length<l.length && l.split('magento').length!=1) rows[index]._rawData[1] ='MAGENTO'
        else rows[index]._rawData[1] ='OTHERS';
        await rows[index].save();
    }
    
};

getRow();



