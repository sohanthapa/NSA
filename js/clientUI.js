var settingsFilename = 'js/config.json';

function ClientUI(){
}

//CONTENT--------------------------------------------------------------------------------------------------

ClientUI.prototype.init = function(){
	
	
}

ClientUI.prototype.submitComment = function(data){
	
	xmlparser = require('express-xml-bodyparser'),
    XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

	
	 var url = "http://localhost:3000/commentPosted";
        var data = data;
		
        var xhr = new XMLHttpRequest();
        var method = 'POST';

        xhr.open(method, url, true);
        
        xhr.onreadystatechange = function()
        {
                if(xhr.readyState == 4 && xhr.status == 201 ){
                        console.log("\nReadyState:"+xhr.readyState+" - Status:"+xhr.status+"\n - Response:"+JSON.stringify(xhr.responseText)+"\n");
                        addOnSuccess(xhr.responseText);
        }

                else{
                        console.log("FAILED. Response: "+ xhr.status);
                }
        }
		xhr.send(data);

	
}