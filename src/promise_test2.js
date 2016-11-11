import $ from 'jquery';

// var jsPromise = Promise.resolve($.ajax('www.baidu.com'));
//
// jsPromise.then(result => console.log(result))


// $.ajax({
//     url: 'http://www.baidu.com',
//     method: 'GET',
//     success: function(response) {
//         console.log(response);
//     }
// });

console.log($.trim('   Hello   '))

$.get('https://www.baidu.com', function(html){
    console.log(html)
});