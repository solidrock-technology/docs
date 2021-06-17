# Events

## General Information

### Event Name

The event name is shown in multiple places across the Solidrock Booking System but primarily within the frontend booking experience for delegeates. They will see this within the event summary cards if your event is set to `public`, on the event landing page and within email communications (such as invoices and receipts) regarding your event.

### Slug

The event slug is what appears in the unique Solidrock URL for your event. Typically the event slug would be similar to the event name, but must follow URL encoding principles such that it would predomintantely contain alphanumeric characters and hyphens. By way of example if the event slug was set to `our-amazing-event` and our [organisation slug](/guide/organisations.md#slug) was set to `mega-events`, the frontend landing page for this event would be reachable at `https://events.solidrock.io/mega-event/our-amazing-event`. 

::: warning
Once a slug has been set for an event it **cannot** be changed in the future.
:::

### Event Description

The description is where you'd explain in as much or as little detail as you desire what your event is and other key information a person booking in might need to know ahead of starting an order. The description is shown on the frontend event landing page.

::: tip
You can add simple text formatting to the description text, such as **bold** _italic_ and links by highlighting the text within the description field.
:::

### Event Image

The event image is shown within event summary cards and on the frontend landing page for the event. The image you upload should be high resolution (at least 2000px wide), but no more than 4MB (megabytes) in size. Images can be PNG, JPG or GIF.

### Start Date

This is the start date and time of the event itself. Typically the date that delegates can start to arrive for your event.

### End Date

This is the end date and time of the event and is usually the date and time delegates must leave the event.

### Timezone

Set the timezone for your event start date.

### Digital Event Streaming

If your event is an online or digital event, or has a digital component, you can turn this option on to gain access to further content settings for the digital part of your event. The new area will appear in the sidebar called 'Digital Event'.

From this new area you will be able to create a page, restricted by login using a ticket ID, to stream video content and provide details for other content available online, for example links to hidden content, digital meetings and so on.

### Status

The event status offers a few options:

1. **Offline:** The event is _not_ accessible by anyone from the frontend. Anyone trying to access the booking process for this event will be instructed that bookings are closed.
2. **Public:** The event _is_ accessible by any member of the public from the frontend. The event will also appear on the main [event listing page](https://events.solidrock.io/events).
3. **Private:** The event _is_ accessible by any member of the public so long as they have the specific website URL for the event. The event will not be listed on the main event listing page.
4. **Cancelled:** The event has been cancelled and is no longer accessible for people to book in. Any person trying to access the event frontend will be instructed that the event has been cancelled and they should contact the event organiser for more information.

## Contact Information

The event contact information is specifically related to the event which may be different to the contact information for your organisation. The address in particular should be the location of the event.

### Email Address

The event email address will be made available to those booking in for the event if they need to make an enquiry.

### Website

This is the full URL (including the _https://_) of the website that provides complete information about the event.

### Address

This is the address for the event location. If your event is in-person you can leave all of these fields empty.

### Hide Event Map

On the event landing page we show a map to provide a clearer indication of the event location for those wishing to book in. If you'd prefer this map wasn't show you can toggle this setting on.

## Booking Information

### Order Reference Prefix

The order reference prefix is a 4 character, alphanumeric string that will begin every dynamically created, unique order reference. For example if the prefix is set to `AB12` then orders within this event would look something like `AB122k20`, `AB12abcd` or `AB12m3g4`.

::: warning
Once the prefix has been set, and bookings made for the event, it **cannot** be updated
:::

### Bookings Open Date

This date and time signals when bookings can be made through Solidrock for this event. It can be set in the future or the past.The [event status](/guide/events.md#status) must also be set to something other than `Offline` for people to access the booking process.

### Bookings Close Date

This date and time signals when bookings close through Solidrock for this event. Once this date/time is reached anyone trying to access the booking process will be instructed that bookings for this event are now closed.

### Booking Editing Cutoff Date

This date and time signals when bookings can no longer be edited for this event. Under some circumstances details associated with tickets and extras within a booking can be edited after it has been paid for. Once this date/time is reached the booker will no longer be able to make any changes and must contact the event organiser to make further changes, subject to the event terms & conditions and discretion of the organiser.

### Terms & Conditions

If your event has Terms & Conditions that everyone making a booking must agree to please select them from this dropdown. [Terms & Conditions](https://events.solidrock.io/admin/terms-conditions) can be shared across multiple events so they are created/uploaded [here](https://events.solidrock.io/admin/terms-conditions) ahead of selecting them for the event.

### Unassigned Tickets Allowed?

By default, nobody is allowed to purchase tickets that are missing required data, for example, the name of the person the ticket is assigned to.

You may change this option, to allow either Group Coordinators or anyone to purchase unassigned or incomplete tickets.

::: warning
Team Member type tickets will **always** require the ticket form to be completed, regardless of this setting.
:::

::: tip
You can change this event setting at any point.
:::

## Payment Options

This is where you set how people can pay for their bookings from the frontend. WE currently support payments through [Stripe](https://stripe.com) and by bank transfer (BACs). As you may wish to have the same payment options (e.g. the same Stripe account, or Bank Account for transfers) used across multiple events you first set these up [here](https://events.solidrock.io/admin/payment-options).

When adding a payment option, you can choose to limit that option to only Group Coordinators by using the checkbox below the payment option dropdown.

### Refund Admin Fee

The Refund Admin Fee field is where you can set a specific baseline administrative fee for a payment option. 

### Refund Fee Receipt Text

This text will appear alongside the fee amount in the refund receipt email as a description of the fees.

### Charges & Fees

Use the at a glance calculator to get an understanding for how fees will break down and what you, the event organiser, would receive once the Soldrock and any card processing/transaction fees have been charged. You can set an event to handle the fees in one of two ways:

1. **Fees included within ticket & extra prices:** This is the default setting for fees. Under this option the Solidrock and card processing fees will be taken _out of_ the total cost of the order. For example a £100 order might have a 2% (£2) Solidorck fee decuted as well as a Stripe transaction fee (approximately 1.4%-2.9% if order paid by card). The customer would pay £100 and the event would receive in the region of £95.

2. **Fees are charge to the customer:** You can turn this option on which charges the customer the **Solidrock** fees on top of the order total. Using the same example as before, a customer would pay the £100 order total plus the £2 Solidrock fee.

### Access Pass Image

The access pass image relates to the [Teams](/guide/teams.md) area of and event within Solidrock. If you need to print out lanyards or passes for team members to wear at an event you can do so through Solidrock. This pass image becomes the background image/graphic for that printed pass that then has dynamic information (such as team member name, team name, access priviledges etc) overlaid on top.

The image you upload should be high resolution (at least 2000px wide), but no more than 4MB (megabytes) in size. Images can be PNG, JPG or GIF.

::: tip
INSERT RECOMMENDED IMAGE DIMENSIONS
:::

### Team Opportunities Description

This description, which can have basic text formatting applied, is shown on the frontend event bookings pages for Team Member ticket types where a person is being asked to select which team(s) they would like to join. This field is optional and could be used to explain a little more about the team structure at your event.

::: tip
If your event doesn't require team members to be booked in through Solidrock you can leave this empty.
:::

### Team Times Description

As with the 'Team Opportunities Description', this is shown on the frontend event bookings pages for Team Member ticket types where a person is being asked to select which team(s) they would like to join. This field is optional and could be used to explain a little more about how teams work across different time periods within your event. For example you may have some teams needed for the event setup, some for while the event runs and some for post-event setdown.

::: tip
If your event doesn't require team members, or teams aren't required across multiple time periods, you can leave this empty.
:::

## Emails

### Receipt Organiser Text

Alongside all the standard order receipt information (such as a summary of the order tickets and extras purchased and total amounts paid or due) you can use this field to provide some custom information from you the event organiser.

::: tip
This could be a thank you message or links to your social media and website for more information.
:::

### Receipt Email Card Payment Text

Use this field to provide some custom text on the receipt email specifically to those who have paid by card.

### Receipt Email BACs Payment Text

Use this field to provide some custom text on the receipt email specifically to those who have opted to pay by bank transfer (BACs). You may for example want to outline that the bank transfer description should contain the Solidrock order reference to enable you to easily match up the money in your account with the right order here.

## Tracking

### Facebook Pixel

If you wish Solidrock to pass relevant data back to Facebook for your marketing and campaigns you can add a Facebook Pixel ID here which you can find or create from the [Facebook Events Manager](https://www.facebook.com/events_manager) page.