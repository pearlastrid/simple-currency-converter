$(document).ready(function() {
    $("#converter").click(function() {
        let inputCurrencyAmount = parseFloat($("#inputCurrencyAmount").val());
        let inputConversionFactor = parseFloat($("#inputCurrencyType").val());
        let outputConversionFactor = parseFloat($("#outputCurrencyType").val());

        let result = (inputCurrencyAmount * inputConversionFactor * outputConversionFactor).toFixed(2);
        $("#outputCurrencyAmount").val(result);
    });
});