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
    getParameter("code");
    let req = new Request(`${APIROOTPATH}/User/GetMembershipsForCurrentUser/`);
    req.headers.append('X-API-Key', APIKEY);
    fetch(req).then(response => {
        console.log(response);
    })
}

document.getElementById("test").addEventListener("click", getToken());
