# Updates

<!---
## May 2023

As Spring rolls into Summer we've got a host of updates rolling out including a major refactor of how groups are managed, improvements to Payment Plans and instalments and some refinements to the booking process UI.

### Groups

With this update, groups have been revamped to remove complexity and head-scratching moments. Say hello to Groups v2.0 now with:

-   **Configuration:** Event admins now configure if and how an event uses groups from the event settings page
-   **Bookings:** When event settings require it, Lead Bookers will now be asked to register or assign a group to their booking as a first step which will automatically assign the chosen group to any tickets or extras then added to their booking.
-   **Forms/Fields:** Group Select fields are a thing of the past! Groups are no longer managed within custom form fields but are now assigned and managed from ticket lists and booking summary tables. You can now finally batch-update tickets and extras to a different group in just a couple of clicks :raised_hands: :tada:
-   **Reports:** The old `Group Tickets` report has been renamed to `Groups` and now includes details of all extras that have been associated to a group as well.
-   **Group Entry Pages:** These now list the tickets and extras assigned to a group. In addition, the page will provide details on all Group Coordinators.

### Payment Plans

Since their launch in Summer 2022, Payment Plans have become increasingly popular. One common request from our event partners has been the ability for events to require a Lead Booker to accept specific payment terms and conditions when using a payment plan, including agreeing to the line of credit offered by the event. These payment-specific terms are recorded and can be viewed on the order page within the backend, similar to order-level terms and conditions.

If an instalment payment fails when paid by card or set for automatic collection, Solidrock will send an email notification to the Lead Booker with a link to pay the instalment. Previously, some users were unsure where to navigate to pay the instalment after logging in to their account. However, now whenever an instalment is overdue, a notification will appear on-screen with a link to pay or update card details to ensure timely payment.

### Booking Process UI

The main booking process a Lead Booker would navigate through has been updated to bring refinements to colours, text sizes and iconography as well as to provide easier access to their account profile, bookings and groups.

The event landing page now includes a table listing the available tickets and prices, meaning people can access and digest this important information without having to register a Solidrock account first.
--->

## February 2023

This updates brings a ton of little refinements across the platform to Payment Instalments, form validation errors & UI, Groups and automated Event Emails.

Oh and did we mentioned we squashed over 40 bugs too!?

### Groups

When groups are created, either by an event admin or registered by a Lead Booker, they are given a unique, random group code. Event Admins now have the ability to chage this code to be something a little less random and a little more memorable!

### Event Emails

They been a little while coming but we are finally ready to release two new automated emails that can be enabled per event.

1. **Unassigned Tickets Reminder:** This email is sent to all Lead Bookers who have a booking with tickets that are still missing required form information (e.g. DOB, Dietary Requirements, etc) 1 week before the order editing cut-off date. This is especially useful if the event is setup to allow Group Coordinators or anybody to complete a booking without first providing this information.

2. **Digital Tickets:** Until now a Lead Booker needed to login to their Solidrock profile to download their tickets. This email simplifies the process significantly by emailing the tickets to them at an appropriate date specified by the event admins using the `Digital Ticket Delivery Date` field.

::: tip NOTE
Any booking that is completed and paid for after the Digital Ticket Delivery Date will have their tickets emailed immediately.
:::

## October 2022

### Group Management

Alongside all the usual bug fixing and performance tuning we made managing groups simpler at the event level in this update. By creating two new areas in the main event navigation for viewing the 'Group List' and 'Group Coordinators' it is easier than ever to see which groups are attending an event and to access to key contact details for the group coordinators.

### FAQs

Based on conversations we have with our incredible event administrators we compiled an initial set of [FAQs](/faqs/) which we'll be adding to over time.

### Event Ticket Limit

There is now a new `Ticket Limit` option within an event's settings which acts as a hard limit across all ticket options. When that limit is reached no further tickets can be booked.

## July 2022

In this update we've only gone and ticked off one of the most requested features - Payment Plans! Not to mention a plethora of bug fixes, updates to the whole backend look and feel as well as wristband assignment and scanning. If it's been a bit quiet around here lately, now you know why!

### Payment Plans

Want to offer the option to your customers to pay a deposit and subsequent weekly or monthly instalments for their order? Now you can! Deposit amount and number of instalments are completely customisable. You can even offer multiple payment plans to the customer for them to choose the most appropriate option for them.

Orders can of course always be paid in full at checkout by card or, in certain circumstances, by BACs (Bank Transfer) too. Payment plans build on these payment methods allowing you the option to attempt automatic collection of an instalment where a customer is paying by card. Where this isn't possible (if the customer is paying instalments by BACs) or fails (e.g. the saved card on record has since expired) then an instalment payment instruction is sent directing the customer on how to pay the scheduled instalment either by making another bank transfer, or by logging into their Solidrock profile and paying by card.

### Wristband Assignment

With in-person events now a real thing again (🙏🏻 _Hopefully we've said goodbye to COVID restrictions for good_ 🙏🏻) we've spent some time refining and updating the delegate arrivals and check-in experience as well as bring the [Box Office](/guide/front-of-house/box-office) out of beta! We've brought all these features under one roof we're calling ['Front of House'](/guide/front-of-house/).

With these updates we now also offer support for USB and Bluetooth HID barcode scanners and, now that we've revamped the check in and out process allowing multiple records per ticket, we've setup a new 'Check In' report so you can pull out this detail.

If your event uses wristbands, or any other uniquely identifiable ID pass on-site you can now assign these to tickets within Solidrock either by entering the unique ID of the band or pass, or by scanning a QR Code or Barcode. Wristbands can be assigned ahead of the event, during check-in or through the box-office.

Once assigned, a search can be performed on a wristband ID or a QR/Barcode scanned to pull up the associated ticket details.

### Design updates for the backend

We've been busy bringing some visual updates to the backend, unifying the design and pages throughout. But it doesn't stop there, we've also refined search and filtering across the board and brought in tons of enhancements here and there. We can't wait for you to see them.

## February 2022

This update primarily focussed on improvements to the underlying hosting infrastructure to increase performance of the system under heavier loads. There was also a healthy amount of 🐛 squashing **and** some quality of life improvements tucked away for event organisers.

### Archiving old events

Tidy up your event lists by archiving old, past events!

::: tip
From the event list page in the backend open up the event options menu (by clicking on the cog) and selecting 'Archive' from the list of options.
:::

Archived event data is still fully accessible and is now accessed from a more desicrete list on the same event list page. Archivfed events do not show in the 'My Events' navigation.

### Extras Chart

For events that sell extras, we've added a new chart to event dashboards to provide at a glance statistics on the number of extras sold, indiciating the number that are full paid, and those in Pending (BACs) orders.

### Quick link to documentation & guide

In the event sidebar navigation you'll now find a new link to this documentation site where we'll host guides, tutorials, FAQs and release notes!

## Previous Releases

Solidrock Booking System is under constant development. Some worthy mentions for recent improvements include:

### Event Check-in

From the event sidebar navigation you can access the check-in link that will load up the event arrivals and check-in pages. From here you can either scan a ticket's QR code to check-in an individual ticket or search for and entire order by entering the unique order reference to then check-in one or more tickets.

::: tip
Checked-in tickets will be indicated as such within the backend event ticket list by a visual &check; symbol.

The Ticket List report also provides a new 'Checked in Date' column showing the date and time a ticket was checked in to the event.
:::
