$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        // $(".dog").addClass("reveal");
        // $(".dog").css("display", "inline")
        $(".dog").show();
        $(".reveal-btn").hide();
    }
);

$(".reset-btn").click(
    function(){
        location.reload();
    }
);

$( ".draggable" ).draggable();