
$(document).ready(function () {
    $.getJSON('https://raw.githubusercontent.com/distributed-text-services/reader/master/register.json', function (data) {
        $(data.endpoints).each(function (i) {
            var col = this
            var apicall = col.endpoint
            $.getJSON(apicall, function (endpoint) {
                console.log(endpoint)
                var collection = apicall.replace(endpoint[ '@id'], '') + endpoint.collections
                $.getJSON(collection, function (coll) {
                    console.log(coll)
                    $(coll.member).each(function () {
                        $('#dtsNav').append('<div class="collection w3-container w3-margin" data-source="' + collection + '" data-value="' + this[ '@id'] + '">' + this.title + ' (<span class="label">' + this.totalItems + '</span>): ' + this.description + '</div>')
                    });
                });
            });
        });
    });
});


$('#RegisterApi').change(function () {
var apicall = $(this).val()
    $.getJSON(apicall, function (endpoint) {
        console.log(endpoint)
        var collection = apicall.replace(endpoint[ '@id'], '') + endpoint.collections
        $.getJSON(collection, function (coll) {
            console.log(coll)
            $(coll.member).each(function () {
                $('#dtsNav').html('<div class="collection w3-container w3-margin" data-source="' + collection + '" data-value="' + this[ '@id'] + '">' + this.title + ' (<span class="label">' + this.totalItems + '</span>): ' + this.description + '</div>')
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
            thiscol.append('<div class="member w3-container w3-margin" \
            data-source="' + col + '" data-value="' + this[ '@id'] + '">' + this.title + ' (<span class="label">' + this.totalItems + '</span>): ' + this.description + '</div>')
        });
    });
});