/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var mainContentH1 = $('#mainContent h1')[0];

    var welcome = $('#welcome').text();

    var mainContentH1JS = document.querySelectorAll('#mainContent h1')[1];

    // console.log(mainContentH1.textContent);

    // console.log(welcome);

    //console.log(mainContentH1JS);

    /*
    var form1JS = document.getElementById('form1');
    form1JS.style.width = "50%";
    */

    $('#form1').css('width', '50%');

    $('#form1 input').attr('placeholder', 'Enter your username');

    //JQUERY VERSION
    $('#submitButton').mouseover(function() {
        $('#submitButton').attr('class', 'btn btn-danger');
    });

    $('#submitButton').mouseout(function() {
        $('#submitButton').attr('class', 'btn btn-primary');
    });


    $('#defaultButton').click(function() {
        $('#username').val("Tom's luck number is: " + (Math.floor(Math.random() * 49) + 1));
    });

    $('#toggleButton').click(function() {
        if ($('#toggleButton').text() === 'Hide') {
            $('#form1').hide('1000');
            $('#toggleButton').text('Show');
        } else {
            $('#form1').show('1000');
            $('#toggleButton').text('Hide');
        }
    });

    $('#username').click(function() {
        $('#username').select();
    });


})();

