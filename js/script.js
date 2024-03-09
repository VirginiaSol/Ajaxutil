//Event handling when the document is loaded
document.addEventListener("DOMContentLoaded", function (event){

    //Unobstrusive element binding
    document.querySelector("button").addEventListener("click", function(){
        var self = this;
        var name = "";

            //Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.txt", function(request){
            self.name = request.responseText;
            console.log(self.name);
            document.querySelector("#content").innerHTML = "<h2>Hello " +
                self.name + "!";
            });
        //document.querySelector("#content").innerHTML = "<h2>Hello " +
                //self.name + "!";//if we leave it like this the response 
                //is not catch because server is respond asynchronuous 
        });
    });