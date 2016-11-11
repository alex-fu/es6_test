var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve(p1), 2000)
    setTimeout(() => reject(new Error('p2 fail'), 1000))
})

var p = Promise.all([p1, p2])

p
    .then(result => console.log(result))
    .catch(error => console.log(error))

var p3 = new Promise((resolve, reject) => {
    "use strict";
    setTimeout(() => resolve("p3 complete"), 1000)
})

var p4 = new Promise((resolve, reject) => {
    "use strict";
    setTimeout(() => resolve("p4 complete"), 1100)
})

var pa = Promise.race([p1, p3])
pa.catch(error => console.log(error))
    .then(stat => console.log(stat))

var pb = Promise.all([p4, p3])
pb.then(stat => console.log(stat))


