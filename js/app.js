// Element declaration
const $catClickerElement = $("#catClicker");
const $clickCounterElement = $("#clickCounter");
const $catListULElement = $(".cat-list ul");



// Other variables declaration
let timesClicked = 0;

let catInfo = {
    1: {
        name: "piff",
        image: "images/piff.jpg",
        clicks: 0
    },
    2: {
        name: "muggle",
        image: "images/muggle.jpg",
        clicks: 0
    },
    3: {
        name: "albin",
        image: "images/albin.jpg",
        clicks: 0
    },
    4: {
        name: "marcia",
        image: "images/marcia.jpg",
        clicks: 0
    },
    5: {
        name: "olivia",
        image: "images/olivia.jpg",
        clicks: 0
    }
};

$(document).ready(function() {
    for(const cat in catInfo) {
        $catListULElement.append(`<li><a href="#" data-cat-reference="${cat}">${catInfo[cat].name}</a></li>`)
    }
    $catClickerElement.attr("src", catInfo[1].image);
});

// Listeners
$catListULElement.on("click", "li a", function(e) {
    $targetCatReference = $(e.target).attr("data-cat-reference");
    $catClickerElement.attr("src", catInfo[$targetCatReference].image);
    $catClickerElement.attr("data-cat-reference", $targetCatReference);
    $clickCounterElement.html(catInfo[$targetCatReference].clicks);

});

$catClickerElement.click(function(e) {
    $targetCatReference = $(e.target).attr("data-cat-reference");
    catInfo[$targetCatReference].clicks++;
    $clickCounterElement.html(catInfo[$targetCatReference].clicks);
});
