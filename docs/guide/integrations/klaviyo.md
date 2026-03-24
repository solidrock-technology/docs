# Klaviyo

Event Organisers can choose to connect their Klaviyo account with Solidrock. This integration will allow Solidrock to create and populate a list with the Klaviyo account, subscribing users to the list and utilising custom properties with relevant details to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc.) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within Klaviyo enables event organisers to segment and communicate to specific people, key information about the event.

## What Syncs to Klaviyo

### Profiles are automatically created and updated

All accounts with roles in this event are synced as profiles with standard properties including name, email, phone, address.

Whenever an [account type](/guide/accounts/#account-types) is added or changed for a Solidrock account, or an association to a team or group is made or deleted, the relevant profile in Klaviyo is created or updated and tagged with the relevant information.

### List Auto-Created

A dedicated list for this event is created in this format:

`{ Event Name } - { Organisation Name } - Solidrock`

### Custom Properties Created

Role and assignment data is stored in profile custom properties:

- `{ Event Order Reference Prefix }_role`
- `{ Event Order Reference Prefix }_lead_teams`
- `{ Event Order Reference Prefix }_member_teams`
- `{ Event Order Reference Prefix }_groups`
- `{ Event Order Reference Prefix }_event`
- `dateofbirth`

### How to Use

In Klaviyo, create segments using property filters. For example: Filter where `{ Event Order Reference Prefix }_role` contains "Team Member" and `{ Event Order Reference Prefix }_member_teams` contains specific team name to send an email to all team members of a specific team. Or filter where `{ Event Order Reference Prefix }_groups` contains "Group Coordinator" to send an email to all group coordinators.
