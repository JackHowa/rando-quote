$(document).ready(function() {
  $("#quote-button").on("click", function() {
    // prevent any default events from happening without ajax
    event.preventDefault();

    // test to ensure that button is indeed clicking
    console.log("clicked");

    // define form element
    var $form = $(this);
    var method = $form.attr("method");
    var action = $form.attr("action");

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
      console.log(response);

      $(".container").find("#quote-target").text("");
      // $(".container").find("#horse_errors").remove();
      //
      // $("#add_new_horse_form").hide();
      $('#quote-target').append(response.quoteText);
    })

  })
})
