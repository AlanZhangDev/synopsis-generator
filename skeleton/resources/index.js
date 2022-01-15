console.log("Index script loaded")

// Ajax request 
function requestFor(path, callBack) 
{
    // @params:
    //  path - the path to https request e.g: /openai
    //  callBack - function that gets called when response is recived  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            callBack(xhttp)
        }
    }
    xhttp.open("GET", path, true);
    xhttp.send();
    return xhttp
}

// Ajax request success call back example
function requestForFiveEggs() 
{
    requestFor("/I-Want/eggs&5", function(xhttp) {
        console.log(xhttp.responseText)
    })
}