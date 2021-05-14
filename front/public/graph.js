let vals = [1, 1,1,1,1,1,1,1,1,1, 1,1,].map(() => gaussianRandom(1, 6));
let labels = []

function gaussianRand() {
    var rand = 0;

    for (var i = 0; i < 6; i += 1) {
        rand += Math.random();
    }

    return rand / 6;
}

function gaussianRandom(start, end) {
    return Math.floor(start + gaussianRand() * (end - start + 1));
}


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let date = new Date();


for (let i = 0; i < vals.length; i++) {
    labels.push(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
    date = addDays(date, 3);
}

Chart.defaults.font.size = 16;

const myChart = new Chart(document.getElementById("myChart").getContext("2d"), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Оценки",
            data: vals,
            backgroundColor: [
                // 'rgba(52, 108, 173, 1)',
                // 'rgba(67, 103, 163, 1)',
                // 'rgba(40, 67, 110, 1)',
                // 'rgba(39, 135, 245, 1)',
                'rgba(92, 156, 230, 1)',
            ],
            borderColor: [
                'rgba(52, 108, 173, 1)',
            ],
            borderWidth: 3,
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                // display: false,
                min: 1,
                max: 5.5,
            }
        }
    }
});