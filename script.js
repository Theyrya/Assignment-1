$(document).ready(function() {
    setTimeout(function() {
        $(".bottom").html(`<img src="myimg.jpg" width="300" height="300" alt="No"></img>
`);
    }, 5000); // 5000ms = 5 seconds
});

function updateTime() {
    const timeElement = document.getElementById("timestamp");
    const now = new Date();
    const formattedTime = now.toLocaleString();
    timeElement.textContent = "Current Time: " + formattedTime;
};
updateTime();
setInterval(updateTime, 1000);

