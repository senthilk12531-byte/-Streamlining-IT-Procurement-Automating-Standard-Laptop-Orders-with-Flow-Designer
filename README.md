# Team Enrollment Confirmation – Standard Laptop Orders

## Purpose
Automate standard laptop procurement requests using ServiceNow Flow Designer.

## Flow
1. Trigger when a laptop request is submitted.
2. Check that the requested device is a standard laptop.
3. Validate requester/team information.
4. Create/route an approval.
5. Send confirmation to the requester.
6. Update the request state.
7. If the request is not standard, route it for manual review.

## Suggested Flow Designer configuration
Trigger:
- Service Catalog -> Requested Item Created

Conditions:
- Category = Laptop
- Laptop Type = Standard

Actions:
- Look Up Record / Get Catalog Variables
- Ask for Approval
- Update Record
- Send Email / Notification

## Import note
Flow Designer flows are normally created/imported through ServiceNow application artifacts or update sets. The files in this ZIP provide the implementation logic and configuration reference; they are not a guaranteed one-click Flow Designer import package.
