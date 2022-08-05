<style>
    .in-progress {
        color:rgb(124 45 18);
        background-color:rgb(254 215 170);
        border-radius:9999px;
        padding:0.125rem 0.50rem;
        white-space: nowrap;
    }

    .paid {
        color:rgb(20 83 45);
        background-color:rgb(187 247 208);
        border-radius:9999px;
        padding:0.125rem 0.50rem;
        white-space: nowrap;
    }
</style>

# Payment Plans

## Creating and Editing

### General Information

#### Payment Plan Name
This name will appear on the checkout form for Lead Bookers to select.

#### Plan Description
This description will appear on the checkout form, when a Lead Booker selects a plan.

#### Available From
The date that this payment plan is available to Lead Bookers from.

#### Available To
The date that this payment plan is available to Lead Bookers until. This date must be early enough so that all instalments can be paid before the event start date.

#### Instalment Period
The payment instalments will be taken every week or month (depending on which you choose) for the amount of instalments you choose.<br>
For example, selecting 5 months will schedule a monthly payment for the next 5 months. 

#### Deposit
The deposit amount in pounds (£) or as a percentage of the order value (%)

#### Minimum Subtotal (£)
This is the minimum subtotal an order must have before this plan is available for selection.

#### Automatically Collect Payment
Enable this option if you want Solidrock to automatically collect scheduled payments. If this option is disabled, an invoice will be sent for Lead Bookers to manually pay the scheduled payment instead.

#### Status
This allows you to choose whether this payment plan is enabled or not. 

## Instalments

### Checkout & Deposit
At the checkout, a Lead Booker will be able to select any available payment plan. When a plan is selected, the payment button will update to the value of the payment plan's deposit amount.
Once the deposit payment has been successfully taken, the remaining instalments will be created for that order and the Lead Booker will receive their receipt email, listing out the remaining instalments.

#### Order Payment Status
After the deposit for an order has been taken, the order's payment status will be changed to <span class="in-progress">In Progress</span>. It will remain as this until all the instalments have been paid, at which point the payment status will be updated to <span class="paid">Paid</span>.

### Viewing Instalments
As an Organisation Admin, you can view a list of instalments for an order in the Order List page. Any orders in this list that have instalments will have a small instalment icon in the left-hand column. Clicking this icon will show/hide the instalments for that specific order, including the instalment amount, due date and the payment status for that instalment.

As an Organisation Admin, you can also view all instalments for your event using the new Instalments page, listed under the 'Bookings' section of the left-hand event menu.
This page is searchable and filterable, and will list every instalment for the event, including the following details:
- Order Reference
- Lead Booker Name
- Instalment Amount
- Payment Status
- Due Date

As a Lead Booker, you can view instalments for an order through the [My Bookings](https://events.solidrock.io/admin/profile/my-bookings) page within your profile area. For any 'In Progress' orders, using the triple-dot menu on the right, select 'Show Instalments'.
If the order was made using a card, you'll also have the option to pay for the next due instalment using the triple-dot menu within an instalment row.

:::tip
If a Lead Booker has multiple due instalments, they will only be able to pay for the first due instalment initially. Once that instalment has been paid, they will then have access to pay for the next due instalment.
:::


### Updating an instalment
Within the Order List, when showing the instalments for an order using a payment plan, you'll see the option in the triple-dot menu to edit an instalment. From the following form, you'll be able to update the amount of the instalment and the payment status of the instalment.
:::warning
If you update the amount of an instalment, any **future** instalments for this order will also be updated to keep the total order value correct.
:::

If an order has entered a payment plan using BACs, this is where an Organisation Admin would confirm the instalment as paid, once the invoice for the instalment has been paid.

### Auto-collected Payments
If your payment plan was set up with the 'Automatically Collect Payment' field enabled, we will automatically try and collect the payment from the card used for the initial purchase. This functionality is only available for Stripe orders.<br>
If the payment was successful, the instalment will automatically be marked as Paid and the order's amount paid will increase by the instalment amount.<br>
If the payment failed, an email will be sent to the Lead Booker asking them to manually pay for their instalment (see [Manual Payments](#manual-payments)).

### Instalment Reminders
Instalment reminders will be sent out when an instalment is due within 2 days. If the payment plan is set to auto-collect the payment, this will be mentioned in the email and Lead Bookers will not at that point need to take any action.<br>
If the payment plan is not set to auto-collect the payment, the email will either contain a link to pay the invoice through the payment portal, or for BACs orders, will contain the details necessary for the Lead Bookers to pay the invoice. 

### Manual Payments
A Lead Booker can manually pay for instalments through the payment portal within their profile area. 
This can be used for Lead Bookers who want to pay for an instalment early, for instalments that have failed when being automatically collected, or for payment instalments that are not automatically collected.