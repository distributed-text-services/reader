
$( document ).ready(function() {
$.getJSON('register.json', function (data) {
    console.log(data)
    
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        
        var select = $('#RegisteredApi')
        
        select.append('<option value="' + obj.endpoint + '">' + obj.label + ' (' + obj.status + ')</option>')
    }
});

});
