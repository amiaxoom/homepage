$(".npc-1").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-1-text").removeClass("invisible");
    $(".npc-1-choice").removeClass("invisible");
    // $(".text-box").fadeIn(100);
    // $(".npc-1-text").fadeIn(100);
});

$(".text-box").click(function(){
    $(".text-box").addClass("invisible");
    $(".text").addClass("invisible");
});

// $(".npc-1-choice").click(function(){
//     $(".npc-1-text").addClass("invisible");
//     $(".npc-1-choice-response").removeClass("invisible");
// });

$(".npc-2").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-2-text").removeClass("invisible");
    $(".text-box").fadeIn(100);
    $(".npc-2-text").fadeIn(100);
});