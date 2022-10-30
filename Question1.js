
let myTransKey = 13542;
let myStoreKey = 130;

// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    //reverse the ids and then add the respective key
  var SID = storeId.toString().split("").reverse().join("");
  SID = parseInt(SID) + myStoreKey;
  var TID = transactionId.toString().split("").reverse().join("");
  TID = parseInt(TID) + myTransKey;
  var docketNum = `${SID}#${TID}`;
  return docketNum;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  shortCode = shortCode.split("#");
  var storeID = shortCode[0];
  var transactionID = shortCode[1];

  //subtract the same key and then reverse the ids again
  storeID = parseInt(storeID.toString()) - myStoreKey;
  storeID = storeID.toString().split("").reverse().join("");

  transactionID = parseInt(transactionID.toString()) - myTransKey;
  transactionID = transactionID.toString().split("").reverse().join("");

  return {
    storeId: parseInt(storeID), // store id goes here,
    shopDate: new Date(), // the date the customer shopped,
    transactionId: parseInt(transactionID) // transaction id goes here
  };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}