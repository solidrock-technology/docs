# FAQs

## Event Setup

### Can I archive a past event?

Absolutely! From your organisation page within the backend –accessed by going to 'My Events' and then clicking the organisation name in the dropdown– look down your list of events and using the 3 dots actions menu select 'Archive'. For the time being archived events are simply a way to clean up your list of active or recently active list of events from the 'My Events' list.

You can still access all the event details and associated ticket and extra data by again going to your organisation page, clicking the 'Show Archived Events' button and then choosing 'Manage Event' from within actions menu.

### How do public group registrations work?

Group registrations largely work in one of two ways. Either by being created by organisation admins which provides a greater opportunity to verify and moderate the groups being registered, but can be time-consuming. Or by allowing groups to be registered publicly by any Solidrock account holder for a given event, which makes registration quick but removes some opportunity for organisation admins to verify the groups that are being registered in the system for their events.

#### 1. Registered by Organisation Admins

This is the default behaviour for groups in Solidrock and means that only organisation admins can create groups and group coordinators for those groups. This option allows organisations to have full control of the groups associated to their events. 

Due to the nature of having this level of moderation, any 'Group Select' fields then used within custom forms created to capture delegate details for tickets and extras can use a dropdown and search-to-find by name feature for those making bookings to locate the appropriate group to assign their tickets too.

#### 2. Public Group Registrations

There are 2 ways to enable this functionality:

1. Enable it globally for every event that uses a particular 'Group Set' from the 'Group Set' edit page by going to 'Admin Console' > 'Groups', finding the group set and choosing the 'Edit' option from the actions menu. If enabled globally you will be able to send people to the public registration webpage (available from the Group Set 'Manage' page) so they can register their group ahead of making a booking. Once registered they will be shown –and receive by email– their group's unique code to use for their bookings and can be distributed to other Lead Bookers who need to assign their tickets to the same group.

2. Enable it at the custom field level. Doing it this way means you don't need to have public group registrations enabled for every event that uses a particular group set, but can be more granular in deciding which events should allow this option and which should not. When creating or editing a 'Group Select' field from the 'Admin Console' > 'Form Builder' > 'Fields' area you will have the option to enable this feature. Fields setup in this way will provide an instruction to LEad Bookers that they must enter the unique group code, or if they themselves are the group coordinator that they can register a group and be sent the unique code to use.

::: warning Change in field behaviour
When the setting is enabled, the behaviour of assigning tickets to group items changes for Lead Bookers. Instead of having the option to search by name or view within a dropdown, they must now use the unique group code when filling out delegate details.
:::

## Orders

### Where can a lead booker find their tickets?

Lead bookers can first find their orders (incomplete, pending and paid) from their ['My Bookings'](https://events.solidrock.io/admin/profile/my-bookings) page within their Solidrock profile. 

From here they can continue where they left off with any incomplete order and (subject to the event settings) update the details of paid for tickets and extras in pending and paid orders.

Digital tickets are available for **Paid orders only** from the 3 dots action menu by clicking on the 'Download Tickets' option.

### How do I reconcile a Pending BACs order?

Once you have confirmed you've received the bank transfer into your bank account you can update the related order within Solidrock to mark it as paid. To do so, first find the order from your event's 'Order List' page (searching by order reference or lead booker name should bring back the order). 

:::tip
Solidrock instructs the Lead Booker paying by BACs to use the order reference as the payment reference for the bank transfer.
:::

Using the 3 dots action menu choose to 'Edit' the order. You can also access the edit page from the order 'Show' page by clicking on the 'Order Options' button and choosing 'Edit Order' from the menu.

On the order edit page update the 'Amount Paid' field to match the amount you received by bank transfer (we'll show you the total value of the order, so you can easily see if the transferred amount is equal to the full value of the order). If the order has been fully paid set the 'Payment Status' dropdown to 'Paid' (if not you may want to leave the status as pending). Click the 'Update Order' to save the changes.

## Accounts

### How do I register Group Coordinators?

There are 2 primary ways Group Coordinators can be registered within Solidrock. The first, by having an event organiser register the account or add the account category to an existing account. And the 2nd to have a person self-register as a Group Coordinator.

#### 1. Registered by Organisation Admin

Before creating a Group Coordinator in this way you will need to have first set up the group they will be assigned to from the 'Admin Console' > ['Groups'](https://events.solidrock.io/admin/groups) area.

Having done that organisation admins can then register group coordinators from the 'Admin Console' > ['Accounts'](https://events.solidrock.io/admin/accounts) area. If you know the person you're setting up as a Group Coordinator already has a Solidrock account you can first search for them in the account list then using the actions menu choose to 'Edit' the account. At the bottom of the edit page you have the option to 'Add new account type' which when clicked will display a pop-up window. From here set:

- 'Select a category' to 'Group Coordinator'
- 'Select an organisation' to your organisation (if you manage multiple organisations in Solidrock more than one may be listed)
- 'Select and event' to the event that you want them to be a group coordinator for
- 'Select a group set' to the set that their group belongs to.
- 'Select a group item' to the group that they will coordinate.

You can optionally choose to notify the person by email and click 'Save changes' to apply this account type.

If the person **does not** already have a Solidrock account you will need to register them an account by clicking the green 'Create account' button from the main accounts page and fill in their first name, last name and email address as a bare minimum and set up the account type following the same instructions as above to specify the type, event, group set and group item. Click the green 'Create account' button to complete the registration.

#### 2. Self-registered Group Coordinators

If an event is set up to allow 'Public Group Registrations' any member of the public who has created a Solidrock account will be able to register their group for that given event by specifying the group's name and location. The person registering the group will automatically become the Group Coordinator.

## Arrivals & Check-in

### How do I check people in to my event?

Using Solidrock's Front of House suite of functions you can manage checking people in as they arrive at your event, as well as being able to manage the check-in and out on a per-venue basis throughout the course of your event.

For arrivals at the event, you can use the ['Arrivals'](/guide/front-of-house/arrivals) feature to search by:

- Delegate name
- Order Reference
- Unique Ticket ID
- Event Pass/Wristband ID

You also have the option to scan-to-search which works either by using a device's camera or a barcode reader to read the QR code from Solidrock's digital tickets or a barcode/QR code on an event pass or wristband you have issued that has been allocated to a ticket within Solidrock.
