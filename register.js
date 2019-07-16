
$( document ).ready(function() {
$.getJSON('https://raw.githubusercontent.com/distributed-text-services/reader/master/register.json', function (data) {
    $(data.endpoints).each(function( index, element ) {
        var select = $('#RegisteredApi')
        select.append('<option value="' + element.endpoint + '">' + element.label + ' (' + element.status + ')</option>')
        });
  });

});
