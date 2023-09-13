const sumAll = function(valueOne,valueTwo) {
    let sum=0;
    if(typeof valueOne!=="number" || typeof valueTwo!=="number" || valueOne<0 || valueTwo<0)
    {
        return 'ERROR';
    }
    for(let i=Math.min(valueOne,valueTwo);i<=Math.max(valueOne,valueTwo);i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
