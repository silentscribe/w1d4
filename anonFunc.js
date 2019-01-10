var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(v, i){
  var zSq = 0;
  zSq = Math.pow(v.x, 2) + Math.pow(v.y, 2);
  return(Math.sqrt(zSq));
});

console.log(result[0], result[0] === 5);
console.log(result[1], result[1] === 13);
console.log(result[2], result[2] === 17);