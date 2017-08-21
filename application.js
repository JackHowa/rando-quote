$(document).ready(function() {
  $("#quote-button").on("click", function() {
    // prevent any default events from happening without ajax
    event.preventDefault();

    // using the forismatic api
    // via http://forismatic.com/en/api/
    request = $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp',
      }
    })

    request.done(function(response) {
      // need to update the href of the share button
      // so that the text of the tweet is the response quote text
      $("#quote-holder").find("#quote-target").text("");
      $('#quote-target').append(response.quoteText);

      // remove twitter widget upon reload
      // $('#twitter-widget-0').attribute();


  })
})
$("#twitter-share-button").on("click", function() {
    event.preventDefault();
    window.location.href = "https://twitter.com/intent/tweet?text=" + $("#quote-holder").find("#quote-target").text();
  })
})
