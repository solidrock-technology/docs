# Fields

Event organisers can manage the custom fields used across their events from the [Form Builder Fields](https://events.solidrock.io/admin/form-builder/fields) page. From here you will be able to see all the existing fields setup including the field labels, instructions and field type (e.g. Checkbox, Text, Select etc) as well as create new fields.

Each field must have a label which succinctly describes what information the field is asking for.

You may also provide further information about the field and what you are expecting to be provided by setting the field instructions.

Each field can be one of the following types:

- Checkbox
- Date
- Email
- Group Select
- Instructions
- Lightswitch
- Number
- Password
- Radio
- Select
- Telephone (Tel)
- Terms & Conditions
- Text

## Field Types

### Checkbox

You can provide one or more options for checkbox fields. Where multiple options are provided the user will be able to optionally select one or more of the options.

### Date

Date field types will automatically validate the entered value to ensure it is indeed a valid date.

### Email

Email fields will automatically validate the entered value to ensure it is a date. In addition you can further specify if there is a minimum or maximum length of the entered value as well as if there is any specific validation you want to run on the entered value to ensure it only uses certain characters (e.g. the alphabet only, alphanumeric etc)

### Group Select

If you have a Group Set created for your organisation you will be able to specify this within the Group Select field type to allow people to assign a group to their ticket.

By default Solidrock configures groups to only be registered by organisation admins within the admin backend to provide the greatest control and ability to verify and moderate the groups associated with their events. If however you want to allow members of the public to register their own groups you have the option to enable 'Public Group Registration'.

::: warning Change in field behaviour
When the setting is enabled globally for a Group Set, or individually for a Group Select field the behaviour of assigning tickets to groups changes for Lead Bookers. Instead of the default behaviour of having the option to search by name or view within a dropdown, they must now use the unique group code when filling out delegate details.
:::

### Instructions

Instruction 'fields' allow you to present longer format instructions that are emphasised within the flow of a custom form. Helpful in cases where you want to break up the fields into defined sections.

### Lightswitch

Similar to having a checkbox field with only 1 option, the Lightswitch field is a more visual mechanism for gathering Yes/No or True/False style information.

### Number

Number fields validate to only allow numbers. In addition you can specify a minimum and maximum length of the entered value. For example the number must be between 1 and 100.

### Password

Password fields are similar to text input fields except that the entered value is obscured within the field.

### Radio

You can provide one or more options for radio fields. Where multiple options are provided the user will be able to select only 1 option from the list.

### Select

You can provide one or more options for select/dropdown fields. Where multiple options are provided the user will be able to select only 1 option from the list.

### Telephone (Tel)

Telephone fields can be configured to:

- Restrict the length of text being entered (e.g. between 1 and 14 characters)
- Restrict the characters allowed to be entered (e.g. the alphabet only, alphanumeric etc)

### Terms & Conditions

Terms & Condition fields allow you to select from one of your created Terms & Condition records within the 'Admin Console' > 'Terms & Conditions' area of the admin backend. The text content, or downloadable file (if available) will be made presented to the user to read and/or download and must be agreed to before they can complete the details on their ticket. This could be useful if you need certain tickets to agree to a specifc set of terms, for example Team Members or Volunteers.

### Text

Text fields can be configured to:

- Restrict the length of text being entered (e.g. between 1 and 50 characters)
- Restrict the characters allowed to be entered (e.g. the alphabet only, alphanumeric etc)
- Allow for multiple lines of text to be entered - effectively converting the field from a simple text input field to a multi-line textarea field for longer format information gathering.

## Globally available default fields

In addition to being able to create custom fields as needed, Solidrock also provides some common default fields ready-made for you to use. These include:

- Address Line 1 (Text field)
- Address Line 2 (Text field)
- Address Line 3 (Text field)
- Town/City (Text field)
- County (Text field)
- Country (Pre-populated select dropdown field)
- Post/Zip Code (Text field)
- Title (Pre-populated select dropdown field)
- First Name (Text field)
- Last Name (Text field)
- Date of Birth (special Date field)
- Gender (Pre-populated radio field options)
- Email Address (Email field)
- Dietary Requirements (Pre-populated select dropdown field)
- Mobile Number (Telephone field)
- Phone Number (Telephone field)
- Marital Status (Pre-populated select dropdown field)
- Accessibility (Yes/No Lightswitch field)
- DBS Certificate Number (Text field)
- DBS Issued Date (Date field)