var request = require('request');
var fs = require('fs');

var jsonData = JSON.parse(fs.readFileSync('./sandboxAPI/certValues.json'));
var keyFile = fs.readFileSync(jsonData.keyFile);
var certificateFile = fs.readFileSync(jsonData.certificateFile)
var caFile = fs.readFileSync(jsonData.caFile);
var headers = 
{
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization' : 'Basic ' + new Buffer(jsonData.userId + ':' + jsonData.password).toString('base64')
};

function pushFunds(){
    request.post({
        uri : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pushfundstransactions",
        key: keyFile,
        cert: certificateFile,
        ca: caFile,
        headers: headers,
        json: data1
      }, function(error, response, body) {
          console.log(body);
      }
    );
}

function pullFunds(){
    request.post({
        uri : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
        key: keyFile,
        cert: certificateFile,
        ca: caFile,
        headers: headers,
        json: data2
      }, function(error, response, body) {
          console.log(body);
      }
    );
}


module.exports.pushFunds = pushFunds;
module.exports.pullFunds = pullFunds;


var data1 =  
{
"acquirerCountryCode": "840",
"acquiringBin": "408999",
"amount": "124.05",
"businessApplicationId": "AA",
"cardAcceptor": {
"address": {
"country": "USA",
"county": "San Mateo",
"state": "CA",
"zipCode": "94404"
},
"idCode": "CA-IDCode-77765",
"name": "Visa Inc. USA-Foster City",
"terminalId": "TID-9999"
},
"localTransactionDateTime": "2020-06-20T23:20:32",
"merchantCategoryCode": "6012",
"pointOfServiceData": {
"motoECIIndicator": "0",
"panEntryMode": "90",
"posConditionCode": "00"
},
"recipientName": "rohan",
"recipientPrimaryAccountNumber": "4957030420210496",
"retrievalReferenceNumber": "412770451018",
"senderAccountNumber": "4653459515756154",
"senderAddress": "901 Metro Center Blvd",
"senderCity": "Foster City",
"senderCountryCode": "124",
"senderName": "Mohammed Qasim",
"senderReference": "",
"senderStateCode": "CA",
"sourceOfFundsCode": "05",
"systemsTraceAuditNumber": "451018",
"transactionCurrencyCode": "USD",
"transactionIdentifier": "381228649430015",
"settlementServiceIndicator": "9",
"colombiaNationalServiceData": {
"countryCodeNationalService": "170",
"nationalReimbursementFee": "20.00",
"nationalNetMiscAmountType": "A",
"nationalNetReimbursementFeeBaseAmount": "20.00",
"nationalNetMiscAmount": "10.00",
"addValueTaxReturn": "10.00",
"taxAmountConsumption": "10.00",
"addValueTaxAmount": "10.00",
"costTransactionIndicator": "0",
"emvTransactionIndicator": "1",
"nationalChargebackReason": "11"
}
};

var data2 =  
{
"acquirerCountryCode": "840",
"acquiringBin": "408999",
"amount": "124.02",
"businessApplicationId": "AA",
"cardAcceptor": {
"address": {
"country": "USA",
"county": "081",
"state": "CA",
"zipCode": "94404"
},
"idCode": "ABCD1234ABCD123",
"name": "Visa Inc. USA-Foster City",
"terminalId": "ABCD1234"
},
"cavv": "0700100038238906000013405823891061668252",
"foreignExchangeFeeTransaction": "11.99",
"localTransactionDateTime": "2020-06-21T00:11:21",
"retrievalReferenceNumber": "330000550000",
"senderCardExpiryDate": "2015-10",
"senderCurrencyCode": "USD",
"senderPrimaryAccountNumber": "4895142232120006",
"surcharge": "11.99",
"systemsTraceAuditNumber": "451001",
"nationalReimbursementFee": "11.22",
"cpsAuthorizationCharacteristicsIndicator": "Y",
"addressVerificationData": {
"street": "XYZ St",
"postalCode": "12345"
},
"settlementServiceIndicator": "9",
"colombiaNationalServiceData": {
"countryCodeNationalService": "170",
"nationalReimbursementFee": "20.00",
"nationalNetMiscAmountType": "A",
"nationalNetReimbursementFeeBaseAmount": "20.00",
"nationalNetMiscAmount": "10.00",
"addValueTaxReturn": "10.00",
"taxAmountConsumption": "10.00",
"addValueTaxAmount": "10.00",
"costTransactionIndicator": "0",
"emvTransactionIndicator": "1",
"nationalChargebackReason": "11"
},
"riskAssessmentData": {
"delegatedAuthenticationIndicator": true,
"lowValueExemptionIndicator": true,
"traExemptionIndicator": true,
"trustedMerchantExemptionIndicator": true,
"scpExemptionIndicator": true
},
"visaMerchantIdentifier": "73625198"
};

