// const dailyButton = document.getElementById('daily-button');
// const weeklyButton = document.getElementById('weekly-button');
// const monthlyButton = document.getElementById('monthly-button');
const timeSpanButtonsContainer = document.getElementById('timespan-filter');
const informationPanelsContainer = document.getElementById('information-panel-container');
let selectedTimeFrame = 'daily';

fetch('./data.json')
.then(res => res.json())
.then(data => {
    console.log(data);
    // testFunction(data);
    displayInformation(data);
})
.catch(error => console.log("Error: ", error));

const displayInformation = (data) => {
    informationPanelsContainer.innerHTML = `
        ${
            data.map(activity => {
                return `
                    <div class="${activity.title.toLowerCase().replace(" ", "")} panel" id="panel"> 
                        <section class="panel-content">

                            <section class="panel-indicator">
                                <h1>${activity.title}</h1>
                                <img class="ellipsis" src="images/icon-ellipsis.svg" alt="ellipsis">
                            </section>
                            
                            <section>
                                <section class="time-display">
                                    <div>${activity.timeframes[selectedTimeFrame].current}hrs</div>
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