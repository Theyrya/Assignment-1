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

$(document).ready(function() {
    setTimeout(function() {
        $(".bottom").html('<img src="../image/WhatsApp Image 2025-02-16 at 12.39.40_07f1cdae.jpg" width="300" height="300" alt="">');
    }, 5000); // 5000ms = 5 seconds
});