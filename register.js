
$( document ).ready(function() {
$.getJSON('https://raw.githubusercontent.com/distributed-text-services/reader/master/register.json', function (data) {
    console.log(data)
    $(data.endpoints).each(function( index, element ) {
        var select = $('#RegisteredApi')
        select.append('<option value="' + element.endpoint + '">' + element.label + ' (' + element.status + ')</option>')
        });
  /*  for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        console.log(obj)
        
    }*/
});

});
