/**
 * Created by anna on 2016.06.26..
 */

$(document).ready(function(){
    console.log('sdofmn');
    createCards(uniqueCards);
});

var uniqueCards = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple'
];

var createCards = function(data){
    var mergedCards = data.concat(data);
    console.log(mergedCards);
};

//function create() {
//
//}