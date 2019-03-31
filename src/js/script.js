require('nodelist-foreach-polyfill');


window.addEventListener('DOMContentLoaded', function () {

    let calcs = require('../../js/parts/calcs'),
        forms = require('../../js/parts/forms'),
        popup = require('../../js/parts/popup'),
        slider = require('../../js/parts/slider'),
        tabs = require('../../js/parts/tabs'),
        timer = require('../../js/parts/timer');

    calcs();
    popup();
    slider();
    tabs();
    timer();
    forms();
});