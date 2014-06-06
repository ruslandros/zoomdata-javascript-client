'use strict';
/*global ZoomdataClient */

$(function () {
    var zoomdataClient = new ZoomdataClient({
        apiKey: '539203d13004281b5085c8eb',
        host: 'localhost:8080/zoomdata',
        secure: false
    });

    zoomdataClient.visualize({
        visualization: 'Vertical Bars',
        source: 'Real Time Sales',
        element: $('#visualization').get(0)
    })
    .progress(function (message) {
        console.log('loading...', message);
    })
    .done(function () {
        console.log('Finished loading successfully.');
    })
    .fail(function (xhr, response) {
        var message = typeof xhr === 'string' ? xhr : null;
        console.log(message || (response + ': ' + xhr.statusText));
    });
});
