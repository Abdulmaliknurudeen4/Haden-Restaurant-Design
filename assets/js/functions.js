$(document).ready(function () {
  clientStuff();

  setInterval(() => {
    var curActiveClient = $('.quote-belt').find('.active-quote'),
        position = $('.quote-belt').children().index(curActiveClient)
        clientNum = $('.quote-unit').length;
        if(!(position == clientNum-1)){
          $('.active-quote').removeClass('active-quote').next().addClass('active-quote');
        }else{
          $('.quote-unit').removeClass('active-quote').first().addClass('active-quote');
        }

  }, 10000);

  smoothScroll(500);

});

function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){
    var target = $( $(this).attr('href'));
    if(target.length){
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top
      },duration);
    }
  });
}

//client stuffs
function clientStuff() {
 var $this = $(this),
 curActiveClient = $('.quote-belt').find('.active-quote'),
 position = $('.quote-belt').children().index(curActiveClient),
 clientNum = $('.quote-unit').length;

 //setting active client
 $('.quote-unit').first().addClass('active-quote');
 $('.mobile-nav span').first().addClass('active-quote');

 $('.mobile-nav span').click( function() {
   var $this = $(this),
   $siblings = $this.parent().children(),
   position = $siblings.index($this);
   //remove and adding classes to the classes
   $('.quote-unit').removeClass('active-quote').eq(position).addClass('active-quote');
   $siblings.removeClass('active-quote');
   $this.addClass('active-quote');

 });


$('.nav-control-next, .nav-control-prev').on('click',function() {
   //stash
   var $this = $(this),
   curActiveClient = $('.quote-belt').find('.active-quote'),
   position = $('.quote-belt').children().index(curActiveClient),
   clientNum = $('.quote-unit').length;

   if($(this).hasClass('client-control-next')){
        if(position < clientNum -1){
          $('.active-quote').removeClass('active-quote').next().addClass('active-quote');
        } else {
          $('.quote-unit').removeClass('active-quote').first().addClass('active-quote');
        }
      }else{
        if(position===0){
            $('.quote-unit').removeClass('active-quote').last().addClass('active-quote');
       }else{
             $('.active-quote').removeClass('active-quote').prev().addClass('active-quote');
       }

      }
 });

}

function showNav() {
  $('.mobile-nav').toggleClass('active');
}
// fitText
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
