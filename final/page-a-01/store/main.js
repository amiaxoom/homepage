$(".npc-clerk").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-clerk-text").removeClass("invisible");
});

$(".text-box").click(function(){
    $(".text-box").addClass("invisible");
    $(".text").addClass("invisible");
});

$(".npc-customer").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-customer-text").removeClass("invisible");
    $(".text-box").fadeIn(100);
    $(".npc-customer-text").fadeIn(100);
});

$(".npc-customer-02").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-customer-02-text").removeClass("invisible");
});

$(".npc-customer-03").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-customer-03-text").removeClass("invisible");
});

$(".board").click(function(){
    $(".board-zoomed-container").removeClass("invisible");
});

$(".board-zoomed-container").click(function(){
    $(".board-zoomed-container").addClass("invisible");
});

$( ".draggable" ).draggable();