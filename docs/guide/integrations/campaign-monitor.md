# Campaign Monitor

Event Organisers can choose to connect their Campaign Monitor account with Solidrock. This integration will allow Solidrock to create and populate a list with the Campaign Monitor account, subscribing users to the list and utilising custom fields with relevant details to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc.) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within Campaign Monitor enables event organisers to segment and communicate to specific people, key information about the event.

## What Syncs to Campaign Monitor

### Subscribers are automatically created and updated

Whenever an [account type](/guide/accounts/#account-types) is added or changed for a Solidrock account, or an association to a team or group is made or deleted, the relevant subscriber in Campaign Monitor is created or updated and tagged with the relevant information.

All accounts are synced with standard fields including name, email, phone, and address.

### List Auto-Created

A dedicated list for this event is created in this format:

`{ Event Name } - { Organisation Name } - Solidrock`

### Custom Fields Created

Role and assignment data is stored in custom fields:

- roles
- teams
- groups
- leadteams
- memberteams
- event
- organisation
- dateofbirth

### How to Use

In Campaign Monitor, create segments using custom field filters. For example: Filter where "roles" contains "Team Member" and "memberteams" contains specific team name to send an email to all team members of a specific team. Or filter where "groups" contains "Group Coordinator" to send an email to all group coordinators.

### Sync All

If you enable this integration after people have already booked, you can trigger a sync of all existing accounts to Campaign Monitor by clicking the 'Sync all' button on the integrations page once this integration has been enabled. This will ensure that all existing accounts are sent through to Campaign Monitor and tagged with the relevant information.
