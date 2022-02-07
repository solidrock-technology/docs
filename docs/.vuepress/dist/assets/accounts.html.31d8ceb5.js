import{r as i,o as s,a as l,b as e,d as t,w as n,F as c,e as o,c as d}from"./app.1d953eab.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=e("h1",{id:"accounts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accounts","aria-hidden":"true"},"#"),o(" Accounts")],-1),m=e("p",null,"Anyone wishing to book in to an event or create and manage events of their own requires an account.",-1),_=e("h2",{id:"registration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#registration","aria-hidden":"true"},"#"),o(" Registration")],-1),g=o("Accounts are registered either from the "),f={href:"https://events.solidrock.io/admin/register",target:"_blank",rel:"noopener noreferrer"},b=o("registration page"),k=o(" or by an existing user with relevant permissions from within the backend control panel."),v=d('<p>Accounts are registered through a secure invitation system meaning only the account holder is able to set and update their password.</p><h2 id="account-types" tabindex="-1"><a class="header-anchor" href="#account-types" aria-hidden="true">#</a> Account Types</h2><p>Accounts take the form of different roles/types including (in order of most privileges to least):</p><ul><li>Organisation Admin</li><li>Group Coordinator</li><li>Lead Booker</li><li>Team Member</li><li>Team Leader</li></ul><p>An account can have one or more types associated with it. For example you could be a Team Leader for Event \u2018A\u2019 run by Organisation \u2018X\u2019, and a Lead Booker for Event \u2018B\u2019 run by Organisation \u2018Y\u2019.</p><p>Account Types are automatically assigned for Lead Bookers and Team Members through the frontend booking process. Group Coordinators are assigned from the frontend if &#39;public group registrations&#39; has been enabled for the event, otherwise these can be set from the control panel. All account types can be assigned through the backend control panel.</p><h3 id="organisation-admin" tabindex="-1"><a class="header-anchor" href="#organisation-admin" aria-hidden="true">#</a> Organisation Admin</h3><p>An organisation admin has permission to access the backend control panel to create and manage their own events, including access to:</p><ul><li>Event Details (incl. dates, description, location, payment options, invoice/receipt email customisations)</li><li>Sales Information</li><li>Orders</li><li>Ticket &amp; Extras management</li><li>Discounts</li><li>Teams: <ul><li>Team Leaders</li><li>Team Members</li><li>Access Levels</li><li>Approval Criteria</li></ul></li><li>Reporting</li><li>Accounts: <ul><li>Creating new accounts</li><li>See account details for those accounts who have made a booking for one or more of the organiser&#39;s events</li></ul></li><li>Groups</li><li>Integrations (e.g. Mailchimp)</li></ul><h3 id="group-coordinator" tabindex="-1"><a class="header-anchor" href="#group-coordinator" aria-hidden="true">#</a> Group Coordinator</h3>',10),y=o("Group Coordinators are those who lead and manage groups of event delegates. Coordinators are assigned to one or more "),w=o("groups"),x=o(". It is possible for an event organiser to provide alternative features and limits to Group Coordinators than regular bookers. For example a Group Coordinator may be able to:"),T=e("ul",null,[e("li",null,"Book more tickets in a single order"),e("li",null,"Complete and pay for their order without filling in all the usual required ticket details"),e("li",null,"Pay for orders using other payment options than by card (e.g. Bank Transfer/BACs)")],-1),A=o("When logged in to their "),L={href:"https://events.solidrock.io/admin/profile",target:"_blank",rel:"noopener noreferrer"},B=o("profile area"),C=o(" a Group Coordinator will be able to see which Groups they have been assigned to, for which events and see who has booked in to those events, associated with their group."),G=e("h3",{id:"lead-bookers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lead-bookers","aria-hidden":"true"},"#"),o(" Lead Bookers")],-1),M=e("p",null,"Anyone who starts a booking for an event is given the 'Lead Booker' account type for that particular event. Lead Bookers can save and return to their bookings at a later date, having only 1 active booking per event at any one time. From their profile area Lead Bookers can:",-1),E=e("li",null,"View their active orders and continue where they left off",-1),F=e("li",null,"Make edits to ticket and extra details on completed orders",-1),O=o("Download a PDF of their tickets for completed, paid for orders. This PDF includes a QR code per ticket that can be used to "),D=o("check-in"),I=o(" to the event on arrival if that is something you need for your event."),R=e("h3",{id:"team-members",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#team-members","aria-hidden":"true"},"#"),o(" Team Members")],-1),S=o("Team Member account types are set once a person has booked a Team Member ticket and that person has then been "),V=o("accepted onto a team"),N=o(". Team Members are automatically emailed once they have been accepted onto a team. They can also login to their Solidrock profile area to see the approval status of their team member applications."),P=e("h3",{id:"team-leaders",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#team-leaders","aria-hidden":"true"},"#"),o(" Team Leaders")],-1),j=e("p",null,"Solidrock teams can optionally have one or more team leaders. Team Leader account types are set within the backend control panel on a user's account by an Organisation Admininstrator. When an account has the Team Leader role they can access their profile to see all the team members that have been accepted to their team(s).",-1);function q(W,Q){const r=i("ExternalLinkIcon"),a=i("RouterLink");return s(),l(c,null,[p,m,_,e("p",null,[g,e("a",f,[b,t(r)]),k]),v,e("p",null,[y,t(a,{to:"/guide/groups.html"},{default:n(()=>[w]),_:1}),x]),T,e("p",null,[A,e("a",L,[B,t(r)]),C]),G,M,e("ul",null,[E,F,e("li",null,[O,t(a,{to:"/guide/check-in.html"},{default:n(()=>[D]),_:1}),I])]),R,e("p",null,[S,t(a,{to:"/guide/teams/approval.html"},{default:n(()=>[V]),_:1}),N]),P,j],64)}var z=h(u,[["render",q]]);export{z as default};