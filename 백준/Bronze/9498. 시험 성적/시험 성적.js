const input = require('fs').readFileSync("/dev/stdin");

if (input >= 90) console.log("A");
if (input >= 80 && input < 90) console.log("B");
if (input >= 70 && input < 80) console.log("C");
if (input >= 60 && input < 70) console.log("D");
if (input < 60) console.log("F");