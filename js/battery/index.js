$(document).ready(function () {
    $('#ranger').val(4);

    $('#ranger').on('change', function (a) {
        changeColor($(this).val());
    });

    $('#autoChargeButton').on('click', function (x) {

        for (let i = 0; i < 10; i++) {
            autoCharge ();
        }
    });
});

function changeColor(value) {
    switch (+value) {
        case 0:
            $('.cell').css('background-color', 'white');
            break;
        case 1:
            $('.cell').css('background-color', 'white');
            $('.red').css('background-color', 'red');
            break;
        case 2:
            $('.cell').css('background-color', 'white');
            $('.orange').css('background-color', 'orange');
            break;
        case 3:
            $('.cell').css('background-color', 'white');
            $('.yellow').css('background-color', 'yellow');
            break;
        case 4:
            $('.cell').css('background-color', 'white');
            $('.green').css('background-color', 'green');
            break;
    }
}

function autoCharge() {
    $('#ranger').val(0);
    $('.cell').css('background-color', 'white');

    setTimeout(function () {
        changeColor(1);
    }, 1000);

    setTimeout(function () {
        changeColor(2);
    }, 2000);

    setTimeout(function () {
        changeColor(3);
    }, 3000);

    setTimeout(function () {
        changeColor(4);
    }, 4000);
}
