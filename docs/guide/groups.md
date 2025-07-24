# Groups

Groups in Solidrock represent a collection of people or items (tickets and extras) that are associated. A group could be people from the same church, business, charity or club etc. Multiple bookings can be made by multiple different lead bookers but have the option to associate all the tickets and extras with the same group. A group coordinator (someone who manages or leads the group) would then be able to see all those who have been associated to their group.

## Group Sets

[Group sets](https://events.solidrock.io/admin/groups) act as a collection of groups. Each event can be assigned a group set in which all groups registered for that event will reside. You might call your group set based on the event name such as `Mega Event 2024 Groups` or something that better defines the types of groups in it like `Youth Groups`, `2024 Churches` and so on.

Group sets can be unique to a given event or be re-used across multiple events if the groups are similar or likely to be present at them. Re-using a group set will reduce the need for some groups to re-register.

## Group Items

Group items are the individual groups themselves within a group set. Organisation Administrators can create and manage groups including:

-   Group Name
-   Unique Code (will automatically generate a unique code if left empty)
-   Office Email Address
-   Office Telephone Number
-   Website
-   Address
-   Status:
    -   Unlisted: Not available to be joined
    -   Listed: Available to be joined and discoverable by search when 'Public Group Registration' is disabled.
    -   Publicly Registered: Set when the group has been registered by a lead booker instead of an Organisation Administrator.

### Public Group Registration

Public Group Registration is set per event within [event settings](/guide/events.md#groups).

#### Enabled

This option when enabled allows lead bookers to register their own groups (providing the Group Name and Town/City). Once registered, the lead booker becomes a Group Coordinator (more on this below) and is provided the automatically generated unique group code to then use in their bookings, or to distribute to others who will be booking and need to associate their tickets and extras to the same group.

Enabling this option also requires that any bookings being associated to a group **must** use the group code to do so.

#### Disabled

With this setting disabled only Organisation Administrators can register groups at the request of group leaders/coordinators and would need to register a Solidrock account with the `Group Coordinator` role, or add the role to an existing account.

Lead Bookers will be able to type to search for groups to choose from a list when assigning a group to their booking. All groups with a `Listed` status will be available to choose from.

:::tip
Having Public Group Registration disabled can be a good solution for those cases where it is important that there is greater moderation of the groups for an event or where there needs to be a relationship built with the group and its leaders.
:::

##### Over 18s Check

When the 'Show Over-18 check?' setting is enabled for your event, a checkbox will be shown on the Public Group Registration form.
This checkbox will need to be checked when registering a group to confirm the user registering the group is over 18.

### Group Linking

Group Coordinators can opt to connect their group to another group. This is useful for groups that are part of a larger organisation or network, or would benefit from being situated together on-site for logistical purposes (e.g. shared catering, accommodation, etc.).

To link a group, the Group Coordinator will need to enter the unique code of the group they wish to link to - shared with them by the Group Coordinator of the other group. Once linked, the Group Coordinator of the other group and al event admins will receive a notification informing them of the link.

::: info
Event administrators can view which groups have been linked within the Event > Group List page as well as the groups report. They also have the option to unlink them if needed.
:::

## Group Coordinators

A Group Coordinator is any group leader or administrator for a group. They may or may not be attending the event themselves.
In Solidrock any account can be given the [Group Coordinator account type](/guide/accounts/account-types#group-coordinator) which wil allow them to view all tickets and extras assigned to their group(s) for each event.

### Importing Group Coordinators

Using the 'Import Group Coordinators' button on the Group Coordinators page for your event, you'll be able to import any Group Coordinators from another event that uses the same group set.
When you do this, any Group Coordinators that are not already part of the event you're managing will be copied across.

### Removing Group Coordinators

From the Group Coordinators page, you can use the triple-dot menu to see a 'Remove Group Coordinator' option.
This will prompt you to confirm the removal of the Group Coordinator for this event.
