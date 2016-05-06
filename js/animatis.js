//Initials22
window.rotate_bomb =0;


$(document).ready(function(){

    scroll_action();


   





    $('#hand_balloon').animate({
        bottom: '95'
    }, 1700, function(){});   

    $("#pro").flip({
        axis: 'x',
        trigger: 'manual',
        speed: '450',
        reverse: true
    });

    $('#hand_woman').animate({
        marginLeft: '0'
    },{ duration: 900, queue: false}); 


    //$( "#hand_diri" ).effect( "shake", 300 );       

    var old_scroll_top = 0;
    $(window).scroll( function(e){



        /* Check the location of each desired element 
        $('.slidy').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var current_scroll_top = $(document).scrollTop();
        var scroll_delta = current_scroll_top - old_scroll_top;

        var cur_object_pos = $(this).css('marginLeft');
        //alert (cur_object_pos);
        var new_pos = parseFloat(cur_object_pos)-(scroll_delta*70);
        // If the object is completely visible in the window, fade it in 

        if( bottom_of_window > bottom_of_object ){
        $('#infoblock').html($(this).attr('id'));
        if ($(this).attr('id') == 'hand_light' && parseFloat($(this).css('height')) > 760){
        // $('#hand_light').animate({'height':760},{ duration: 850, queue: false});
        }
        //$(this).animate({'marginLeft':new_pos},{ duration: 1250, queue: false, easing: 'easeInSine'});
        }
        old_scroll_top = current_scroll_top;
        }); 


        $('.rotate').each( function(i){
        //$(this).animateRotate(360, 1500);
        });
        */



        var current_scroll_top = $(document).scrollTop();
        var scroll_delta = current_scroll_top - old_scroll_top;

        var nh = 50-$(window).scrollTop()/15;
        var nh2 = 50-$(window).scrollTop()/10;
        var nh4 = $(window).scrollTop()/40;
        var perc = $(window).scrollTop()/100*(2/100);
        perc += 15;





        if ($(window).scrollTop() > 0 && $(window).scrollTop() <1400) {

            if (typeof intervalID === 'undefined') {
                intervalID =  setInterval(function() {
                    $("#pro").flip('toggle');
                }, 450);
            }
            $('#mountains').animate({
                marginLeft: '-7000'
            }, 520200, "linear", function(){$('#mountains').css('marginLeft', 0)}); 
            $('#trees').animate({
                marginLeft: '-7000'
            }, 280200, "linear", function(){$('#trees').css('marginLeft', 0)}); 

            $('#tree2').animate({
                marginLeft: '-7000'
            }, 180200, "linear", function(){$('#tree2').css('marginLeft', 0)});  

            $('#fence').animate({
                marginLeft: '-7000'
            }, 100200, "linear", function(){$('#fence').css('marginLeft', 0)}); 

            if (window.shake != 1){ //Если туалет не занят
                window.shake=1;
                var botm = parseFloat($("#hand_diri").css('bottom'));
                var botm2 = botm-25;
                // $("#hand_diri").animate({left:'-20px'},  1200, 'linear');
                // $("#hand_diri").animate({left:'0px'},  800, 'linear');                   
            }

            //var pilar_of = $('#pilar').offset();




            clearTimeout($.data(this, 'scrollTimer'));

            /*
            $.data(this, 'scrollTimer', setTimeout(function() {
            // do something

            if ($(window).scrollTop() > pilar_of.top-400 && window.light_on!=1){
            //alert ('123');
            var but_of = $('#pushin_up_my_buttons_babe').offset();
            var hand_of = $('#hand_finger').offset();
            window.light_on=1;
            //alert (but_of.top+' '+hand_of.top);

            $('#hand_finger').animate({
            left: but_of.left-7,
            top: but_of.top-373
            }, {duration: 990 , easing:"easeOutCirc", queue:false, complete: function(){
            $('#pushin_up_my_buttons_babe').delay(30 ).css('background-image', 'url(files/button_off.png)');
            // alert ('123');
            $('#light').css('display', 'block'); 
            $('#light').animate({opacity: '0.8'}, {duration: 50 ,  easing:"linear"});
            $('#light').delay( 40 ).animate({opacity: '0.3'}, {duration: 200 ,  easing:"linear"});

            $('#light').delay( 30 ).animate({opacity: '1'}, {duration: 300 ,  easing:"linear"});

            // alert (but_of.top+' '+hand_of.top);
            $('#hand_finger').delay(50 ).animate({marginLeft: '30px',marginTop:'290px'}, {duration: 400 ,  easing:"linear"});
            }});  
            }
            else {
            if (window.light_on==1){
            window.light_on=0;
            //$('#light').css('display', 'none'); 
            //$('#pushin_up_my_buttons_babe').css('background-image', 'url(files/button_on.png)');
            }
            }
            }, 50));
            */



        }     
        else {   
            clearInterval(intervalID);
            delete intervalID;
            $('#hand_diri').stop(true, false);
            window.shake=0;
            $('.slidy').stop(true, false);
            $('.return').css('marginLeft', 0);

        }

        // var fm = $('#space').height();


        //$('#clouds').animate({bottom: '15%'}, 1000);


        /*
        $('#space').animate({
        height: nh
        },{ duration: 150, queue: false}); 
        */



        old_scroll_top = current_scroll_top;

    });  
});

function scroll_action(){
     $(window).on('scrolldelta', function (e) {
        var top = e.scrollTop;
        var topDelta = e.scrollTopDelta;
        topDelta *=-0.15;
        var h = new Array();
        var space1_max = 22;
        var space1_coef = 2;
        // 
        h[0] = parseFloat($('#mountains').css('marginTop'))+topDelta/space1_coef;
        h[1] = $('#space').height()+topDelta/space1_coef;
        h[2] = $('#space2').height()+topDelta/space1_coef;
        h[3] = $('#space3').height()+topDelta/space1_coef;

        for (z=1; z<4; z++) if (h[z] > space1_max) h[z] = space1_max;


        //alert (h[0]);


    h[4] = $('#space4').height()+topDelta;
    h[5] = $('#space5').height()+topDelta;
    var b1 = parseFloat($('#spaceman').css('bottom'))-topDelta*1.4;



        // var nm = (10+$(window).scrollTop()/35)*-1;
        if ($(window).scrollTop() > 200 && $(window).scrollTop() < $(window).height()){
            //if (h[0]>=0) $('#mountains').css('marginTop', h[0]);
            $('#space').height(h[1]);
            $('#space2').height(h[2]);
            $('#space3').height(h[3]);

            var bomb_delta = e.scrollTopDelta*15;
            if (bomb_delta > 0){
                $('#bomb').fadeIn('fast');
                var bomb_top = parseFloat($('#bomb').css('marginTop'));
                var rot_delta = Math.round(bomb_delta/30);
                window.rotate_bomb -=rot_delta;

                if ( window.rotate_bomb < -40) window.rotate_bomb =-40;
                $("#bomb").rotate({ 
                    animateTo:window.rotate_bomb
                });

                $('#bomb').animate({
                    marginTop: bomb_top+bomb_delta
                },{ duration: 500, easing: "linear", queue: false, complete: function(){
                    bomb_top = parseFloat($('#bomb').css('marginTop'));
                //$('#bomb').css('display', 'none')
                //alert (bomb_top);
            }});
            }
        }

        //$('#space2').height(nh/2);
        // $('#space3').height(nh);
        // if (nm > -30) $('#trees').css('marginTop', nm);

        //alert (b1);
        if ($(window).scrollTop() > 1200 && h[4] < 45 && h[5]>0){
            $('#space4').height( h[4]);
            $('#space5').height( h[5]);
            $('#spaceman').css('bottom', b1+'px');

        }
    });
}


jQuery.event.special.scrolldelta = {
    delegateType: "scroll",
    bindType: "scroll",
    handle: function (event) {
        var handleObj = event.handleObj;
        var targetData = jQuery.data(event.target);
        var ret = null;
        var elem = event.target;
        var isDoc = elem === document;
        var oldTop = targetData.top || 0;
        var oldLeft = targetData.left || 0;
        targetData.top = isDoc ? elem.documentElement.scrollTop + elem.body.scrollTop : elem.scrollTop;
        targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
        event.scrollTopDelta = targetData.top - oldTop;
        event.scrollTop = targetData.top;
        event.scrollLeftDelta = targetData.left - oldLeft;
        event.scrollLeft = targetData.left;
        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = handleObj.type;
        return ret;
    }
};


var rotation = function (){

    $("#eagle").rotate({
        angle:0,
        animateTo:360,
        callback: rotation
    });
}
        //rotation();