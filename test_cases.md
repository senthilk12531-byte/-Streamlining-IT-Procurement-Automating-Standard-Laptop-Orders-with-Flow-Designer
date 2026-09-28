# Test Cases

## Test 1 – Valid standard laptop
Laptop Type: Standard
Team Enrolled: Yes
Expected: Approval flow starts and confirmation is sent.

## Test 2 – Standard laptop without enrollment
Laptop Type: Standard
Team Enrolled: No
Expected: Request moves to Manual Review.

## Test 3 – Non-standard device
Laptop Type: Non-standard
Expected: Manual review / alternate procurement process.

## Test 4 – Missing requester
Expected: Validation failure and no procurement approval.
