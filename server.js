const http = require('http');
const fs = require('fs');
const url = require('url');


//call back function
serveStatic = function (req, res)
{
	let fileName = '.' + url.parse(req.url).pathname;

	fs.readFile(fileName,function (err, content)
	{
		if (err)
		{
			return err
		}
		else
		{
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(content);
			res.end();
		}
		
	});
	
}
 
const myserver = http.createServer(serveStatic); //create a server object
myserver.listen(80, function() {console.log("Listening on port 80" )}); 

