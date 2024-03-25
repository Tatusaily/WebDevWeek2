
// When the page is loaded, we call the function displayInfo
function displayInfo(){
    // First we get info and then we put them in the div
    // Windows dimensions
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;

    // Screen dimensions
    let sWidth = screen.width;
    let sHeight = screen.height;
    let saWidth = screen.availWidth;
    let saHeight = screen.availHeight;

    // Browser name and version
    let browserinfo = navigator.userAgent;

    // Current time
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    // Put the info in the div
    const target = document.querySelector('#target');
    target.innerHTML = `
        <p>Window width: ${wWidth}</p>
        <p>Window height: ${wHeight}</p>
        <p>Screen width: ${sWidth}</p>
        <p>Screen height: ${sHeight}</p>
        <p>Screen available width: ${saWidth}</p>
        <p>Screen available height: ${saHeight}</p>
        <p>Browser info: ${browserinfo}</p>
        <p>Current time: ${hours}:${minutes}:${seconds}</p>
    `;
    // Displayinfo calls itself again after 1 second
    setTimeout(displayInfo, 1000);
}

// Call the function displayInfo
displayInfo();