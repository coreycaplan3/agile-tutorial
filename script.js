$(document).ready(function () {
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

    var errorNode;

    if (isNaN(mortgage_amount) || mortgage_amount < 0) {
        errorNode = $('#error_mortgage_amount');
        errorNode.removeClass("hide");
        return false;
    } else {
        errorNode = $('#error_mortgage_amount');
        errorNode.addClass('hide');
    }

    if (isNaN(annual_property_taxes) || annual_property_taxes <= 0) {
        errorNode = $('#error_annual_property_taxes');
        errorNode.removeClass("hide");
        return false;
    } else {
        errorNode = $('#error_annual_property_taxes');
        errorNode.addClass('hide');
    }

    if (isNaN(annual_insurance_costs) || annual_insurance_costs < 0) {
        errorNode = $('#error_annual_insurance_costs');
        errorNode.removeClass("hide");
        return false;
    } else {
        errorNode = $('#error_annual_insurance_costs');
        errorNode.addClass('hide');
    }

    if (isNaN(interest_rate) || interest_rate < 0) {
        errorNode = $('#error_interest_rate');
        errorNode.removeClass("hide");
        return false;
    } else {
        errorNode = $('#error_interest_rate');
        errorNode.addClass('hide');
    }


    if (isNaN(number_of_years) || number_of_years < 0) {
        errorNode = $('#error_number_of_years');
        errorNode.removeClass("hide");
        return false;
    } else {
        errorNode = $('#error_number_of_years');
        errorNode.addClass('hide');
    }


    var mortgageObject = {};
    mortgageObject.mortgage_amount = mortgage_amount;
    mortgageObject.annual_property_taxes = annual_property_taxes;
    mortgageObject.annual_insurance_costs = annual_insurance_costs;
    mortgageObject.interest_rate = interest_rate;
    mortgageObject.number_of_years = number_of_years;

    return true;
}

var object = {};
object.mortgage_amount = 1;
object.annual_property_taxes = 1;
object.annual_insurance_costs = 1;
object.interest_rate = 1;
object.number_of_years = 1;