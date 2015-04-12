var request = new XMLHttpRequest();
id = queryString.substring(3,queryString.length);
request.open("GET", "https://api.mongolab.com/api/1/databases/fitnessdb/collections/fitnessrecord/" + id + "?apiKey=7IhjRbwiIXy1Y2kOl6HE2LiNqQf_LQEl");
request.send(null);
