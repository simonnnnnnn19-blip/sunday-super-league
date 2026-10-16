// Sunday Super League - Team Players

const teams = {

    "Staw Hat FC": [
        { name: "Rohan", position: "Defence" },
        { name: "Aravind", position: "Forward" },
        { name: "Simon", position: "Forward" },
        { name: "Naveen", position: "Defence" },
        { name: "Aaron", position: "Goalkeeper" },
        { name: "John", position: "Midfielder" }
    ],

    "Goat FC": [
        { name: "Jack", position: "Forward" },
        { name: "Jeswin", position: "Forward" },
        { name: "Christopher", position: "Defence" },
        { name: "Praveen", position: "Defence" },
        { name: "Antony", position: "Goalkeeper" },
        { name: "Manoj", position: "Midfielder" }
    ],

    "CR7 United FC": [
        { name: "Naldo", position: "Forward" },
        { name: "Infant", position: "Midfielder" },
        { name: "Robin", position: "Defence" },
        { name: "Pratap", position: "Defence" },
        { name: "Sandro", position: "Goalkeeper" },
        { name: "Anto", position: "Forward" }
    ],

    "18+ United FC": [
        { name: "Fabian", position: "Forward" },
        { name: "Anish", position: "Forward" },
        { name: "Donaldo", position: "Goalkeeper" },
        { name: "Andrew", position: "Defence" },
        { name: "Alphonse", position: "Defence" },
        { name: "Thomas", position: "Midfielder" }
    ]
};


// Show team players
function showTeam(teamName) {

    const players = teams[teamName];

    if (!players) {
        alert("Team not found!");
        return;
    }

    let playerList = "";

    players.forEach((player, index) => {
        playerList += `
            <div class="player-item">
                <div class="player-number">${index + 1}</div>

                <div class="player-info">
                    <h3>${player.name}</h3>
                    <p>${player.position}</p>
                </div>
            </div>
        `;
    });

    const popup = document.createElement("div");

    popup.className = "team-popup";

    popup.innerHTML = `
        <div class="popup-box">

            <button class="close-button" onclick="this.parentElement.parentElement.remove()">
                ✕
            </button>

            <h2>⚽ ${teamName}</h2>

            <p class="player-count">
                ${players.length} Players
            </p>

            <div class="players-list">
                ${playerList}
            </div>

        </div>
    `;

    document.body.appendChild(popup);
}


// ==========================
// PLAYER GOALS
// ==========================

const playerGoals = [

    { name: "Rohan", team: "Staw Hat FC", goals: 0 },
    { name: "Aravind", team: "Staw Hat FC", goals: 0 },
    { name: "Simon", team: "Staw Hat FC", goals: 0 },
    { name: "Naveen", team: "Staw Hat FC", goals: 0 },
    { name: "Aaron", team: "Staw Hat FC", goals: 0 },
    { name: "John", team: "Staw Hat FC", goals: 0 },

    { name: "Jack", team: "Goat FC", goals: 0 },
    { name: "Jeswin", team: "Goat FC", goals: 0 },
    { name: "Christopher", team: "Goat FC", goals: 0 },
    { name: "Praveen", team: "Goat FC", goals: 0 },
    { name: "Antony", team: "Goat FC", goals: 0 },
    { name: "Manoj", team: "Goat FC", goals: 0 },

    { name: "Naldo", team: "CR7 United FC", goals: 0 },
    { name: "Infant", team: "CR7 United FC", goals: 0 },
    { name: "Robin", team: "CR7 United FC", goals: 0 },
    { name: "Pratap", team: "CR7 United FC", goals: 0 },
    { name: "Sandro", team: "CR7 United FC", goals: 0 },
    { name: "Anto", team: "CR7 United FC", goals: 0 },

    { name: "Fabian", team: "18+ United FC", goals: 0 },
    { name: "Anish", team: "18+ United FC", goals: 0 },
    { name: "Donaldo", team: "18+ United FC", goals: 0 },
    { name: "Andrew", team: "18+ United FC", goals: 0 },
    { name: "Alphonse", team: "18+ United FC", goals: 0 },
    { name: "Thomas", team: "18+ United FC", goals: 0 }

];


// Display goal list

function displayGoalList() {

    const goalList = document.getElementById("goal-list");

    if (!goalList) {
        return;
    }

    // Highest goals first
    playerGoals.sort(function(a, b) {
        return b.goals - a.goals;
    });

    let html = "";

    playerGoals.forEach(function(player, index) {

        let rank = index + 1;

        let medal = "";

        if (rank === 1) {
            medal = "🥇";
        } 
        else if (rank === 2) {
            medal = "🥈";
        } 
        else if (rank === 3) {
            medal = "🥉";
        } 
        else {
            medal = rank;
        }

        html += `
            <div class="goal-player">

                <div class="goal-rank">
                    ${medal}
                </div>

                <div class="goal-name">

                    <h3>${player.name}</h3>

                    <p>${player.team}</p>

                </div>

                <div class="goal-number">

                    ⚽ ${player.goals}

                </div>

            </div>
        `;
    });

    goalList.innerHTML = html;
}


// Show goal list when website loads

displayGoalList();

function showTeam(teamName) {

    alert(
        "Welcome to " + teamName +
        "!\n\nTeam players and details will be displayed here."
    );

}