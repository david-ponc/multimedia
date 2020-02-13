$(document).ready(() => {
    console.log(':v');
    $('#div1').html("<p> Hola mundo </p>");
});

$('#bsuma').click(() => {
    let num1 = parseFloat($('#in1').val());
    let num2 = parseFloat($('#in2').val());
    $('#in3').val(num1+num2);
});

$('#bresta').click(() => {
    let num1 = parseFloat($('#in1').val());
    let num2 = parseFloat($('#in2').val());
    $('#in3').val(num1-num2);
});

$('#bmul').click(() => {
    let num1 = parseFloat($('#in1').val());
    let num2 = parseFloat($('#in2').val());
    $('#in3').val(num1*num2);
});

$('#bdiv').click(() => {
    let num1 = parseFloat($('#in1').val());
    let num2 = parseFloat($('#in2').val());
    $('#in3').val(num1/num2);
});