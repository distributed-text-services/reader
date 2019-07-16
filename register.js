
$(document).ready(function () {
    $.getJSON('https://raw.githubusercontent.com/distributed-text-services/reader/master/register.json', function (data) {
        $(data.endpoints).each(function (i) {
            var col = this
            var apicall = col.endpoint
            $.getJSON(apicall, function (data) {
                console.log(data)
                var collection = apicall.replace(data['@id'], '')+data.collections
                  $.getJSON(collection, function (data) {
                console.log(data)
                $(data.member).each(function(){
                    $('#dtsNav').append('<p class="collection w3-container" data-source="' + col + '" data-value="' + this[ '@id'] + '">' + this.title + ' (<span class="label">' + this.totalItems + '</span>): ' + this.description + '</p>')
              });
            });
            });
        });
    });
});


$('body').on('click', '.collection', function () {
    var thiscol = $(this)
    var urn = $(this).data('value')
    var col = $(this).data('source')
    console.log(urn)
    console.log(col)
    var apicall = col + '?id=' + urn
    $.getJSON(apicall, function (data) {
        console.log(data)
        $(data.member).each(function () {
            thiscol.append('<p class="member" \
            data-source="' + col + '" data-value="' + this[ '@id'] + '">' + this.title + ' (<span class="label">' + this.totalItems + '</span>): ' + this.description + '</p>')
        });
    });
});