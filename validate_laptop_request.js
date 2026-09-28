// ServiceNow server-side validation example.
// Adapt field names to your instance.

(function validateLaptopRequest(current) {
    var result = {
        valid: true,
        message: ''
    };

    if (!current) {
        result.valid = false;
        result.message = 'Requested Item record is missing.';
        return result;
    }

    // Example custom fields:
    // u_laptop_type and u_team_enrolled
    if (current.u_laptop_type == 'standard' && current.u_team_enrolled != true) {
        result.valid = false;
        result.message = 'Team enrollment confirmation is required for a standard laptop order.';
    }

    return result;
})(current);
