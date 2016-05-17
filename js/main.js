$(document).ready(function() {

    // Slider base (Carousel)

    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on");
    });

    function sliderJS (obj, sl) {
        var ul = $(sl).find("ul");
        var bl = $(sl).find("li.slider"+obj);
        var step = $(bl).width();
        $(ul).animate({marginLeft: "-"+step*obj}, 500);
    }
    $(document).on("click", ".slider .nav span", function() {
        var sl = $(this).closest(".slider");
        $(sl).find("span").removeClass("on");
        $(this).addClass("on");
        var obj = $(this).attr("rel");
        sliderJS(obj, sl);
        return false;

    });

    // Girl Slide

    $(document).on('click', ".carousel-button-right",function(){
        var carusel = $(this).parents('.carousel');
        right_carusel(carusel);
        return false;
    });

    $(document).on('click',".carousel-button-left",function(){
        var carusel = $(this).parents('.carousel');
        left_carusel(carusel);
        return false;
    });
    function left_carusel(carusel){
        var block_width = $(carusel).find('.carousel-block').outerWidth();
        $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
        $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
        $(carusel).find(".carousel-items").animate({left: "0px"}, 200);

    }
    function right_carusel(carusel){
        var block_width = $(carusel).find('.carousel-block').outerWidth();
        $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
            $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
            $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
            $(carusel).find(".carousel-items").css({"left":"0px"});
        });
    }


    // Slider circle

    $(document).ready(function(){

        $( ".slider-dash" ).slider({
            animate: true,
            min: 1,
            max: 100,
            range: true,
            step: 1,
            values: [15, 70],
            slide: function(event, ui) {
                $( "#left_count" ).html(ui.values[ 0 ]);
                $( "#right_count" ).html(ui.values[ 1 ]);
            }
        });
    });

    $(function() {
        $(".knob").knob();

        var val, up = 0, down = 0, i = 0
            , $idir = $("div.idir")
            , $ival = $("div.ival")
            , incr = function () {
                i++;
                $idir.show().html("+").fadeOut();
                $ival.html(i);
            }
            , decr = function () {
                i--;
                $idir.show().html("-").fadeOut();
                $ival.html(i);
            };
        $("input.infinite").knob(
            {
                'min':0
                ,'max':20
                ,'stopper':false
                ,'change':function(v){
                if(val>v){
                    if(up){
                        decr();
                        up=0;
                    }else{up=1;down=0;}
                }else{
                    if(down){
                        incr();
                        down=0;
                    }else{down=1;up=0;}
                }
                val=v;
            }
            }
        );
    });

});