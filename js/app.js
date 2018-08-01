// Element declaration
const $catClicker1Element = $("#catClicker1");
const $catClicker2Element = $("#catClicker2");
const $clickCounterElement = $("#clickCounter");

const $catName1 = $("#catName1");
const $catName2 = $("#catName2");

// Other variables declaration
let timesClicked = 0;
const catName1 = "Piff";
const catName2 = "Muggle";

$(document).ready(function() {
    $catName1.html(catName1);
    $catName2.html(catName2);
});

$catClicker1Element.click(function(){
    timesClicked++;
    $clickCounterElement.html(timesClicked);
});
$catClicker2Element.click(function(){
    timesClicked++;
    $clickCounterElement.html(timesClicked);
});
