# MailerLite

Event Organisers can choose to connect their MailerLite account with Solidrock. This integration will allow Solidrock to create and populate groups with the MailerLite subscriber, subscribing users to the groups and utilising custom fields with relevant details to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc.) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within MailerLite enables event organisers to segment and communicate to specific people, key information about the event.

## What syncs to MailerLite?

### Subscribers are automatically created and updated

All accounts are synced with standard field including name, email and phone as well as custom fields for address.

Whenever an [account type](/guide/accounts/#account-types) is added or changed for a Solidrock account, or an association to a team or group is made or deleted, the relevant subscriber in MailerLite is created or updated and tagged with the relevant information.

### Role Specific Groups Created

Event-specific groups for each role such as:

- `{ Event Order Reference Prefix }` Role: Organisation Admins
- `{ Event Order Reference Prefix }` Role: Team Leaders
- `{ Event Order Reference Prefix }` Role: Team Members
- `{ Event Order Reference Prefix }` Role: Group Coordinators
- `{ Event Order Reference Prefix }` Role: Lead Bookers

### Custom Fields Created

Team and group details are stored in custom fields:

- `{ Event Order Reference Prefix }`\_lead_teams
- `{ Event Order Reference Prefix }`\_member_teams
- `{ Event Order Reference Prefix }`\_groups

### How to Use

In MailerLite, create segments using group and custom field filters. For example: Filter where group is `{ Event Order Reference Prefix }` Role: Team Members and custom field `{ Event Order Reference Prefix }`\_member_teams contains specific team name to send an email to all team members of a specific team. Or filter where group is `{ Event Order Reference Prefix }` Role: Group Coordinators to send an email to all group coordinators.
