var extendedsettings = (function() {

descriptions = {};

$(document).on("extendedsettings", function(event, data) {
	if (data.header == "") {
        }
});

togglePowerManagement = function() {
    var pmToggle = document.getElementById("pm-toggle");

    // Check if the "on" class is present
    if (pmToggle.classList.contains("on")) {
        pmToggle.classList.remove("on");
        // Here, add your logic to disable the power management
        console.log("Power Management Disabled");
    } else {
        pmToggle.classList.add("on");
        // Here, add your logic to enable the power management
        console.log("Power Management Enabled");
    }
};

return {
    togglePowerMangement: togglePowerManagement
};

})();
