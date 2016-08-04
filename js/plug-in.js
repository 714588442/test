(function ($) {
    $.fn.divMove = function(options) {
        var param = {
            distance: "100", //距离
            direction: "right", //方向
            speed: "1000" //速度
        };
        var opt = $.extend(param,options);
        var Distance = "+=" + opt.distance + "px";
        var Direction = opt.direction;
        var Speed = opt.speed;
        $(this).css("position","relative");
        if(Direction == "bottom"){
            $(this).animate({top:Distance}, Speed);
        }
        if(Direction == "left"){
            $(this).animate({right:Distance}, Speed);
        }
        if(Direction == "top"){
            $(this).animate({bottom:Distance}, Speed);
        }
        if(Direction == "right"){
            $(this).animate({left:Distance}, Speed);
        }
    }
})(jQuery);