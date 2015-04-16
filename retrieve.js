var getADate = function(date, i){ //return date - i day: i=0 -> today
    date.setDate(date.getDate() - i);
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 
    
    var today = mm+'/'+dd+'/'+yyyy;
    return today;
}

var getTxtDate = function(date, i){ //return date - i day: i=0 -> today
    date.setDate(date.getDate() - i);
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 
    
    var today = mm+'/'+dd+'/'+yyyy;
    return today;
}

var get = function(){
	var request = new XMLHttpRequest();
	request.open("GET", "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?q={\"active\": true}&apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl");
	request.send(null);
    return request;
}


//window.onload = function() {
    var body=document.getElementsByTagName('section')[0];
    var tbl=document.createElement('table');
    tbl.style.fontSize ="x-small";
    tbl.style.width='70%';
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

    // retrieve all records - edit the get() function to change the query
    var response = get();
    var records;
    response.onreadystatechange= function(){
        if(response.readyState === 4){
            if(response.status === 200) {
                records = $.parseJSON(response.response);
                // record all ids
                var ids = new Array();
                for (var i=0; i<records.length; i++){
                   if(ids.indexOf(records[i].name) == -1){
                        ids.push(records[i].name);
                    }
                }

                // loop through all ids and complete records
                for (var i=0; i<ids.length; i++){
                    var tr = document.createElement('tr'); // create line
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(ids[i]));
                    tr.appendChild(td);
                    for (var j=0; j<7; j++){ // for each day
                        var td = document.createElement('td');
                        var text = "";
                        for (var k=0; k<records.length; k++){
                            if(ids[i] == records[k].name && dateArray[j] == records[k].date){
                                text += records[k].exercise + '\n' + records[k].duration +'\n';
                            }
                        }
                        td.appendChild(document.createTextNode(text));
                        tr.appendChild(td);
                    }
                    tbdy.appendChild(tr);
                }
                tbl.appendChild(tbdy);
                body.appendChild(tbl);

           }
        }
    }
//}


