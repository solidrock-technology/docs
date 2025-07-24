# Bundles

Bundles are collections of tickets, extras or a combination of both for a set price. They can be fixed so that exactly the specified quantity of items are included, or they can be configurable with items having an upper and lower limit.

Within any event you can create as many bundles as you need. Outlined below are all the available options and settings for event bundles.

Like tickets, you can duplicate bundles using the **&vellip;** icon and choosing the **Duplicate** option where needed.

## General Information

### Bundle Name

The name of the bundle that will be displayed throughout the front and backend of your event.

### Bundle Description

Visible alongside the bundle name on the frontend booking pages, and should be used to aid those booking in to know which bundles(s) are right for them.

### Price

The fixed price of the bundle.

### Total Available

The total number of this bundle available. Once the number available have been added to bookings, the option to purchase this bundle will be removed for lead bookers thereafter.

### Max per Lead Booker

The maximum number of the bundle that can be purchased per lead booker across all of their bookings

### Max per Lead Booker _(Group Coordinators)_

For those logged in as Group Coordinators you can provide a different maximum purchase limit of the bundle per booking.

### Max per Group

If you want to restrict the number of a bundle that can be purchased within an entire group across multiple bookings you can set that value here.

### Available From Date/Time

The date and time that the bundle should become available for purchase.

### Available To Date/Time

The date and time from which the bundle should no longer be available for purchase.

# Time Restricted

This option enables a 30-minute inactivity timer while the bundle is in an unpaid order.
More information about time-restricted items can be found [here](/guide/tickets/time-restricted-items.md).

::: tip
If a bundle contains time-restricted tickets or extras then the bundle becomes time-restricted as well.
:::

### Status

Whether to make the bundle available to bookers on the frontend or not.

### Terms of sale

Optionally provide some terms of sale for the bundle. These will be displayed to the user when they select the bundle which they must agree to before the bundle is added to their order.

### Bundle Items

Here you can add tickets and extras to the bundle. You can add as many items as you like and set the minimum and maximum quantities of each item that should be included in the bundle. If the minimum and maximum quantities are the same then the quantity of the item in the bundle will be fixed, otherwise the number of items will be configurable by the lead booker within the range.

::: tip
Tickets and Extras will need to be created first, before they can be added to a bundle.
:::

::: warning
Bundles will not appear on the frontend booking flow if they contain zero items.
:::

## Unwrapping a Bundle

Once a bundle is configured and added to an order, the lead booker can continue to modify the contents of the bundle until they complete the order, adding more items (if configurable) and deleting items. When items in a bundle are deleted Solidrock will check if the bundle remains valid (the quantity of each item is within the minimum and maximum range) or invalid. If deemed invalid Solidrock will **unwrap** the bundle setting any remaining items as individual items in the order.

## Editing the contents of a Bundle

### Paid, In Progress and Pending Orders

Because a bundle has a fixed price no matter how many items are in it, if it is in a paid, in progress or pending order then the bundle contents can still be edited by you from the backend as long as the quantity of each item remains in the valid minimum and maximum ranges.
