$(".npc-1").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-1-text").removeClass("invisible");
    $(".text-box").fadeIn(100);
    $(".npc-1-text").fadeIn(100);
});

$(".npc-1-text").click(function(){
    $(".text-box").fadeOut(100);
    $(".npc-1-text").fadeOut(100);
});

$(".npc-2").click(function(){
    $(".text-box").removeClass("invisible");
    $(".npc-2-text").removeClass("invisible");
    $(".text-box").fadeIn(100);
    $(".npc-2-text").fadeIn(100);
  });

$(".npc-2-text").click(function(){
    $(".text-box").fadeOut(100);
    $(".npc-2-text").fadeOut(100);
});