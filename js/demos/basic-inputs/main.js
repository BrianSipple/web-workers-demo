'use strict';

if (window.Worker) {


    var firstNumberInput = document.querySelector('#firstInputNum'),
        secondNumberInput = document.querySelector('#secondInputNum'),
        workerResult = document.querySelector('.worker-result.math');


    var mainWorker = new Worker('js/demos/basic-inputs/worker.js');

    mainWorker.onmessage = function (e) {
        workerResult.textContent = e.data;
        console.log('Received result from worker');
    };

    firstNumberInput.onchange = function () {
        mainWorker.postMessage([firstNumberInput.value, secondNumberInput.value]);
        console.log('Message posted to worker after change in input 1');
    };


    secondNumberInput.onchange = function () {
        mainWorker.postMessage([firstNumberInput.value, secondNumberInput.value]);
        console.log('Message posted to worker after change in input 2')
    };









}
