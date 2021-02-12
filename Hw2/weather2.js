var all = {
    Belarus: -15,
    Russia: -20,
    Spain: 22,
    Italy: 25,
    Japan: 5,
}
console.log(all);

var sum = 0;
for (var i in all) sum += all[i];
var medium = sum / Object.keys(all).length;
console.log("Средняя температура стран: " + medium);

function maxAll(obj) {
    var max = 0;
    for (var i in obj) {
        if(max < obj[i]) max = obj[i];
    }
    return max;
}
var max = maxAll(all);
console.log("Максимальная температура: " + max);