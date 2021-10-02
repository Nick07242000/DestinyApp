const APIROOTPATH = "https://www.bungie.net/Platform";
const APIKEY = "590a11a58d0e4f139defe8c5531661ad";
const AUTHURL = "https://www.bungie.net/en/oauth/authorize";
const AUTHTOKEN = "https://www.bungie.net/platform/app/oauth/token/";
const AUTHID = 23872;

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName)
}

function getToken() {
    /*
    console.log(getParameter("code"));
    let req = new Request(AUTHTOKEN);
    //separar en dos, pasar url,objeto
    req.method = POST;
    req.headers.append('X-API-Key', APIKEY);
    req.headers.append('Content-Type', 'application/x-www-form-urlencoded')
    req.body = `client_id=${AUTHID}&grant_type=authorization_code&code=${getParameter("code")}`;
    */
    fetch(AUTHTOKEN,{
        method:'POST',
        body: `client_id=${AUTHID}&grant_type=authorization_code&code=${getParameter("code")}`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }}).then(response => {
        console.log(response);
        response.json().then(data => {
            console.log(data);
        })
    })
}

document.getElementById("test").addEventListener("click", getToken());
