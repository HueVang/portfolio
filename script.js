$(function() {
  console.log('This is jQuery, loaded 100%!');

  function hovers() {
    $('#first').mouseenter (
      function() {
        $('#firsts').css({'color': 'teal', 'transform': 'scale('+ 1.1 +')'});
        $('#middles').css({'filter': 'blur(2px)'});
        $('#lasts').css({'filter': 'blur(2px)'});
      }
    );
    $('#first').mouseleave (
      function() {
        $('#firsts').css({'color': 'black', 'transform': 'scale('+1+')'});
        $('#middles').css({'filter': 'none'});
        $('#lasts').css({'filter': 'none'});
      }
    );

    $('#middle').mouseenter (
      function() {
        $('#middles').css({'color': 'teal', 'transform': 'scale('+ 1.1 +')'});
        $('#firsts').css({'filter': 'blur(2px)'});
        $('#lasts').css({'filter': 'blur(2px)'});
      }
    );
    $('#middle').mouseleave (
      function() {
        $('#middles').css({'color': 'black', 'transform': 'scale('+1+')'});
        $('#firsts').css({'filter': 'none'});
        $('#lasts').css({'filter': 'none'});
      }
    );

    $('#last').mouseenter (
      function() {
        $('#lasts').css({'color': 'teal', 'transform': 'scale('+ 1.1 +')'});
        $('#firsts').css({'filter': 'blur(2px)'});
        $('#middles').css({'filter': 'blur(2px)'});
      }
    );
    $('#last').mouseleave (
      function() {
        $('#lasts').css({'color': 'black', 'transform': 'scale('+1+')'});
        $('#firsts').css({'filter': 'none'});
        $('#middles').css({'filter': 'none'});
      }
    );

  };

  hovers();

}); // end function
