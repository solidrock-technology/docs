import{r as i,o,c as n,a as r,b as s,w as c,F as h,e as t,d as e}from"./app.0ab28ce1.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l={},p=t('<h1 id="tickets" tabindex="-1"><a class="header-anchor" href="#tickets" aria-hidden="true">#</a> Tickets</h1><p>Within any event you can create as many tickets as you need. To aid the creation of tickets which may share many similar settings you can duplicate a ticket using the <strong>\u22EE</strong> icon and choosing the <strong>Duplicate</strong> option.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If your event has price breaks for its tickets, duplicating a ticket and then modifying it&#39;s price and available to and from dates is often the quickest way to set these up.</p></div><p>Outlined below are all the available options and settings for event tickets.</p><h2 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information" aria-hidden="true">#</a> General Information</h2><h3 id="ticket-name" tabindex="-1"><a class="header-anchor" href="#ticket-name" aria-hidden="true">#</a> Ticket Name</h3><p>The name of the ticket that will be displayed throughout the front and backend of this event.</p><h3 id="ticket-description" tabindex="-1"><a class="header-anchor" href="#ticket-description" aria-hidden="true">#</a> Ticket Description</h3><p>Visible alongside the ticket name on the frontend booking pages, and should be used to aid those booking in to know which ticket(s) are right for them.</p><h3 id="pay-as-you-feel" tabindex="-1"><a class="header-anchor" href="#pay-as-you-feel" aria-hidden="true">#</a> Pay As You Feel</h3><p>If you&#39;d prefer to give lead bookers the option to decide how much to pay for a ticket during the booking process you can toggle this option on.</p><h3 id="pay-as-you-feel-minimum" tabindex="-1"><a class="header-anchor" href="#pay-as-you-feel-minimum" aria-hidden="true">#</a> Pay As You Feel Minimum</h3><p>Optionally set the minimum price someone must pay for a ticket.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Option is only available if &#39;Pay As You Feel&#39; option is <strong>enabled</strong>.</p></div><h3 id="pay-as-you-feel-maximum" tabindex="-1"><a class="header-anchor" href="#pay-as-you-feel-maximum" aria-hidden="true">#</a> Pay As You Feel Maximum</h3><p>Optionally set the maximum price someone could pay for a ticket.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Option is only available if &#39;Pay As You Feel&#39; option is <strong>enabled</strong>.</p></div><h3 id="price" tabindex="-1"><a class="header-anchor" href="#price" aria-hidden="true">#</a> Price</h3><p>The fixed price of the ticket.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Field is only available if &#39;Pay As You Feel&#39; option is <strong>disabled</strong>.</p></div><h3 id="total-available" tabindex="-1"><a class="header-anchor" href="#total-available" aria-hidden="true">#</a> Total Available</h3><p>The total number of this ticket available. Once the number available have been added to bookings, the option to purchase this ticket will be removed for lead bookers from the frontend booking flow.</p><h3 id="max-per-lead-booker" tabindex="-1"><a class="header-anchor" href="#max-per-lead-booker" aria-hidden="true">#</a> Max per Lead Booker</h3><p>The maximum number of a ticket that can be purchased per lead booker across all of their bookings.</p><h3 id="max-per-lead-booker-group-coordinators" tabindex="-1"><a class="header-anchor" href="#max-per-lead-booker-group-coordinators" aria-hidden="true">#</a> Max per Lead Booker <em>(Group Coordinators)</em></h3><p>For those logged in as Group Coordinators you can provide a different maximum purchase limit of a ticket per booking.</p><h3 id="max-per-group" tabindex="-1"><a class="header-anchor" href="#max-per-group" aria-hidden="true">#</a> Max per Group</h3><p>If you want to restrict the number of a ticket that can be purchased within an entire group across multiple bookings you can set that value here.</p><h3 id="available-from-date-time" tabindex="-1"><a class="header-anchor" href="#available-from-date-time" aria-hidden="true">#</a> Available From Date/Time</h3><p>The date and time that a ticket should become available for purchase.</p><h3 id="available-to-date-time" tabindex="-1"><a class="header-anchor" href="#available-to-date-time" aria-hidden="true">#</a> Available To Date/Time</h3><p>The date and time from which a ticket should no longer be available for purchase.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you have ticket price breaks, you can use these dates to swap between the different available price break tickets.</p></div><h3 id="status" tabindex="-1"><a class="header-anchor" href="#status" aria-hidden="true">#</a> Status</h3><p>Whether or not to make the ticket available to bookers on the frontend.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can set a ticket to <strong>Disabled</strong> and still provide a link directly to it on the frontend for specific people to book.</p></div><h3 id="form-selection" tabindex="-1"><a class="header-anchor" href="#form-selection" aria-hidden="true">#</a> Form Selection</h3><p>Here you can choose a custom form you&#39;ve already created to associate with a ticket. Custom forms can contain any number of custom fields that you&#39;ve created to capture delegate information or preferences necessary for the running of your event.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You&#39;re often best to create your custom fields and forms ahead of then making your tickets.</p></div><h3 id="ticket-type" tabindex="-1"><a class="header-anchor" href="#ticket-type" aria-hidden="true">#</a> Ticket Type</h3><p>In most cases the &#39;Delegate&#39; option is the likely choice but if you have teams that people can apply to join, or people that lead or manage groups of other delegates you have the option to choose a &#39;Team Member&#39; or &#39;Group Coordinator&#39; ticket type.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>Team Member</strong> tickets provide a further set of fields for a person to complete including which team(s) to apply to join.</p></div><h3 id="hide-team-selection-fields" tabindex="-1"><a class="header-anchor" href="#hide-team-selection-fields" aria-hidden="true">#</a> Hide team selection fields</h3><p>By default if the Ticket Type has been set to &#39;Team Member&#39; then the booker filling in their ticket details will need to select one or more teams to apply to join. If you&#39;d prefer that they don&#39;t see these options you can toggle this field on.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This field will only be shown if <strong>Ticket Type</strong> has been set to &#39;Team Member&#39;</p></div><h3 id="ticket-set" tabindex="-1"><a class="header-anchor" href="#ticket-set" aria-hidden="true">#</a> Ticket Set</h3>',46),m=e("You can assign one existing "),u=e("ticket set"),f=e(" to each ticket to categorise into a pre-defined set. Sets are displayed on the dashboard with the total count of purchased associated tickets."),g=t('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You may for example create ticket sets for various age ranges such as 0-2 (Infant), 3-11 (Child), 12-17 (Youth) and Adults and associate the relevant tickets to each age range. From the dashboard you&#39;d then get a top-level view of the number of delegates coming to the event within each age range.</p></div><h3 id="does-this-ticket-have-any-age-restrictions" tabindex="-1"><a class="header-anchor" href="#does-this-ticket-have-any-age-restrictions" aria-hidden="true">#</a> Does this ticket have any age restrictions?</h3><p>If a ticket has age registrictions you can toggle this option on. Enabling this feature automatically adds a <strong>Date of Birth</strong> field to the ticket to capture and then calculate the age of the person.</p><h3 id="minimum-age" tabindex="-1"><a class="header-anchor" href="#minimum-age" aria-hidden="true">#</a> Minimum Age</h3><p>The minimum age a person must be for a ticket. Their age will be compared against the date you set.</p><h3 id="maximum-age" tabindex="-1"><a class="header-anchor" href="#maximum-age" aria-hidden="true">#</a> Maximum Age</h3><p>The maximum age a person must be for a ticket. Their age will be compared against the date you set.</p><h3 id="compare-against-date" tabindex="-1"><a class="header-anchor" href="#compare-against-date" aria-hidden="true">#</a> Compare Against Date</h3><p>The date to compare the person&#39;s age against to determine if they fall within the minimum and maximum age range.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Often you&#39;ll want to set this date to the start date of your event so you&#39;re checking the age they&#39;ll be once they arrive for the event instead of how old they are on the date they complete their booking.</p></div><h3 id="terms-conditions" tabindex="-1"><a class="header-anchor" href="#terms-conditions" aria-hidden="true">#</a> Terms &amp; Conditions</h3><p>Any specific terms &amp; conditions this ticket holder must agree to.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ticket level terms and conditions must be agreed for every individual ticket, unlike the Event level terms &amp; conditions which a lead booker only needs to agree to once per booking.</p></div>',13);function b(k,y){const a=i("RouterLink");return o(),n(h,null,[p,r("p",null,[m,s(a,{to:"/guide/tickets/ticket-sets.html"},{default:c(()=>[u]),_:1}),f]),g],64)}var T=d(l,[["render",b]]);export{T as default};
