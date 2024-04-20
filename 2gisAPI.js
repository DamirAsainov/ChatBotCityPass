const apiKey = process.env.TWO_GIS_API_KEY;
// const map = new mapgl.Map('container', {
//     key: apiKey,
//     center: [55.31878, 25.23584],
//     zoom: 13,
// });


function makeRouting(){
    let res;
    const requestData = {
        points: [
            {
                type: "stop",
                lon: 37.582591,
                lat: 55.775364
            },
            {
                type: "stop",
                lon: 37.579206,
                lat: 55.774362
            }
        ],
        locale: "ru",
        transport: "car", //walking, car,
        route_mode: "fastest",
        traffic_mode: "jam"
    };

    fetch('http://routing.api.2gis.com/routing/7.0.0/global?key=' + apiKey, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            res = data.result
            console.log(data); // Вывод ответа сервера в консоль
            // Добавьте здесь код для обработки ответа, если необходимо
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            // Добавьте здесь код для обработки ошибки, если необходимо
        });
    console.log(res)
}

module.exports.makeRouting = makeRouting;