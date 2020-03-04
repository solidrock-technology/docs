# Integrations

Solidrock plays nicely with other services and platforms.

## Mailchimp

Event Organisers can choose to connect their Mailchimp account with Solidrock. This integration will allow Solidrock to create and populate an audience with the Mailchimp account, subscribing users to the audience tagged with relevent tags to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within Mailchimp enables event organisers to segment and communicate to specific people, key information about the event.

With the integration in place Solidrock users are automatically subscribed and kept up-to-date whenever an [account type](/guide/accounts/#account-types) is added or changed or an association to a team or group is made or deleted.

### Setup

To setup the Mailchimp integration an Organsation Administrator should go to the [integrations](https://events.solidrock.io/admin/organisations-integrations) area of the backend and select to 'Add new integration'. From here they will be able to choose 'Mailchimp' and provide their Mailchimp API Key. With these pieces of information in place they'll then be able to select which of their events (one or more) they wish to connect to Mailchimp.

::: tip
If one or more events are selected at the time the integration is created, all Solidrock accounts associated to those events will be synced through to the new 'Solidrock Booking System' audience.
:::

Once the integration has been created it is possible to enable it on any of the existing or future events for that organisation. To enable it per event, access the events backend (e.g. at `https://events.solidrock.io/admin/{YOUR-EVENT-SLUG}/dashboard`) and click 'Mailchimp' under the integrations heading in the sidebar. From this page click to 'Connect to Mailchimp'.

### Disconnecting

Should you wish to disconnect an event from Mailchimp, access the integration as above (by clicking 'Mailchimp' under the integrations heading in the event's backend sidebar) and for each of the listed triggers, choose the 'Delete' option from the menu accessed by **&vellip;** icon.