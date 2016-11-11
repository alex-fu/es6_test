
/*
var println = function(...args) { args.forEach( arg => {
        console.log(arg); 
      })
    }

export {println}
*/

export default function println(...args) {
  args.forEach( arg => {
    console.log(arg);
  })
}

