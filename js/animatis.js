//Initials22
window.rotate_bomb =0;


$(document).ready(function(){
    action_preset();
    scroll_action();
    var st = $(window).scrollTop();

    
});

function scroll_action(){
   $(window).on('scrolldelta', function (e) {

    var top = e.scrollTop;
    var topDelta = e.scrollTopDelta;
    var st = $(window).scrollTop();
    var wh = $(window).height();
    topDelta *=-0.15;
    var fence = $('#fence').offset();
    var plan1 = $('#plan1').offset();

    if (st > 0 && st <1400) scene1_animo();
    else scene1_animo_stop();

    //1st scene parallax
    if (st >= fence.top-wh+20 && st < fence.top){   
        parallax (topDelta, $('.space'), 'height', 0.5, Array (0, 22));
        parallax (topDelta, $('#clouds'), 'marginBottom', 1.2, Array (-60, 0));    
        bombing();
    }

    //1st scene parallax
    if (st >= plan1.top-wh-40 && st < plan1.top){
        parallax (topDelta, $('.space1'), 'height', 1, Array (0, 40));
        parallax (topDelta, $('#selphie'), 'marginBottom', -3.5, Array (0, 115));
        parallax (topDelta, $('#zonder1'), 'marginTop', -1, Array (0, 20));
   }       
 });
}

function parallax(topDelta, obj, attr, speed, limits){
     val = parseFloat(obj.css(attr))+topDelta*speed;
     if (val >= limits[0] && val <= limits[1]) obj.css(attr, val);

}


function action_preset(){
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
    marginLeft: '0',
    marginBottom: '0'
},{ 
    duration: 900, 
    queue: false,
    complete: function (){
        
        $("#pro").flip('toggle');
           
        $("#hand_diri").animate({left:'0px', marginBottom:'20px'},  900, 'linear');
        $("#hand_diri").animate({left: '-10px', marginBottom:'-10px'},  3000, 'easeOutQuart');  
   }
}); 
}

function scene1_animo(){
    if (typeof intervalID === 'undefined') { //Пропэллер
            intervalID =  setInterval(function() {
                $("#pro").flip('toggle');
            }, 450);
        }

    /* First scene animo */
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
    //$("#hand_woman").animate({left:'-100%'},  3200, 'linear');
    //$("#hand_diri").animate({left:'-80px'},  2200, 'easeOutBack');

    /*if (window.shake != 1){ //Если туалет не занят
        window.shake=1;
        var botm = parseFloat($("#hand_diri").css('bottom'));
        var botm2 = botm-25;
        $("#hand_diri").animate({left:'-20px'},  1200, 'linear');
        $("#hand_diri").animate({left:'0px'},  800, 'linear');                   
    }*/

}

function bombing(){

}

function scene1_animo_stop(){
    if (typeof intervalID !== 'undefined') clearInterval(intervalID);
    delete intervalID;
    $('#hand_diri').stop(true, false);
    window.shake=0;
    $('.slidy').stop(true, false);
    $('.return').css('marginLeft', 0);
     $("#hand_woman").animate({left:'0'},  2200, 'linear');
    $("#hand_diri").animate({left:'0'},  2200, 'easeOutBack');
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