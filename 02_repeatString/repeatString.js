const repeatString = function(stringValue,count) {
    let resultString = '';
    if(count<0) return "ERROR";
    for(let i=0;i<count;i++)
    {
        resultString=resultString+stringValue;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
