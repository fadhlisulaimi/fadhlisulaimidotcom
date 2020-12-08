
$( document ).ready(function() {
   console.log('Website has started');

    let animateOnce = true;


   function resizeBlackBorder(){

      let summary = $('.summary');
      let summaryTop = summary.offset().top - 40;
      let summaryHeight = summary.height();

      $('.darkBg').css("height", summaryHeight * 1.6);
      $('.darkBg').css("top", summaryTop);

   }

   resizeBlackBorder();

   $(window).resize(function() {
       resizeBlackBorder();
    });


   $('.tabsLayout li').each(function(i,val){
        
        //$elem = $(this);
        $width = $(this).width -5;
        $('.tabsLayout li>.line.active').css('width', $width+'px');
        
        $(this).on('click', function(){
            //console.log($(this).width());
            
             $('.tabsLayout li>.line.active').css('width', $width+'px');
            $('.line').removeClass('active').removeClass('animated bounceIn');
            $(this).find('.line').addClass('active').addClass('animated bounceIn');
            $('#tabContent-'+i).addClass('active').siblings().removeClass('active');
            
            let $height = $('#tabContent-'+i).outerHeight(true) + 314;
            console.log($height);
            
            if(i ==0){
                
                $('#projectsPanel').css('background','#f5f5f5');
                $('#projectsPanel').css('color','#000');
                $('.tabsLayout li>.line.active').css('background', '#000');
                $('#projectsPanel').css('min-height', '100px');
                $('#projectsPanel .sectionHeading h1').css('border-bottom','3px solid black');
            }
            else if(i == 1){
                
                $('#projectsPanel').css('background','#f3f8f6');
                $('#projectsPanel').css('color','#000');
                $('.tabsLayout li>.line.active').css('background', '#000');
                $('#projectsPanel').css('min-height', '100px');
                $('#projectsPanel .sectionHeading h1').css('border-bottom','3px solid black');
            }
            
             else if(i == 2){
           
                $('#projectsPanel').css('background','#1a1a1a');
                 //console.log('Tab 3 Height: ' + $('#tabContent-2').outerHeight(true));
                 $('#projectsPanel').css('color','#FFF');
                 $('.tabsLayout li>.line.active').css('background', '#FFF');
                $('#projectsPanel').css('min-height', '100px');
                 $('#projectsPanel .sectionHeading h1').css('border-bottom','3px solid white');
            }
            
           
            //$('#line-'+i).addClass('animated bounceIn').addClass('active').siblings().removeClass('active');
            
            
        });
        
    });

  

   $(window).scroll(function(){


      let $windowTop = $(window).scrollTop();

        if ($windowTop > $('#interestPanel').offset().top && $windowTop < ($('#contactPanel').offset().top - 50) && !isScrolledIntoView2('#landingPanel',0) && !isScrolledIntoView2('#projectsPanel',50)) {
            hideNavBar(false);
        }else{
          hideNavBar(true);
          
        }


        if(isScrolledIntoView2('.summary',500)){
             $('.darkBg').addClass('makefull');
            $('.summary').css("opacity","1");
            $('.interest').addClass('animateInterest');
        }

         else if(isScrolledIntoView2('#skillPanel',100)){
              changeSectionTitle('#skillPanel','Personal Skills','#FFFFFF',20);

              if(animateOnce){
              animateProgressBar("#table-skill",true);
              animateOnce = false;
              }

        }

        

        if(isScrolledIntoView2('#interestPanel',200)){
           changeSectionTitle('#interestPanel .wrapper','Interests','#000000',-20);
             $('#interestPanel .wrapper .card').css("opacity","1");
        }else{
            $('#interestPanel .wrapper .card').css("opacity","0");
        }
       
       
        if(isScrolledIntoView2('#projectsPanel',100)){
             $('.tabContent').addClass('animateTabContent');
        }else{
            $('.tabContent').removeClass('animateTabContent');
        }

      


        if(isScrolledIntoView2('#workPanel',300)){
          changeSectionTitle('#workPanel','Work Experience','#FFFFFF',20);
            $('.timeline>li .timeline-circle').addClass('enterView');
        }else{
            $('.timeline>li .timeline-circle').removeClass('enterView');
        }



        if(isScrolledIntoView2('#educationPanel',300)){
           changeSectionTitle('#educationPanel','Education','#FFFFFF',20);
             $('.timeline>li .timeline-circle-red').addClass('enterView');
        }else{
             $('.timeline>li .timeline-circle-red').removeClass('enterView');
        }


        if(isScrolledIntoView2('#contactPanel', 100)){
            $('#contactPanel .contactHeading').addClass('moveTextY');
              $('#contactPanel .wrapper .contactSubHeading').addClass('moveTextX');
              $('#contactPanel .wrapper p').addClass('moveTextX');             

        }else{
           $('#contactPanel .contactHeading').removeClass('moveTextY');
           $('#contactPanel .wrapper .contactSubHeading').removeClass('moveTextX');  
           $('#contactPanel .wrapper p').removeClass('moveTextX');          
        }  

   });

   $('.arrowUp').on('click', function(){
      $('html').animate({scrollTop:0},1000);
  
    });

   
});



function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

    //console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isScrolledIntoView2(elem,before) {
    var pos = $(elem).offset().top;
    var bottom = $(elem)[0].getBoundingClientRect().bottom;

    //console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
  return ($(window).scrollTop() >= pos-before && bottom >0);
}


function isScrolledIntoView3(windowTop, elem,before) {

        let pos = $(elem);
        let posTop = pos.offset().top;
        let posHeight = $(elem).height();

    //console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
  return (posTop <= windowTop +posHeight+before && posTop + posHeight > windowTop);
}

function changeSectionTitle(idSelector,title,textColor, level){

	let elemSection = $('.sectionTitle');
	elemSection.text(title);
    
   //console.log(title);
    //console.log(title);
    //console.log(a);
    var background = $(idSelector).css('backgroundColor');
    $('.navbar').css("background", LightenDarkenColor(hexc(background),level));
    $(elemSection).css("color", textColor);
    $(elemSection).css("border-bottom", '2px solid '+textColor);
    //console.log("LALA"  + hexc(background));
    //console.log(getBackgroundColor(background));
	//console.log(elemSection.text() = title);
}
  

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
    return color;
}

function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function animateProgressBar(id,activated){


  let progress = $(id+' .progress');
  //console.log(progress.length);
  $(progress).each(function(){


    let progressBar = $(this).find('.progress-bar');
    let percentageDiv = $(this).find('.percentage');
    let dataPercentage = progressBar.attr('data-percentage');
    //console.log(progressBar.attr('data-percentage'));

    //progressBar.animate({width:dataPercentage+"%"}, 1500, "easeOutExpo");

        
      $({percentage: 0}).animate({percentage: dataPercentage}, {
        duration : 1500,
        easing: "easeOutExpo",
        step: function () {
            // percentage with 1 decimal;
            var percentageVal = Math.ceil(this.percentage);

            progressBar.css('width', percentageVal+"%");
            percentageDiv.text(percentageVal + '%');
             
        },
      
    });
     
    
   

    

    //percentageDiv.text('0').animate(dataPercentage);

  })

  /*

    var percentageDiv = $(id+' .percentage');


    //console.log(id);
    var progress = $(id+' .progress-bar');
    var percentageDiv = $(id+' .percentage');
    

     for(let i =0; i<progress.length; i++){
         
     
         if(!canSee){

               progress.eq(i).stop(true,false);
              progress.eq(i).animate({width:"0%"}, 500);
              
             
         }else{
             
            var percentage = Math.ceil(progress.eq(i).attr('data-percentage'));
            //console.log(percentage);
            //console.log(percentage);
         
            progress.eq(i).animate(
              {width:percentage+"%"},  {text(percentage)}, 
              1500, 
              "easeOutExpo"
          );
            



            //percentageDiv.eq(i).animate.text(percentage);
             
         }
         
     }

     */
        
}

function hideNavBar(hide){

  if(hide){
    $('.navbar').css("height","0px");
        $('.navbar').css("padding-top","0px");
        $('.navbar').css("margin-top","-30px");
        $('.sectionTitle').css("padding-bottom","0px");
        $('.sectionTitle').text("");
  }else{
        
        $('.navbar').css("height","70px");
        $('.navbar').css("padding-top","15px");
        $('.navbar').css("margin-top","0px");
        $('.sectionTitle').css("padding-bottom","5px");
  }

}
/*

$(window).scroll(function(){

    let $windowTop = $(window).scrollTop();


    //console.log('WindowTop: '+windowTop);
    $('.animate').each(function(){

        let $elemTop = $(this).offset().top;
        let $wrapperHeight = $(this).height();

        //console.log($elemTop);

        if($elemTop <= $windowTop+$wrapperHeight && $elemTop + $wrapperHeight > $windowTop+200){
        //console.log('Greater');
          $(this).addClass('showWrapper');
        }else{
           $(this).removeClass('showWrapper');
        }

    });

});





$(document).scroll(function() {

    
    //console.log($(window).scrollTop());
    //console.log($('#interestPanel').offset().top);
    
     //var pos = $('.pcwxPanel').offset().top;
    //var bottom = $('.pcwxPanel')[0].getBoundingClientRect().bottom;
    //console.log('A '+ pos);
    //console.log('B '+ bottom);
    
     //var docViewTop = $('.pcwxPanel').offset().top - window.innerHeight;
    
    //console.log('B '+ docViewTop);
    if ($(window).scrollTop() > $('#interestPanel').offset().top && $(window).scrollTop() < ($('#contactPanel').offset().top - 50) && !isScrolledIntoView2('#landingPanel')) {
        hideNavBar(false);
    }else{
      hideNavBar(true);
      
    }


    if(isScrolledIntoView2('#interestPanel',300)){
       changeSectionTitle('#interestPanel .wrapper','Interests','#000000',-20);
         $('#interestPanel .wrapper .card').css("opacity","1");
    }else{
        $('#interestPanel .wrapper .card').css("opacity","0");
    }

    if(isScrolledIntoView2('.summary',400)){
      $('.summary').css("opacity","1");
      $('.interest').css("opacity","1");
    } 

    else if(isScrolledIntoView2('#skillPanel',0)){
       changeSectionTitle('#skillPanel','Personal Skills','#FFFFFF',20);
       animateProgressBar("#table-skill",true);
    } 

    else if(isScrolledIntoView2('#pcwxPanel',300)){
       changeSectionTitle('#pcwxPanel','Personal Projects','#FFFFFF',20);
    } 

    else if(isScrolledIntoView2('#familyzPanel',300)){
       changeSectionTitle('#familyzPanel','Personal Projects','#FFFFFF',20);

    } 

     else if(isScrolledIntoView2('#mdpPanel',300)){
       changeSectionTitle('#mdpPanel',' Personal Projects','#FFFFFF',20);

    }

    else if(isScrolledIntoView2('#workPanel',300)){
       changeSectionTitle('#workPanel','Work Experience','#FFFFFF',20);
       $('.timeline>li .timeline-circle').css("opacity","1");
        $('.timeline>li .timeline-circle').css("margin-top","0px");
       
    } 

    else if(isScrolledIntoView2('#educationPanel',300)){
       changeSectionTitle('#educationPanel','Education','#FFFFFF',20);
        $('.timeline>li .timeline-circle-red').css("opacity","1");
        $('.timeline>li .timeline-circle-red').css("margin-top","0px");
    }
    
    else{


    }


    /*


    if(isScrolledIntoView2('#landingPanel')){
       changeSectionTitle('#landingPanel .wrapper','','#000000',20);
    }

    else if(isScrolledIntoView2('#interestPanel')){
       changeSectionTitle('#interestPanel .wrapper','PERSONAL INTERESTS','#000000',-20);
  

    }
    
    else if(isScrolledIntoView2('#pcwxPanel')){
       changeSectionTitle('#pcwxPanel','PERSONAL PROJECTS','#FFFFFF',20);

    }

    else if(isScrolledIntoView2('#familyzPanel')){
       changeSectionTitle('#familyzPanel',' PERSONAL PROJECTS','#FFFFFF',20);

    }
    

    else if(isScrolledIntoView2('#mdpPanel')){
       changeSectionTitle('#mdpPanel',' PERSONAL PROJECTS','#FFFFFF',20);

    }
    
    
    else if(isScrolledIntoView2('#workPanel')){
       changeSectionTitle('#workPanel','WORK EXPERIENCE','#FFFFFF',20);
       $('.timeline>li .timeline-circle').css("opacity","1");
        $('.timeline>li .timeline-circle').css("margin-top","0px");
       
    }
    
    else if(isScrolledIntoView2('#educationPanel')){
       changeSectionTitle('#educationPanel','EDUCATION','#FFFFFF',20);
        $('.timeline>li .timeline-circle-red').css("opacity","1");
        $('.timeline>li .timeline-circle-red').css("margin-top","0px");
    }
    
    else if(isScrolledIntoView2('#skillPanel')){
       changeSectionTitle('#skillPanel','EXPERTISE','#FFFFFF',20);
       animateProgressBar("#table-skill",true);
    }
    
    
    else{

         
    }

    
    
   
    
    //let progressBar2 = $('.pcwxPanel');
    


    //console.log(containerOffset);
    //console.log($(window).scrollTop);
    
    
        //console.log(docViewTop.top);
   
    //if ($(window).scrollTop() >= containerOffset && $(window).scrollTop() <= progressBar2.top) {
		//console.log('hihi');
      //   changeSectionTitle('.pcwxPanel');
   
    //}
	
  
	
	
	
    
    
});

*/

