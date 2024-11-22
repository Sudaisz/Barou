const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"GE3WLIW3I9lp7kauWUrE4EK1FbNeDif0iRh48jqVVXA="},"public":{"type":"Buffer","data":"MhsUIwWKw5nfb9cPKNYvkYCJdUZoeNx7toc8EbzEjjg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+MTwM2zrWItvim4Lr30T4hpMAuG4QKHYGMVZkTW6vXM="},"public":{"type":"Buffer","data":"qGFbZp5FVvMmDLl0lVY+RV79eiHwtuxe6UK6r2kEkD0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wI/ipFByzxyBk3Vi/CICCBWyVOxRIt6BQDQ4A+rJw3k="},"public":{"type":"Buffer","data":"VKlBdY/EcvT3ndcvUUfIrncXwqnbA8VNUXLo55E9MzQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MG4DJCFVRc2gHgHITP2ZIm4jY0HRLAR2dnlGWPq0tG8="},"public":{"type":"Buffer","data":"T8fP8JBMwoxJcyUJIfNY4eeWla7qQsaeTNM4pYdqHw4="}},"signature":{"type":"Buffer","data":"BRbS5xE/zVLITRx6Vpb94Pk1gXbRi0P+wqe148TeFNuRRjdWJccZFhjQU+4yc5KKfZqyy/j0TxS2WDU5uq/XBQ=="},"keyId":1},"registrationId":54,"advSecretKey":"iMwfA+UoP6mimjZldLeLR3gVcB+/29QkCa6dDVAVWgQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"M6VECXF9","me":{"id":"2349019760022:71@s.whatsapp.net","lid":"266773823750344:71@lid"},"account":{"details":"CMj6iKUBEMXJgboGGAkgACgA","accountSignatureKey":"nnOLPbxk4rFhbL24RmTEwW+gT5k2bqMvw5uyGQ2MDW0=","accountSignature":"eKLBWdxRBsH0Tb3rOfg6usVk8BIT3yYG9k2oALDeefK+hQLMtx/1sVYbp3PewgwLp+jB81bECJcYzdb598CTCg==","deviceSignature":"+e76fVmmG5SGm1EELg4RuzrrqNINiIPOk97D7VXHNSWccjXS6kJLvjmL66oygysdR0xCMZvp/00CxrTNDCItAw=="},"signalIdentities":[{"identifier":{"name":"2349019760022:71@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZ5ziz28ZOKxYWy9uEZkxMFvoE+ZNm6jL8ObshkNjA1t"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIDQ=="},"lastAccountSyncTimestamp":1732273362,"lastPropHash":"3AoShs","myAppStateKeyId":"AAAAAOqi"}",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n5vvij.jpg",
SUDO_NB: process.env.SUDO_NB || "263780934873",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
