import{_ as e,o as t,c as i,V as a}from"./chunks/framework.98960eec.js";const m=JSON.parse('{"title":"Integrations","description":"","frontmatter":{},"headers":[],"relativePath":"guide/integrations.md","filePath":"guide/integrations.md"}'),o={name:"guide/integrations.md"},n=a('<h1 id="integrations" tabindex="-1">Integrations <a class="header-anchor" href="#integrations" aria-label="Permalink to &quot;Integrations&quot;">​</a></h1><p>Solidrock plays nicely with other services and platforms.</p><h2 id="mailchimp" tabindex="-1">Mailchimp <a class="header-anchor" href="#mailchimp" aria-label="Permalink to &quot;Mailchimp&quot;">​</a></h2><p>Event Organisers can choose to connect their Mailchimp account with Solidrock. This integration will allow Solidrock to create and populate an audience with the Mailchimp account, subscribing users to the audience tagged with relevent tags to indicate the users specific events, roles (e.g. are they a Lead Booker, Group Coordinator etc) and other pertinent information such as which Groups or Teams do they belong to. Having this detail available within Mailchimp enables event organisers to segment and communicate to specific people, key information about the event.</p><p>With the integration in place Solidrock users are automatically subscribed and kept up-to-date whenever an <a href="/guide/accounts/#account-types">account type</a> is added or changed or an association to a team or group is made or deleted.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>To setup the Mailchimp integration an Organsation Administrator should go to the <a href="https://events.solidrock.io/admin/organisations-integrations" target="_blank" rel="noreferrer">integrations</a> area of the backend and select to &#39;Add new integration&#39;. From here they will be able to choose &#39;Mailchimp&#39; and provide their Mailchimp API Key. With these pieces of information in place they&#39;ll then be able to select which of their events (one or more) they wish to connect to Mailchimp.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If one or more events are selected at the time the integration is created, all Solidrock accounts associated to those events will be synced through to the new &#39;Solidrock Booking System&#39; audience.</p></div><p>Once the integration has been created it is possible to enable it on any of the existing or future events for that organisation. To enable it per event, access the events backend (e.g. at <code>https://events.solidrock.io/admin/{YOUR-EVENT-SLUG}/dashboard</code>) and click &#39;Mailchimp&#39; under the integrations heading in the sidebar. From this page click to &#39;Connect to Mailchimp&#39;.</p><h3 id="disconnecting" tabindex="-1">Disconnecting <a class="header-anchor" href="#disconnecting" aria-label="Permalink to &quot;Disconnecting&quot;">​</a></h3><p>Should you wish to disconnect an event from Mailchimp, access the integration as above (by clicking &#39;Mailchimp&#39; under the integrations heading in the event&#39;s backend sidebar) and for each of the listed triggers, choose the &#39;Delete&#39; option from the menu accessed by <strong>⋮</strong> icon.</p>',11),s=[n];function r(c,h,l,d,p,g){return t(),i("div",null,s)}const b=e(o,[["render",r]]);export{m as __pageData,b as default};
