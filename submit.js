$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    o['active'] = true;
    //date = new Date();
    //o['submissionData'] = date;
    return o;
};

var send = function(){
	var json = JSON.stringify($('form').serializeObject())
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(json);
    window.alert("Thanks! Your activity has been successfully logged.");
}
