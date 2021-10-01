const APIROOTPATH = "https://www.bungie.net/Platform";
const APIKEY = "590a11a58d0e4f139defe8c5531661ad";
const AUTHURL = "https://www.bungie.net/en/oauth/authorize";
const AUTHTOKEN = "https://www.bungie.net/platform/app/oauth/token/";
const AUTHID = 23872;

function auth() {
    let req = new Request(`${AUTHURL}?client_id=${AUTHID}&response_type=code&state=6i0mkLx79Hp91nzWVeHrzHG4`);
    fetch(req).then(response => {
        console.log(response);
    })
}

window.addEventListener("load", function() {
    document.getElementById("test").addEventListener("click", function() {
        auth();
    })
});