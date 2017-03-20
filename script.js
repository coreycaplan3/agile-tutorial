$(document).ready(function() {
    $('.modal').modal();

    $('#mortgage_amount').val("200000");
    $('#annual_property_taxes').val("5000");
    $('#annual_insurance_costs').val("1000");
    $('#interest_rate').val("4");
    $('#number_of_years').val("30");

    Materialize.updateTextFields();
});

function openModalDialog() {
    $('#output_dialog').modal('open');
}

function closeModalDialog() {
    $('#output_dialog').modal('close');
}

function onSubmitForm() {
    var mortgage_amount = $('#mortgage_amount').val();
    var annual_property_taxes = $('#annual_property_taxes').val();
    var annual_insurance_costs = $('#annual_insurance_costs').val();
    var interest_rate = $('#interest_rate').val();
    var number_of_years = $('#number_of_years').val();

    if(!isNaN(mortgage_amount)) {
        return false;
    }
    if(!isNaN(annual_property_taxes)) {
        return false;
    }
    if(!isNaN(annual_insurance_costs)) {
        return false;
    }
    if(!isNaN(interest_rate)) {
        return false;
    }


    return isNaN(number_of_years);
}

var object = {};
object.mortgage_amount = 1;
object.annual_property_taxes = 1;
object.annual_insurance_costs = 1;
object.interest_rate = 1;
object.number_of_years = 1;