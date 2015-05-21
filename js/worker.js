'use strict';

onmessage = function (msg) {
    console.log('Message received from main script!');
    var workerResult = 'Result: ' + (msg.data[0] * msg.data[1]);

    console.log('Posting message of ' + workerResult + ' back to main script');
    postMessage(workerResult);
};
