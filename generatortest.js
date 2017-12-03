// function* foo(x) {
//     yield x + 1;

//     var y = yield null;
//     return x + y;
// }

// var gen = foo(5);
// console.log(gen.next());
// console.log(gen.next());
// gen.send(8);

function* fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.next(10)); // 20
console.log(it.return());  // undefined
console.log(it.next());