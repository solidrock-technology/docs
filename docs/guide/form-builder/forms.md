# Forms

[Custom forms](https://events.solidrock.io/admin/form-builder/forms) accessible in the admin backend from 'Admin Console' > 'Form Builder' > 'Forms' are what you can optionally attach to a Ticket or Extra so that when added to an order the Lead Booker is then able to provide the requested information, be that required or optional.

Forms can be re-used across multiple tickets and extra within the same event and even across events, so if you have a standard set of questions or information for tickets across your events you may set up 1 form and use it everywhere.

:::tip
There is no limit to the number fo forms you can create.
:::

## Creating & Editing a form

### Form Name

What you will see in the admin backend to understand what this form is for.

### Form Submit Button Text

The text in the submit button that a Lead Booker will see when they are filling the form in (e.g. 'Submit', 'Save Information', 'Save' etc.).

### Fields

Here you add which of Solidrock's default fields and your own custom fields should be added to the form. 

You can determine the order of the fields by using the drag handle icon, specify if a field is required for the Ticket or Extra to been considered 'complete' and if there are any conditional visibility rules associated.

:::warning Updating fields in an existing form
You can update the fields within a custom form at any time however be aware that if you add/remove fields from a form that has been used for booked tickets that Solidrock is unable to retrospectively request information from a Lead Booker for fields they didn't previously have access to when they placed their booking.
:::

#### Conditional Rules

There may be occasions where a field only makes sense based on the data provided in a previous field.

For example, we may have a 'Do you have any dietary requirements?' lightswitch field and a 'Please give more details about your dietary requirements' text field. It makes sense to only show the latter if the first field is toggled on - indicating a 'Yes'.

Conditional rules allow us to achieve this behaviour.

Using the above example we would set the conditional rule fields on the 'Please give more details about your dietary requirements' field to:

`'Do you have any dietary requirements?'`  |  `'Is equal to'`  |  `Yes`

:::warning Hidden Fields
Fields hidden using the conditional rules **must** not be required otherwise you run the risk of Lead Bookers facing validation errors on those invisible fields.
:::

## Form Preview
If you wish to preview the custom form and see it as a Lead Booker would when buying their tickets, on the [list of custom forms](https://events.solidrock.io/admin/form-builder/forms), use the triple-dot menu and select 'Preview'.

This will render the form as seen on the front-end by Lead Bookers, with an option to toggle on/off the Team Member team selection options at the bottom of the form.

## Field Settings
### Custom Label & Instructions
On some forms, you may wish to re-use previously made custom fields but tweak them slightly (to have different instructions, for example).
Using the triple-dot menu for a field, when editing a form, you can edit the field settings.

In the modal window that pops up, you'll have the option to assign a custom label and instructions to this field.
These settings will apply to the field for this form only and will not update the underlying custom field itself.

### Required Fields
To make a field a required field that needs to be filled by the Lead Booker, enable this option. 
This option makes this custom field required within this form. Any other forms using this custom field will not be updated.
Any fields that are required within this form will show an asterisk _(*)_ next to the field's name.

:::tip Unassigned Tickets
If your event allows for unassigned tickets, the summary page will not show that information is required on this form, until the Lead Booker starts filling this form out.
The unassigned ticket setting will allow people to purchase tickets with no information added, even if every field in the form is required.
:::

### Hiding a field
You can hide a field from the Lead Booker's view by enabling the 'Hide this field from the front-end booking form?' setting.
This will still show the field when being edited by an Organisation Admin in the Admin Console but will not display it to Lead Bookers on the front-end.

:::tip Conditional Rules 
Any field that is hidden with this setting cannot be used in a conditional rule.
:::