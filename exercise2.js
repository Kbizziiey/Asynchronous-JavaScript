
function logActivity(activity) {
    console.log("Logged via Callback:", activity);
}


async function getBoredActivity(callback) {
    try {
        const response = await fetch("https://bored-api.appbrewery.com/random");
        
        if (!response.ok) {
            throw new Error(`Network response failed: ${response.status}`);
        }

        const jsonformat = await response.json();
        
        console.log("Data received!");
        
        callback(jsonformat.activity);

    } catch (error) {
        console.error("Error:", error);
    }
}

getBoredActivity(logActivity);
