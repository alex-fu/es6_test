//import shim from 'system.global/shim';
//shim();

{
    let a = 10;
    var b = 1;
}

//console.log(a);  // Exception, a is not visible out of block, but var does
console.log(b);


for (let i = 0; i < 10; i++) {
    console.log(i)
}

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
        return("Function return "+i);
    }
}
a[6]();

console.log('===================')

// 
{
    console.log(a[7]())
//    let a=[]  // if I uncomment this, a will be undefined in last sentence
}


console.log('===================')
function f() { console.log('I am outside'); }
{
  if (true) {
      console.log("inside");
      f();
    function f() { console.log('I am inside'); }  // don't write these code, use `let f = function() { console.log('I am inside') }` instead. Because define function inside block will cause undefined result in web browsers
  }

  f();
}

console.log('===================')

{
  const foo = Object.freeze({})
  // foo.props = 123;
  // console.log(foo.props) // print 'undefined', means `foo.props = 123` didn't execute
}

console.log('===================')

var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if(typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
}

{
  let a = {
    'id': 111,
    'name': 'name111'
  }
  console.log('name: ' + a.name)
  a.name = "changedname111";
  console.log('name: ' + a.name)

  constantize(a)

  // a.name = "cannot change name111";
  console.log('name: ' + a.name) // will output 'changedname111', because a is const
}

