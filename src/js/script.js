;(function() {

  $( '#header .menu-btn' ).on( 'click', function() {
  	$( '#nav' ).toggleClass( 'active' );
  });

  $( '.accordion .item' ).on( 'click', function() {
  	$( this ).toggleClass( 'active' );
  });

})();