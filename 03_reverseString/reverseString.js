const reverseString = function(stringValue) {
    const stringArray = stringValue.split("");
    const newArray = [];
    for(let i=stringArray.length-1;i>=0;i--)
    {
        newArray.push(stringArray[i]);
    }
    return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
