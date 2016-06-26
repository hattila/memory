/**
 * Created by anna on 2016.06.26..
 */

$(document).ready(function(){
    console.log('sdofmn');
    createCards(uniqueCards);

    // click esemény reset gombra
    $('#reset').click(function(){
        $field.html('');
        createCards(uniqueCards);
    });
});

var uniqueCards = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple'
];

var $field = $('#field');

var createCards = function(data){
    var mergedCards = data.concat(data);
    console.log(mergedCards);

    shuffle(mergedCards);
    console.log(mergedCards);

    var cardTemplate = '<div class="card {color}">{index}</div>';

    for (var i=0; i<mergedCards.length; i++) {
        var cardHtml = cardTemplate;
        cardHtml = cardHtml.replace('{color}', mergedCards[i]);
        cardHtml = cardHtml.replace('{index}', i.toString());
        $field.append(cardHtml);
    }
};

//function create() {
//
//}