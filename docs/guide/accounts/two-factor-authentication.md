# Two-Factor Authentication

## Requirements
In order to use Two-Factor Authentication (2FA) on your account, you need to have a compatible app installed on a second device, such as your mobile phone or tablet.
We recommend using Google Authenticator, available for [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_GB&gl=US) and [iOS](https://apps.apple.com/us/app/google-authenticator/id388497605). 
Other apps maybe be compatible, but Google Authenticator is the one we recommend.

## Setup
To set up 2FA on your account, please visit the [Security page](https://events.solidrock.io/admin/profile/security) in your profile area. 

:::tip NOTE
If you have an admin-level account, the 2FA form will immediately appear on your next login after being made an administrator. 
Administrator accounts **must** have 2FA enabled. Other account types, such as Lead Bookers, can optionally enable/disable 2FA from the Security page.
:::

Once you have clicked "Enable Two-Factor Authentication" and confirmed your account password, you'll see the 2FA setup form.
Using the authentication app you have downloaded to your device, scan the presented QR code. 
This will lead to a 6-digit code being shown on your device and this is the code you will use when logging into the system in the future.

### Recovery Codes
Continuing through the form, you'll see a list of recovery codes. Please make sure to copy these and store them securely somewhere else.
These codes can be used to access your account in the event you've lost access to your 2FA device. Recovery codes are one-time use only.

:::tip NOTE
If you need to use a recovery code, after entering your username and password when logging in, please select ["Use Recovery Code"](https://events.solidrock.io/use-recovery-code) when asked for your 6-digit code.
:::

### Confirming 2FA
After you have stored your recovery codes, please use your device and find the 6-digit code for Solidrock. Enter this in the final field of the form. 
Now select "Validate 2FA Setup" and we'll check the code is valid and if so, 2FA will be enabled on your account.
Every time you log into Solidrock, we'll ask for a 6-digit code from the authentication app.

## Resetting Two-Factor Authentication
If for any reason you need to reset your 2FA, for example you have lost your device, please use a recovery code to access your account then go to the [Security page](https://events.solidrock.io/admin/profile/security) in your profile area.
You will see the option to disable your 2FA. You will need to confirm your password to do this, and then you will be able to enable 2FA again.

:::warning NOTE
If you are an admin-level account, you will not see the option to disable the 2FA for your account. 
If you need to have your 2FA reset and cannot do so in your profile area, please contact Solidrock support using the live chat feature.
:::
