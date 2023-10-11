import React from "react";

const Hours = () => {
    // add logic

    // get the long day name and store it in a variable named today
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

    // get today's hours
    const todayHours = shelterHours.find((day) => day.day === today);

    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
        </div>
    )
}

const shelterHours = [
    { day: "Monday", open: "10:00", close: "16:00" },
    { day: "Tuesday", open: "10:00", close: "16:00" },
    { day: "Wednesday", open: "10:00", close: "16:00" },
    { day: "Thursday", open: "10:00", close: "16:00" },
    { day: "Friday", open: "10:00", close: "16:00" },
    { day: "Saturday", open: "10:00", close: "16:00" },
    { day: "Sunday", open: "10:00", close: "16:00" },
]

export default Hours;