(function (global) {
//Set up a namespace for out utility
var ajaxUtils = {};

//Return an HTTP request object
function getRequestObject(){
    if (window.XMLHttpRequest){
        return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject){
        //For very old IE browser (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"))
    }
    else{
        globalThis.alert("Ajax is not supported!");
        return(null);
    }
}

//Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = function(requestUrl, responseHandler){
    var request = getRequestObject();
    request.onreadystatechange = function() {
        handleRespose(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); //for POST only

};

//Only calls user provided 'responseHandler' function
//if response is ready and not error
function handleRespose(request, responseHandler){
    if((request.readyState == 4) && (request.status == 200)){
        responseHandler(request);
    }
}

//Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);