const informationPanelsContainer = document.getElementById('information-panel-container');
let dataArray = [];
let selectedTimeFrame = 'daily';
const timeFrameButtons = document.querySelectorAll('.filter-button');

// Fused the event listeners into one
// const dailyButton = document.getElementById('daily-button');
// const weeklyButton = document.getElementById('weekly-button');
// const monthlyButton = document.getElementById('monthly-button');

fetch('./data.json')
.then(res => res.json())
.then(data => {
    // console.log(data);
    // testFunction(data);
    displayInformation(data);
    dataArray = JSON.parse(JSON.stringify(data));
    // console.log("Data Array:", dataArray);
})
.catch(error => console.log("Error: ", error));

const displayInformation = (data) => {
    informationPanelsContainer.innerHTML = `
        ${
            data.map(activity => {
                return `
                    <div class="${activity.title.toLowerCase().replace(" ", "")} panel" id="panel"> 
                        <div class="panel-header">
                            <img class="activity-icon" src="images/icon-${activity.title.toLowerCase()}.svg" alt="${activity.title.toLowerCase()} icon">
                        </div>
                        
                        <section class="panel-content">

                            <section class="panel-indicator">
                                <h1 class="activity-title">${activity.title} </h1>
                                <img class="ellipsis" src="images/icon-ellipsis.svg" alt="ellipsis">
                            </section>
                            
                            <section>
                                <section class="time-display">
                                    <div class="current-time">${activity.timeframes[selectedTimeFrame].current}hrs</div>
                                    <div>${
                                        (selectedTimeFrame === 'daily' 
                                            ? 'Yesterday' : selectedTimeFrame === 'weekly' 
                                            ? 'Last week' : 
                                            'Last Month')} -
                                        ${activity.timeframes[selectedTimeFrame].previous}hrs
                                    </div>
                                </section>
                            </section>
                        </section>
                    </div>        
                `
            }).join("")
        }
    `
};

const testFunction = (array) => {
    array.forEach(activity => {
        console.log(`  
            Activity: ${activity.title}
            Timeframes type: ${typeof activity.timeframes}
            Daily: ${activity.timeframes["daily"].current}  
            Prev Day: ${activity.timeframes["daily"].previous}  
            Weekly: ${activity.timeframes["weekly"].current} 
            Prev Week: ${activity.timeframes["weekly"].previous} 
            Monthly: ${activity.timeframes["monthly"].current} 
            Prev Month: ${activity.timeframes["monthly"].previous} 
        `);
    });
};

console.log(timeFrameButtons);

for (const button of timeFrameButtons){
    button.addEventListener('click', (e) => {
        selectedTimeFrame = e.target.dataset.value;
        // console.log(selectedTimeFrame);
        displayInformation(dataArray);

        for (const button of timeFrameButtons){
            if (button === e.target){
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
}