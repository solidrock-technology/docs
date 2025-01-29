# Discounts

## General Information

### Name

The name of the voucher/discount seen within the backend for an event administrator's reference.

### Code

The code a booker would enter on the booking summary page to apply this discount to the booking, ticket or extra.

### Discount Type

Whether this discount applies a % off or a fixed (£) value, or not.

### Discount Value

Used in combination with the 'Discount Type'. For example:

-   If % is selected in the discount type field and 50 in this field, you'd be giving 50% off.
-   If £ is selected in the discount type field and 50 in this field, you'd be giving £50 off.

### Total Available

The total number of times this discount code can be used by bookers on the frontend.

### Maximum times this code can be used per lead booker

The maximum number of times this discount code can be used per lead booker across all of their bookings.

### Maximum times this code can be used per group

The maximum number of times this discount can be used per group, across multiple bookings.

### Minimum Subtotal

If a booking needs to have a minimum subtotal before this discount can be applied you can set that value here.

For example if set to `200`, then the subtotal for tickets and extras in a booking must come to at least £200 before the discount can be used.

### Minimum Tickets in order

If a discount should only be valid when there are a certain number of tickets within the order.

### Minimum Extras in order

If a discount should only be valid when there are a certain number of extras within the order.

### Valid From Date

The date that a discount should become available for use.

### Valid To Date

The date that a discount should no longer be available for use.

### Discount Level

Whether the discount is for use against a ticket, an extra, a bundle or the entire booking.

::: tip
If either **ticket**, **extra** or **bundle** are chosen there will be further options shown to restrict which specific items this discount can be used on.
:::

::: warning
Discounts cannot be applied to tickets or extras that are within a bundle.
:::

### Can be used on bookings site?

Turn this option on to enable the discount for use from the event frontend (in conjunction with the valid to and from dates).

## Country Restrictions

A discount may optionally be restricted based on a set of countries. The discount can be set to be valid for people from **within** _or_ **outside** the chosen countries.

::: warning
In order for Solidrock to know a country to match against, a country field must be added to ticket forms.
:::

## Discount Rules

Add rules determining when a discount can be applied to an order or an item within an order.

For example, if there is a rule for "1 Early Bird Ticket" and a rule for "1 Team Member Ticket", then the order must contain both a Team Member ticket and an Early Bird ticket to qualify.

::: warning
In order to qualify, all rules must pass.
:::

::: tip
You may choose whether a discount should be automatically applied if the rules are met, or whether it is down to the booker to still manually enter the discount code.
:::

## Batch Create Discounts

Creating batch discount codes is useful when multiple one time use discounts need to be generated in bulk.

### Batch Name

The name of the group of codes being created. This is for an event administrators reference only.

### Amount to create

The total number of 1 time use discount codes to create within this batch.

### Prefix

A 4 character prefix for the automatically generated discount code.

### Code Pattern

Specify a pattern for the discount codes being produced.

The pattern accepts 3 different characters:

-   **X**: Alpha-Numeric Character (e.g. A-Za-z0-9)
-   **A**: Alphabetical Character (e.g. A-Za-z)
-   **N**: Numerical Character (e.g. 0-9)

The pattern can be between 1 and 4 characters long, depending on how many codes you wish to generate.

### Other settings

Batch generated discounts have a simpler set of available settings from regular discounts. All settings are described in more detail further up this page. They include:

-   Discount Type
-   Discount Amount
-   Minimum Subtotal
-   Valid From Date
-   Valid To Date
-   Voucher Type
-   Can be used on bookings site?
