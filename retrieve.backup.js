var parseResponse = function(json){
    consold.log(json)
}
/* 
// pasted code, revision needed
window.onload = function() {
    var body=document.getElementsByTagName('section')[0];
    var tbl=document.createElement('table');
    // tbl.style.width='70%';
    tbl.setAttribute('border','1');
    var tbdy=document.createElement('tbody');
    // header row for date
    var tr = document.createElement('tr'); // create line
    date = new Date();
    dateArray = new Array(7); // store date value
    dateArray[7] = getTxtDate(date,0);
    for (var i=6; i>0; i--) { // get date value
        dateArray[i] = getTxtDate(date, 1);
    }
    dateArray[0] = "WeChat ID";
    for (var i=0; i<8; i++) { // input date value to table
        var td=document.createElement('td');
        td.appendChild(document.createTextNode(dateArray[i]));
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);

    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

/* Loading JSON objects using JSONP */
(function($) {
    var url = 'https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl';
    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            console.dir(json.name);
        },
        error: function(e) {
            console.log(e.message);
               }
    });
})(jQuery);

var callback = function(json)
{
        alert(json);
}

script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl?callback=callback';

var test = function(str, cb) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl",
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                format: "json"
            },
            success: cb
});
}
test('Hello, world', callback);
$.ajax({
    url: "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl",
    jsonp: "callback",
    dataType: "jsonp",
    data: {
        format: "json"
    },
    success: function( response ) {
                 console.log( response ); // server response
             }
}); */
