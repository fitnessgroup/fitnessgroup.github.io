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

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 
    
    var today = mm+'/'+dd;
    return today;
}

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
    
    // add in record
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?s={\"name\":1}&apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl");
    request.send(null);
    record = JSON.parse(request.response);
  
}

    //for(var i=0;i<3;i++){
    //    var tr=document.createElement('tr');
    //    for(var j=0;j<2;j++){
    //        if(i==2 && j==1){
    //            break
    //        } else {
    //            var td=document.createElement('td');
    //            td.appendChild(document.createTextNode('\u0020'))
    //                i==1&&j==1?td.setAttribute('rowSpan','2'):null;
    //            tr.appendChild(td)
    //        }
    //    }
    //    tbdy.appendChild(tr);
    //}
 
