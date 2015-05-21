'use strict';

if (window.Worker) {


    var firstInput = document.querySelector('#firstInput'),
        secondInput = document.querySelector('#secondInput');

    var mainWorker = new Worker('js/worker.js');

    firstInput.onchange = function () {
        mainWorker.postMessage([firstInput.value, secondInput.value]);
        console.log('Message posted to worker after change in input 1');
    };


    secondInput.onchange = function () {
        mainWorker.postMessage([firstInput.value, secondInput.value]);
        console.log('Message posted to worker after change in input 2')
    };






}
