const menuIcon = document.getElementById('menuIcon');
const dropdownMenu = document.getElementById('dropdownMenu')

// Toggle Menu on Hamburger Click
menuIcon.addEventListener('click', () => {
    //Prevent click from bubbling to document
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Close menu when clicking outside menu box
document.addEventListener('click', (event) => {
    // If menu is open & click is not on menuIcon/box close menu
    if (
        dropdownMenu.style.display === 'block' &&
        !dropdownMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
    ) {
        dropdownMenu.style.display = 'none';
    }
});

/* HOME PAGE */

// Don't show Welcome alert more than once
if (!sessionStorage.getItem("alertShown")) {
    document.getElementById("customAlert").style.display = "flex";
    sessionStorage.setItem("alertShown", "true");
}

// Pop-up/Alert/Prompt
function closeModal() {
    document.getElementById("customAlert").style.display = "none";
}

/* SETTINGS PAGE */

/* Ping Checker */
async function checkPing() {
    const start = performance.now();
    try {
        // Add random param to prevent caching
        await fetch(window.location.origin + '?t=' + Date.now(), {
            cache: 'no-cache',
            method: 'HEAD'
        });
        const ping = Math.round(performance.now() - start);
        return ping;
    } catch (error) {
        return -1;
    }
}

function updateSignalBars(ping) {
    const bars = ['bar1', 'bar2', 'bar3', 'bar4'];
    const statusElement = document.getElementById('ping-status');

    // Reset all bars
    bars.forEach(id => {
        document.getElementById(id).classname = 'bar';
    })

    if (ping === -1) {
        statusElemtent.textContent = 'Connection failed';
        return;
    }

    let strengh, status, colorClass;

    if (ping<50) {
        strengh = 4;
        stauts = 'Excellent';
        colorClass = 'active';
    } else if (ping<100) {
        strengh = 3;
        stauts = 'Good';
        colorClass = 'active';
    } else if (ping<200) {
        strengh = 2;
        stauts = 'Fair';
        colorClass = 'medium';
    } else {
        strengh = 1;
        stauts = 'Poor';
        colorClass = 'slow';
    }

    satusElement.textContent = status;

    // Light up bars based on strength
    for (let i = 0; i < strengh; i++) {
        document.getElementById(bars[i]).classname = `bar ${colorClass}`;
    }
}

async function updatePing() {
    const ping = await checkPing();
    const pingElement = document.getElementbyId('ping-value');

    if (ping === -1) {
        pingElement.textContent =  'Error';
    } else {
        pingElement.textContent = ping + 'ms';
    }
}
