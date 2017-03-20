$(document).ready(function() {
    $('.modal').modal();
});

function openModalDialog() {
    $('#modal1').modal('open');
}

function closeModalDialog() {
    $('#modal1').modal('close');
}

function onSubmitForm() {
    return true;
}