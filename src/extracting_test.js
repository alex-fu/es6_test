import { println } from './println';

let [a, b, c] = [1, 2, 3];
println(a, b, c)

let [head, ...tail] = [1, 2, 3, 4];
println(tail)

let [x , y , ...z] = ['a'];
println(x, y, z);

{
  //let [a, b] = 1;  //will raise exception
}

{
  let [x, y, z] = new Set(["a", "b", "c"])
  println(x, y, z)
}

println("============")

println("generator also can be extracted")
function* fibs() {
  let a = 0;
  let b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a+b];
  }
}

{
  var [x1, x2, x3, x4, x5] = fibs();
  println(x1, x2, x3,x4,x5)
}

{
  println("we can set default value for extract variables")
  let [foo = true] = [];
  println(foo);

  [x, y = 'b'] = ['a'];
  println(x, y);
  [x, y='b'] = ['a', undefined];
  println(x, y);
}

{
  println("we can also extract variables from object");
  let {foo, bar} = { foo:  "xxx", bar: "yyy" };
  println(foo, bar);

  // use another name to extract keys
  let { first: f, last: l } = { first: 'hello', last: 'world' };
  println(f, l)

  println("also applied to complicate object")
  let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };

  let { p: [x, { y }] } = obj;
  println(x, y)
  //println(p) // this line will raise exception because p is pattern not varaiable
  //
}

{
  println("more complicated example");
  let obj = {};
  let arr = [];

  ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
  println(obj, arr)
}

{
  println("extract function!!!")
  let { log, sin, cos } = Math;
  println(log(10))
}

{
  println("treat array as object to extract");
  let arr = [1, 2, 3, 4];
  let {0: first, [arr.length - 1]: last, length: len} = arr; // length is a key of array
  println(first, last, len)
}

{
  println("treat string as array to extract");
}

{
  println("Number and Boolean also can be extract, they will be converted to object first: Number => Number.prototype; Boolean => Boolean.prototype")
  let { toString: s } = 123;
  println(s)
  //println(s())
}

{
  println("Function arguments also can be extract");
  let f = function add([x, y]) {
    return x + y;
  }
  println(f([1, 2]));

  let arr = [[1,2], [3,4]].map(([a, b]) => a + b);
  println(arr);

  let f1 = function move({x = 1, y = 2} = {x: 99, y: 88}) {
    return [x, y];
  }
  println(f1({}));  // print [1, 2]
  println(f1({x: 3}));  // print [3, 2]
  println(f1({x: 3, y: 8})); // print [3, 8]
  println(f1());  // print [99, 88]

  let arr1 = [1, undefined, 3].map((x = 'yes') => x);
  println(arr1);
}

{
  println("some usage");
  {
    let x = 1, y = 2;
    println(x, y);
    [x, y] = [y, x];
    println(x, y);
  }
  {
    let m = new Map();
    m.set('first', 'hello');
    m.set('second', 'world');
    println(m)
    for (let [key, value] of m) {
      println(key + ' = ' + value);
    }
//    let m1 = m.map( ([k, v]) => k );
//    println(m1)
  }

}

{
  let m = { 1: 'aaa', 2: 'bbb' }
  println(m)
  for (let k in m) {
    println(k + ' => ' + m[k])
  }
}
