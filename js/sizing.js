
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(['top_back.jpg']).preload();

// makes sure the whole site is loaded
jQuery(window).load(function() { 
    jQuery("#splash").fadeOut("slow", function(){
        setTimeout(function() {        
            $('#previews').animate({
                bottom: '-80'
            }, 600, function(){
                $('#previews').css('z-index', '10');          
            });     
        }, 600);
    });

});

$(document).ready(function() {
    function setSizes(){
        var w =$(window).width();
        var h =$(window).height();

      
        var coef = w/h;
        var h10 = h/100*10-140+(h/10);
        $('#content1').css('marginTop', h10+'px');


        var diri_coef = 2.46;
        var h1 = parseInt($('#hand_woman').height());  
        w1 = h1+(h1/6);
        $('#diri').animate({marginLeft: w1+'px'}, 0);
        var w8 = w/10*8;



        if (w <= 1160) $("#dim_css").attr('href', "../css/style_1160.css");
        else if (w <= 1300) $("#dim_css").attr('href', "../css/style_1300.css");
        else if (w <= 1366) $("#dim_css").attr('href', "../css/style_1366.css");
        else if (w < 1450) $("#dim_css").attr('href', "../css/style_1450.css");
        else $("#dim_css").attr('href', "../css/style_holder.css");



        var m3 = h1*diri_coef;
        $('#analyzer').html('left: '+w+'*'+h   
        +' st1='+screw_bottom 
        );


        var c1 = h1*diri_coef/10*7/10; //
        var c2 = h1/10*7/10; //
        var screw_left = Math.round(c1*3.63-11);
        var screw_bottom = Math.round(c2*0.85);
        $('#screw').css('marginLeft', screw_left+'px');
        //$('#screw').css('bottom', screw_bottom+'px');
             
         var bomb_left = Math.round(c1*4.7);
         $('#bomb_holder').css('marginLeft', bomb_left+'px');

    }

    setSizes();
    window.onresize = function(event) {
        setSizes();
    }     
});


