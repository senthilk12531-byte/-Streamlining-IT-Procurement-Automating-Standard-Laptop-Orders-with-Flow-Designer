// Example Script step for Flow Designer.
// Use inside a Script step and map inputs from your RITM variables.

(function execute(inputs, outputs) {
    outputs.is_standard = false;
    outputs.message = '';

    var laptopType = String(inputs.laptop_type || '').toLowerCase();
    var teamEnrolled = String(inputs.team_enrolled || '').toLowerCase();

    if (laptopType === 'standard' && teamEnrolled === 'true') {
        outputs.is_standard = true;
        outputs.message = 'Standard laptop request validated successfully.';
    } else {
        outputs.message = 'Request requires manual review.';
    }
})(inputs, outputs);
