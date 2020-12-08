var isCircleAnimated = false;
var isCircleReturned = false;
var isChartAnimated = false;

var isProjectBgAnimated = false;


$( document ).ready(function() {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(
    "#backgroundTextLanding", 
    {
        y: 440,
        ease: "none",
        scrollTrigger:{
            trigger: '.landing',
            start: "top top",
            endTrigger: '.skills',
            end: "center top",
            toggleActions: "play none none reverse",
            scrub: true

        },
    })

  gsap.from(".socialIcons", {
      scrollTrigger:{
          trigger: ".landingTitle",
          start: "bottom top",
          endTrigger: "section.contact",
          end: "top top",
          toggleActions: "play reverse restart reverse"
         },
         x: 100,
         opacity: 0,
          ease: "expo.out"
  })
  


  gsap.to(
    "#backgroundTextInterest", 
    {
        y: 440,
        ease: "none",
        scrollTrigger:{
            trigger: '.interest',
            start: "top top",
            endTrigger: '.skills',
            end: "center top",
            toggleActions: "play none none reverse",
            scrub: true

        },
    })

  
  gsap.to(
    "#backgroundTextSkills", 
    {
        y: 440,
        ease: "none",
        scrollTrigger:{
            trigger: '.skills',
            start: "top top",
            endTrigger: '#projectsPanel',
            end: "center top",
            toggleActions: "play none none reverse",
            scrub: true

        },
    })

  gsap.to(
    "#occupationBg", 
    {
        width: "180%",
        ease: "none",
        scrollTrigger:{
            start: ".occupation",
            start: "top top",
            endTrigger: ".education",
            end: "top top",
            toggleActions: "play reverse restart reverse",
            scrub: true,
            // onUpdate: (self) =>{
            //     if(self.scroll() > 4500){
            //         occupationBgDegree = 90;
            //     }else{
            //         occupationBgDegree = 50;
            //     }          
            // }
        },
    })

  window.addEventListener("load", init, true);

  $( ".topnav .circle" ).click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $('.tabsLayout li').each(function(i,val){
        
    //$elem = $(this);
    $width = $(this).width -5;
    $('.tabsLayout li>.line.active').css('width', $width+'px');
    
    $(this).on('click', function(){
        
        $('.tabsLayout li>.line.active').css('width', $width+'px');
        $('.line').removeClass('active').removeClass('animated bounceIn');
        $(this).find('.line').addClass('active').addClass('animated bounceIn');

        $('#tabContent-0').addClass('hide');
        $('#tabContent-1').addClass('hide');
        $('#tabContent-2').addClass('hide');

        $('#tabContent-0').removeClass('active');
        $('#tabContent-1').removeClass('active');
        $('#tabContent-2').removeClass('active');


        $('#tabContent-'+i).removeClass('hide');
        $('#tabContent-'+i).addClass('active');
        $('#tabContent-'+i).css('opacity', '1');
        
        let $height = $('#tabContent-'+i).outerHeight(true) + 314;
        console.log($height);
        
        if(i ==0){
            changeColorForTab0();
        }
        else if(i == 1){
          changeColorForTab1();
        }
        
         else if(i == 2){
            changeColorForTab2();
         }
        
        
    });
    
  });


  $(window).scroll(function(){


    let $windowTop = $(window).scrollTop();
    var y = window.pageYOffset;
      

      if(isScrolledIntoView('.skills',200) 
      || isScrolledIntoView('#projectsPanel',200) 
      || isScrolledIntoView('.occupation',200) 
      || isScrolledIntoView('.education',200)
      || isScrolledIntoView('.contact',200)){
        $('.topnav .socialIcons a').css('color','#fdf1e7');
        $('.topnav .circle').css('background','#fdf1e7');
        
        if(!isCircleAnimated){
          isCircleAnimated = true;
          isCircleReturned = false;
          $('.topnav .circle').css('color','#000000');
          //$('.topnav .circle').css('transform', 'translate(10px, 0px)');
        }
        
        
      }else{
        if(!isCircleReturned){
          isCircleReturned = true;
          isCircleAnimated = false;
          $('.topnav .circle').css('transform', 'translate(0px, 0px)');
        }
        $('.topnav .socialIcons a').css('color','#000000');
        $('.topnav .circle').css('background','#000000');
        $('.topnav .circle').css('color','#ffffff');
      }



      if(isScrolledIntoView('.interest',200)){
        animateInterest();
      }

    

      if(isScrolledIntoView('.skills',200)){
        animateSkills();
      }


      if(isScrolledIntoView('#projectsPanel',200)){
        animateProjectElements();
        $('.topnav .circle').css('transform', 'translate(0px, -120px)');
      }else{
        $('.topnav .circle').css('transform', 'translate(0px, 0px)');
      }

      if(isScrolledIntoView('.occupation',200)){
        animateOccupation();
      }


      if(isScrolledIntoView('.education',200)){
        animateEducation();
      }
      
      if(isScrolledIntoView('.education',200) || isScrolledIntoView('.contact',200)){
        animateContact();
        $('#backgroundTextContact').css('opacity', '1');
      }else{
        $('#backgroundTextContact').css('opacity', '0');
      }

      // if(isScrolledIntoView('.contact',200)){
       
      // }




      if(isScrolledIntoView('#workTimeline',200)){
        $('.occupation').css('background','#3f1201');
      }else{
        $('.occupation').css('background','#151515');
      }
    

 });


});




function isScrolledIntoView(elem,before) {
  var pos = $(elem).offset().top;
  var bottom = $(elem)[0].getBoundingClientRect().bottom;

  //console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
return ($(window).scrollTop() >= pos-before && bottom >0);
}



function init(){

    loadTypeWriter();

    gsap.from("#text1Landing", {
        opacity: 0, 
        duration: 3,
        y: -160, 
        ease: "expo.out"
    })

    gsap.from("#text2Landing", {
        opacity: 0, 
        duration: 4,
        y: -160, 
        ease: "expo.out"
    })

    gsap.from("#text3Landing", {
        opacity: 0, 
        duration: 5,
        y: -160, 
        ease: "expo.out"
    })

    gsap.from("#text4Landing", {
        opacity: 0, 
        duration: 6,
        y: -160, 
        ease: "expo.out"
    })


    gsap.from(".landingTitle", {
        opacity: 0, 
        duration: 3,
        y: 160, 
        ease: "expo.out"
    })

    gsap.to(".typewrite_animate", {
        opacity: 1, 
        duration: 3,
        y: -100, 
        ease: "expo.out"
    })
}



function animateInterest(){
  gsap.to(
    ".interest", 
    {
        duration: 2,
        backgroundImage:"linear-gradient(to right, #f7d673 100%, #ededed 50%)",
        //backgroundColor: "#f7d673",
        opacity: 1,
        ease: "expo.out"
    })


    
    $('#text1Interest').css('transform', 'translate(0px, 0px)');
    $('#text1Interest').css('opacity', '1');

    $('#text2Interest').css('transform', 'translate(0px, 0px)');
    $('#text2Interest').css('opacity', '1');

    $('#text3Interest').css('transform', 'translate(0px, 0px)');
    $('#text3Interest').css('opacity', '1');

    $('#text4Interest').css('transform', 'translate(0px, 0px)');
    $('#text4Interest').css('opacity', '1');


    $('#interestSectionHeading').css('transform', 'translate(0px, 0px)');
    $('#interestSectionHeading').css('opacity', '1');

  
  
    setTimeout(function () {
      $('section.interest .interestSide').css('transform', 'translate(0px, 0px)');
      $('section.interest .interestSide').css('opacity', '1');
    }, 500);
  
  
}




function animateSkills(){
  
  gsap.to(
    ".skills", 
    {
        duration: 2,
        backgroundImage:"linear-gradient(to right, #151515 100%, #f7d673 50%)",
        //backgroundImage:"linear-gradient(to right, #171717 50%, #f3f3f3 50%)",
        //backgroundColor: "#151515",
        opacity: 1,
        ease: "expo.out"
    })

    
    $('#text1Skills').css('transform', 'translate(0px, 0px)');
    $('#text1Skills').css('opacity', '1');

    $('#text2Skills').css('transform', 'translate(0px, 0px)');
    $('#text2Skills').css('opacity', '1');

    $('#text3Skills').css('transform', 'translate(0px, 0px)');
    $('#text3Skills').css('opacity', '1');

    $('#text4Skills').css('transform', 'translate(0px, 0px)');
    $('#text4Skills').css('opacity', '1');


    $('#skillsSectionHeading').css('transform', 'translate(0px, 0px)');
    $('#skillsSectionHeading').css('opacity', '1');

  
    setTimeout(function () {
      if(!isChartAnimated){
        start_count();
        isChartAnimated = true;
      }
    }, 700);
  
}


function animateProjectElements(){

  if(!isProjectBgAnimated){
    gsap.to(
      "#projectsPanel", 
      {
          duration: 2,
          backgroundImage:"linear-gradient(135deg, #000000 57%, #151515 50%)",
          //backgroundColor: "#f7d673",
          opacity: 1,
          ease: "expo.out"
      })

      isProjectBgAnimated = true;
  }
  

    $('#projectSectionHeading').css('transform', 'translate(0px, 0px)');
    $('#projectSectionHeading').css('opacity', '1');

    $('#projectsPanel .tabsLayout').css('transform', 'translate(0px, 0px)');
    $('#projectsPanel .tabsLayout').css('opacity', '1');

    $('#projectsPanel .tabContent').css('transform', 'translate(0px, 0px)');
    $('#projectsPanel .tabContent').css('opacity', '1');

    
    $('.tabsLayout').css('opacity', '1');
    $('.tabContent').css('opacity', '1');

}



function animateEducation(){

}


function changeColorForTab0(){
  gsap.to(
    "#projectsPanel", 
    {
        duration: 2,
        backgroundImage:"linear-gradient(135deg, #000000 57%, #151515 50%)",
        //backgroundColor: "#f7d673",
        opacity: 1,
        ease: "expo.out"
    })

    $('.tabsLayout li').css('color', '#fff');
    $('.tabsLayout li>.line.active').css('background', '#605edf');
    $('.tabContent').css('color','#fff');
    $('#projectSectionHeading').css('text-shadow','4px 4px #8c9727');
    $('#projectSectionHeading').css('color', '#fdf1e7');
}

function changeColorForTab1(){
  gsap.to(
    "#projectsPanel", 
    {
        duration: 2,
        backgroundImage:"linear-gradient(65deg, #fdf1e7 57%, rgb(234 234 234) 50%)",
        //backgroundColor: "#f7d673",
        opacity: 1,
        ease: "expo.out"
    })

    $('.tabsLayout li').css('color', '#000');
    $('.tabsLayout li>.line.active').css('background', '#000');
    $('.tabContent').css('color','#000');
    $('#projectSectionHeading').css('text-shadow','rgb(170 179 195) 4px 4px');
    $('#projectSectionHeading').css('color', '#33291e');
    
}



function changeColorForTab2(){
  gsap.to(
    "#projectsPanel", 
    {
        duration: 2,
        backgroundImage:"linear-gradient(135deg, #168cb2 57%, #ededed 50%)",
        //backgroundColor: "#f7d673",
        opacity: 1,
        ease: "expo.out"
    })

    $('.tabsLayout li').css('color', '#000');
    $('.tabsLayout li>.line.active').css('background', '#000');
    $('.tabContent').css('color','#000');
    $('#projectsPanel').css('min-height', '100px');
    $('#projectSectionHeading').css('color', '#fdf1e7');
    $('#projectSectionHeading').css('text-shadow','4px 4px #276497');
    $('#projectsPanel').css('min-height', '100vh');
}



function animateOccupation(){

  gsap.to(
    "#occupationBg", 
    {
        duration: 1,
        backgroundImage: `linear-gradient(53deg, #3f1201 50%, #151515 50%)`,
        opacity: 1,
        ease: "expo.out"
    })

    $('#occupationSectionHeading').css('transform', 'translate(0px, 0px)');
    $('#occupationSectionHeading').css('opacity', '1');
    
    $('#occupationContainer > div.container > div > div > ul').css('transform', 'translate(0px, 0px)');
    $('#occupationContainer > div.container > div > div > ul').css('opacity', '1');

    $('.timeline>li .timeline-circle-red').addClass('enterView');

}



function animateEducation(){

  gsap.to(
    "#educationBg", 
    {
        duration: 1,
        backgroundImage: `linear-gradient(${53}deg, #151515 60%, #3f1201 50%)`,
        opacity: 1,
        ease: "expo.out"
    })

    $('#educationSectionHeading').css('transform', 'translate(0px, 0px)');
    $('#educationSectionHeading').css('opacity', '1');
    
    $('#educationContainer > div.container > div > div > ul').css('transform', 'translate(0px, 0px)');
    $('#educationContainer > div.container > div > div > ul').css('opacity', '1');

    $('.timeline>li .timeline-circle-red').addClass('enterView');

  
}

function animateContact(){
  // $('#text1Contact').css('transform', 'translate(0px, 0px)');
  // $('#text1Contact').css('opacity', '1');

  // $('#text3Contact').css('transform', 'translate(0px, 0px)');
  // $('#text3Contact').css('opacity', '1');

  // $('#text4Contact').css('transform', 'translate(0px, 0px)');
  // $('#text4Contact').css('opacity', '1');
}




function start_count(){
  var ctx = document.getElementById("polarChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: ["Java", "Web", "Javascript", "Android", "Flutter", "Kotlin", ".NET", "GO"],
          datasets: [{
              barPercentage: 0.7,
              backgroundColor: [
                  "#ffba02",
                  "#ffba02",
                  "#ffba02",
                  "#ffba02",
                  "#ffba02",
                  "#ffba02",
                  "#ffba02",
                  "#ffba02"
              ],
              data: [95, 90, 85, 82, 75, 70, 62, 55]
          }]
      },
      options:{
        responsive: true,
        maintainAspectRation: false,
        animation: {
          duration: 6000,
          easing: "easeOutExpo"
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
              ticks: {
                  fontColor: "#fdf1e7",
                  fontSize: 16,
                  beginAtZero: true
              }
          }],
          xAxes: [{
              ticks: {
                  fontColor: "fdf1e7",
                  fontSize: 14,
                  beginAtZero: true
              }
          }]
        }
      }
  });
}

