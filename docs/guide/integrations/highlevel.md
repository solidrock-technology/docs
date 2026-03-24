# HighLevel

Event Organisers can choose to connect their HighLevel account with Solidrock. This integration will allow Solidrock to create and populate a list within the HighLevel account, creating Contacts tagged with relevant tags to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc.) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within HighLevel enables event organisers to segment and communicate to specific people, key information about the event.

## What Syncs to HighLevel

### Contacts are automatically created and updated

All accounts are synced to your Location with standard fields including name, email, phone, address, and date of birth.

Whenever an [account type](/guide/accounts/#account-types) is added or changed for a Solidrock account, or an association to a team or group is made or deleted, the relevant Contact in HighLevel is created or updated and tagged with the relevant information.

### Role Specific Tags Applied

Event-specific tags for each role such as:

- `{ Event Order Reference Prefix }` - Organisation Admins
- `{ Event Order Reference Prefix }` - Team Leaders
- `{ Event Order Reference Prefix }` - Team Members
- `{ Event Order Reference Prefix }` - Group Coordinators
- `{ Event Order Reference Prefix }` - Lead Bookers

Team/Group-Specific Tags such as:

- `{ Event Order Reference Prefix }` - TL - [Team Name]
- `{ Event Order Reference Prefix }` - TM - [Team Name]
- `{ Event Order Reference Prefix }` - GC - [Group Name]

Where TL = Team Leader, TM = Team Member, GC = Group Coordinator.

### How to Use

In HighLevel, create smart lists using tag filters. For example: Filter where tags contain `{ Event Order Reference Prefix }` - TM - [Team Name] to send an email to all team members of a specific team. Or filter where tags contain `{ Event Order Reference Prefix }` - GC to send an email to all group coordinators.

### Sync All

If you enable this integration after people have already booked, you can trigger a sync of all existing accounts to HighLevel by clicking the 'Sync all' button on the integrations page once this integration has been enabled. This will ensure that all existing accounts are sent through to HighLevel and tagged with the relevant information.
