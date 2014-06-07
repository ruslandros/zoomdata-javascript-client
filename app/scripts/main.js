'use strict';
/*global ZoomdataClient */

$(function () {
    var zoomdataClient = new ZoomdataClient({
        apiKey: '53874508e4b0a67cc17eb82a',
        host: 'dev.zoomdata.com/zoomdata',
        secure: true
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
