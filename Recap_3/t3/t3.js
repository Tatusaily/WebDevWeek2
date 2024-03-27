// When the page is loaded, we call the function displayInfo
function displayInfo() {
  // First we get info and then we put them in the div
  // Windows dimensions
  const wWidth = window.innerWidth;
  const wHeight = window.innerHeight;

  // Screen dimensions
  const sWidth = screen.width;
  const sHeight = screen.height;
  const saWidth = screen.availWidth;
  const saHeight = screen.availHeight;

  // Browser name and version
  const browserinfo = navigator.userAgent;

  // Current time
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const date = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`;

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
        <p>Current date: ${date}</p>
        <p>Current time: ${hours}:${minutes}:${seconds}</p>
    `;
  // Displayinfo calls itself again after 1 second
  setTimeout(displayInfo, 1000);
}

// Call the function displayInfo
displayInfo();
