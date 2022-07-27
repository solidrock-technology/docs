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

The text in the submit button that a Lead Booker will see when they are filling the form in (e.g. 'Submit', 'Save Information', 'Save' etc).

### Fields

Here you add which of Solidrock's default fields and your own custom fields should be added to the form. 

You can determine the order of the fields by using the drag handle icon, specify if a field is required for the Ticket or Extra to been considered 'complete' and if there are any conditional visbility rules associated.

:::warning Updating fields in an existing form
You can update the fields within a custom form at any time however be aware that if you add/remove fields from a form that has been used for booked tickets that Solidrock is unable to retrospectively request information from a Lead Booker for fields they didn't previously have access to when they placed their booking.
:::

#### Conditional Rules

There may be occassions where a field only makes sense based on the data provided in a previous field.

For example we may have a 'Do you have any dietary requirements?' lightswitch field and a 'Please give more details about your dietary requirements' text field. It makes sense to only show the latter if the first field is toggled on - indicating a 'Yes'.

Conditional rules allow us to achieve this bahaviour.

Using the above example we would set the conditional rule fields on the 'Please give more details about your dietary requirements' field to:

`'Do you have any dietary requirements?'`  |  `'Is equal to'`  |  `Yes`

:::warning Hidden Fields
Fields hidden using the contional rules **must** not be required otherwise you run the risk of Lead Bookers facing validation errors on those invisible fields.
:::
