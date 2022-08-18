let [hour, min] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

min -= 45;

if (min < 0) {
    hour -= 1;
    min += 60;
    if (hour < 0) {
        hour += 24;
    }
}
console.log(hour + ' ' + min)