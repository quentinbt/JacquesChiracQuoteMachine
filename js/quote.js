$.get( "http://api.icndb.com/jokes/random?lastName=Chirac&firstName=Jacques", function( data ) {
  $( "quote" )
    .append(data.value.joke );
  $( ".message" )
    .html('<a class="btn btn-danger" href="https://twitter.com/intent/tweet?text='+data.value.joke+'">Tweet it!</a>' );
}, "json" );

$("#getMessage").on("click", function(){
  $.get( "http://api.icndb.com/jokes/random?lastName=Chirac&firstName=Jacques", function( data ) {
  $( "quote" )
    .text(data.value.joke );
  $( ".message" )
    .html('<a class="btn btn-danger" href="https://twitter.com/intent/tweet?text='+data.value.joke+'">Tweet it!</a>' );
}, "json" )});