# Ticket Options

Within any event you can create as many tickets as you need. To aid the creation of tickets which may share many similar settings you can duplicate a ticket using the **&vellip;** icon and choosing the **Duplicate** option.

::: tip
If your event has price breaks for its tickets, duplicating a ticket and then modifying its price and available to and from dates is often the quickest way to set these up.
:::

Outlined below are all the available options and settings for event tickets.

## General Information

### Ticket Name

The name of the ticket that will be displayed throughout the front and backend of this event.

### Ticket Description

Visible alongside the ticket name on the frontend booking pages, and should be used to aid those booking in to know which ticket(s) are right for them.

### Pay As You Feel

If you'd prefer to give lead bookers the option to decide how much to pay for a ticket during the booking process you can toggle this option on.

### Pay As You Feel Minimum

Optionally set the minimum price someone must pay for a ticket.

::: warning
Option is only available if 'Pay As You Feel' option is **enabled**.
:::

### Pay As You Feel Maximum

Optionally set the maximum price someone could pay for a ticket.

::: warning
Option is only available if 'Pay As You Feel' option is **enabled**.
:::

### Price

The fixed price of the ticket.

::: warning
Field is only available if 'Pay As You Feel' option is **disabled**.
:::

### Total Available

The total number of this ticket available. Once the number available have been added to bookings, the option to purchase this ticket will be removed for lead bookers from the frontend booking flow.

### Max per Lead Booker

The maximum number of a ticket that can be purchased per lead booker across all of their bookings.

### Max per Lead Booker _(Group Coordinators)_

For those logged in as Group Coordinators you can provide a different maximum purchase limit of a ticket per booking.

### Max per Group

If you want to restrict the number of a ticket that can be purchased within an entire group across multiple bookings you can set that value here.

### Available From Date/Time

The date and time that a ticket should become available for purchase.

### Available To Date/Time

The date and time from which a ticket should no longer be available for purchase.

::: tip
If you have ticket price breaks, you can use these dates to swap between the different available price break tickets.
:::

# Time Restricted

This option enables a 30-minute inactivity timer while the ticket is in an unpaid order.
More information about time-resricted items can be found [here](/guide/tickets/time-restricted-items.md).

### Status

Whether to make the ticket available to bookers on the frontend, or not.

::: tip
You can set a ticket to **Disabled** and still provide a link directly to it on the frontend for specific people to book.
:::

### Form Selection

Here you can choose a custom form you've already created to associate with a ticket. Custom forms can contain any number of custom fields that you've created to capture delegate information or preferences necessary for the running of your event.

::: tip
You're often best to create your custom fields and forms ahead of then making your tickets.
:::

### Ticket Type

In most cases the 'Delegate' option is the likely choice but if you have teams that people can apply to join, or people that lead or manage groups of other delegates you have the option to choose a 'Team Member' or 'Group Coordinator' ticket type.

::: tip
**Team Member** tickets provide a further set of fields for a person to complete including which team(s) to apply to join.
:::

### Hide team selection fields

By default, if the Ticket Type has been set to 'Team Member' then the booker filling in their ticket details will need to select one or more teams to apply to join. If you'd prefer that they don't see these options you can toggle this field on.

::: tip
This field will only be shown if **Ticket Type** has been set to 'Team Member'
:::

### Ticket Set

You can assign one existing [ticket set](/guide/tickets/ticket-sets.md) to each ticket to categorise into a pre-defined set. Sets are displayed on the dashboard with the total count of purchased associated tickets.

::: tip
You may for example create ticket sets for various age ranges such as 0-2 (Infant), 3-11 (Child), 12-17 (Youth) and Adults and associate the relevant tickets to each age range. From the dashboard you'd then get a top-level view of the number of delegates coming to the event within each age range.
:::

### Does this ticket have any age restrictions?

If a ticket has age restrictions you can toggle this option on. Enabling this feature automatically adds a **Date of Birth** field to the ticket to capture and then calculate the age of the person.

### Minimum Age

The minimum age a person must be for a ticket. Their age will be compared against the date you set.

### Maximum Age

The maximum age a person must be for a ticket. Their age will be compared against the date you set.

### Compare Against Date

The date to compare the person's age against to determine if they fall within the minimum and maximum age range.

::: tip
Often you'll want to set this date to the start date of your event, so you're checking the age they'll be once they arrive for the event, instead of how old they are on the date they complete their booking.
:::

### Terms & Conditions

Any specific terms & conditions this ticket holder must agree to.

::: warning
Ticket level terms and conditions must be agreed for every individual ticket, unlike the Event level terms & conditions which a lead booker only needs to agree to once per booking.
:::
