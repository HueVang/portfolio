$(function() {
  console.log('jQuery Loaded');

  // jQuery functions for interacting with menu
  var well = false; // put true to show logs, false to hide.
  var menuOpen = false;
  var delay = 1500, openMenu;

  if (menuOpen) {
    $('.menu').hover(function(){
      checkOpen();
    });
  } else {
    $('.menu').hover(function(){
      openMenu = setTimeout(function(){
        if(menuOpen == false){
          menu();
        } else {
          menuOpen = false;
          checkOpen();
        }
      }, delay);
    }, function(){
      clearTimeout(openMenu);
    });
  };

  $('.menu').on('click', function(){
    clearTimeout(openMenu);
    if(menuOpen == false){
      menu();
    } else {
      menuOpen = false;
      checkOpen();
    }
  });

  var menu = function(){
    $('<div><a href=' + '"index2.html"' + '><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></a></div>').appendTo('.options').hide().fadeIn(400);
    $('<div><a href=' + '"portfolio.html"' + '><span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span></a></div>').appendTo('.options').hide().fadeIn(800);
    $('<div><a href=' + '"contact2.html"' + '><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></a></div>').appendTo('.options').hide().fadeIn(1200);
    menuOpen = true;
    checkOpen();
  };

  var checkOpen = function() {
    if (menuOpen) {
      $('.menu div').addClass('glow');
      console.log('Menu opened');
    } else {
      $('.menu div').removeClass('glow');
      $('.options div').fadeOut(1000, function(){
        $('.options').empty();
      })
      console.log('Menu not open');
    };
  };


  // jQuery functions for interacting with home page content
  function hovers() {
    $('#first').mouseenter (
      function() {
        $('#firsts').css({'color': 'white', 'transform': 'scale('+ 1.1 +')'});
        $('#middles').css({'filter': 'blur(2px)'});
        $('#lasts').css({'filter': 'blur(2px)'});
      }
    );
    $('#first').mouseleave (
      function() {
        $('#firsts').css({'color': 'white', 'transform': 'scale('+1+')'});
        $('#middles').css({'filter': 'none'});
        $('#lasts').css({'filter': 'none'});
      }
    );

    $('#middle').mouseenter (
      function() {
        $('#middles').css({'color': 'white', 'transform': 'scale('+ 1.1 +')'});
        $('#firsts').css({'filter': 'blur(2px)'});
        $('#lasts').css({'filter': 'blur(2px)'});
      }
    );
    $('#middle').mouseleave (
      function() {
        $('#middles').css({'color': 'white', 'transform': 'scale(' + 1 + ')'});
        $('#firsts').css({'filter': 'none'});
        $('#lasts').css({'filter': 'none'});
      }
    );

    $('#last').mouseenter (
      function() {
        $('#lasts').css({'color': 'white', 'transform': 'scale(' + 1.1 + ')'});
        $('#firsts').css({'filter': 'blur(2px)'});
        $('#middles').css({'filter': 'blur(2px)'});
      }
    );
    $('#last').mouseleave (
      function() {
        $('#lasts').css({'color': 'white', 'transform': 'scale(' + 1 + ')'});
        $('#firsts').css({'filter': 'none'});
        $('#middles').css({'filter': 'none'});
      }
    );

  };

  hovers();

  // jQuery functions for interacting with portfolio page

  var divOpen1 = false;
  var tech = 'Technologies';
  var mov1 = '<video autoplay loop muted><source src="videos/cohort.mp4" type="video/mp4"></video>';
  var tryit1 = '<a href="https://huevang-cohorttracker.herokuapp.com/">&#9734 Try it &#9734</a>';
  var cohortTrackerP1 = 'Node.js | AngularJS | Express | PostgreSQL | jQuery';
  var cohortTrackerP2 = 'username: Cloud | password: 1234';
  if (well) console.log('This is divOpen1:', divOpen1);

  $('#cohortTracker').on('click', function() {
    if (divOpen1) {
      $(this).removeClass('highlight');
      $('#cohortTrackerDiv .projectInfo').slideUp('slow', function() { $(this).remove(); });
      if (well) console.log('This is divOpen1 if:', divOpen1);
      divOpen1 = false;
      if (well) console.log('This is divOpen1 if after change:', divOpen1);
    } else {
      $(this).addClass('highlight');
      $('<div class=' + '"projectInfo"' + '>' + mov1 + '<h4>' + tech + '</h4><p>' + cohortTrackerP1 + '</p><h4>' + tryit1 + '</h4><p>' + cohortTrackerP2 + '</p></div>').appendTo('#cohortTrackerDiv').hide().slideDown('slow');
      if (well) console.log('This is divOpen1 else:', divOpen1);
      divOpen1 = true;
      if (well) console.log('This is divOpen1 else after change:', divOpen1);
    }
  });

  var divOpen2 = false;
  var mov2 = '<video autoplay loop muted><source src="videos/calculator.mp4" type="video/mp4"></video>';
  var tryit2 = '<a href="https://huevang-calculator.herokuapp.com/">&#9734 Try it &#9734</a>';
  var calculatorP1 = 'Node.js | Express | Bootstrap | jQuery';
  var calculatorP2 = '';
  if (well) console.log('This is divOpen2:', divOpen2);

  $('#calculator').on('click', function() {
    if (divOpen2) {
      $(this).removeClass('highlight');
      $('#calculatorDiv .projectInfo').slideUp('slow', function() { $(this).remove(); });
      if (well) console.log('This is divOpen2 if:', divOpen2);
      divOpen2 = false;
      if (well) console.log('This is divOpen2 if after change:', divOpen2);
    } else {
      $(this).addClass('highlight');
      $('<div class=' + '"projectInfo"' + '>' + mov2 + '<h4>' + tech + '</h4><p>' + calculatorP1 + '</p><h4>' + tryit2 + '</h4><p>' + calculatorP2 + '</p></div>').appendTo('#calculatorDiv').hide().slideDown('slow');
      if (well) console.log('This is divOpen2 else:', divOpen2);
      divOpen2 = true;
      if (well) console.log('This is divOpen2 else after change:', divOpen2);
    }
  });

  var divOpen3 = false;
  var mov3 = '<video autoplay loop muted><source src="videos/etch.mp4" type="video/mp4"></video>';
  var tryit3 = '<a href="#">&#9734 Try it &#9734</a>';
  var etchASketchP1 = 'HTML5 | CSS3 | jQuery';
  var etchASketchP2 = '';
  if (well) console.log('This is divOpen3:', divOpen3);

  $('#etchASketch').on('click', function() {
    if (divOpen3) {
      $(this).removeClass('highlight');
      $('#etchASketchDiv .projectInfo').slideUp('slow', function() { $(this).remove(); });
      if (well) console.log('This is divOpen3 if:', divOpen3);
      divOpen3 = false;
      if (well) console.log('This is divOpen3 if after change:', divOpen3);
    } else {
      $(this).addClass('highlight');
      $('<div class=' + '"projectInfo"' + '>' + mov3 + '<h4>' + tech + '</h4><p>' + etchASketchP1 + '</p><h4>' + tryit3 + '</h4><p>' + etchASketchP2 + '</p></div>').appendTo('#etchASketchDiv').hide().slideDown('slow');
      if (well) console.log('This is divOpen3 else:', divOpen3);
      divOpen3 = true;
      if (well) console.log('This is divOpen3 else after change:', divOpen3);
    }
  });

  var divOpen4 = false;
  var mov4 = '<video autoplay loop muted><source src="videos/google.mp4" type="video/mp4"></video>';
  var tryit4 = '<a href="#">&#9734 Try it &#9734</a>';
  var googleP1 = 'HTML5 | CSS3';
  var googleP2 = '';
  if (well) console.log('This is divOpen4:', divOpen4);

  $('#google').on('click', function() {
    if (divOpen4) {
      $(this).removeClass('highlight');
      $('#googleDiv .projectInfo').slideUp('slow', function() { $(this).remove(); });
      if (well) console.log('This is divOpen4 if:', divOpen4);
      divOpen4 = false;
      if (well) console.log('This is divOpen4 if after change:', divOpen4);
    } else {
      $(this).addClass('highlight');
      $('<div class=' + '"projectInfo"' + '>' + mov4 + '<h4>' + tech + '</h4><p>' + googleP1 + '</p><h4>' + tryit4 + '</h4><p>' + googleP2 + '</p></div>').appendTo('#googleDiv').hide().slideDown('slow');
      if (well) console.log('This is divOpen4 else:', divOpen4);
      divOpen4 = true;
      if (well) console.log('This is divOpen4 else after change:', divOpen4);
    }
  });

  var divOpen5 = false;
  var mov5 = '<video autoplay loop muted><source src="videos/poker.mp4" type="video/mp4"></video>';
  var tryit5 = '<a class="notavailable" href="#">&#9734 Try it &#9734</a>';
  var pokerAppP1 = 'Node.js | Express | AngularJS | PostgreSQL | Bootstrap | Socket.io';
  var pokerAppP2 = '';
  if (well) console.log('This is divOpen5:', divOpen5);

  $('#pokerApp').on('click', function() {
    if (divOpen5) {
      $(this).removeClass('highlight');
      $('#pokerAppDiv .projectInfo').slideUp('slow', function() { $(this).remove(); });
      if (well) console.log('This is divOpen5 if:', divOpen5);
      divOpen5 = false;
      if (well) console.log('This is divOpen5 if after change:', divOpen5);
    } else {
      $(this).addClass('highlight');
      $('<div class=' + '"projectInfo"' + '>' + mov5 + '<h4>' + tech + '</h4><p>' + pokerAppP1 + '</p><h4>' + tryit5 + '</h4><p>' + pokerAppP2 + '</p></div>').appendTo('#pokerAppDiv').hide().slideDown('slow');
      if (well) console.log('This is divOpen5 else:', divOpen5);
      divOpen5 = true;
      if (well) console.log('This is divOpen5 else after change:', divOpen5);
    }
  });


});
