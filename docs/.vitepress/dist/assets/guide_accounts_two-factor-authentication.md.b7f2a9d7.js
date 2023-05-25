import{_ as e,o,c as t,V as a}from"./chunks/framework.98960eec.js";const m=JSON.parse('{"title":"Two Factor Authentication","description":"","frontmatter":{},"headers":[],"relativePath":"guide/accounts/two-factor-authentication.md","filePath":"guide/accounts/two-factor-authentication.md"}'),r={name:"guide/accounts/two-factor-authentication.md"},n=a('<h1 id="two-factor-authentication" tabindex="-1">Two Factor Authentication <a class="header-anchor" href="#two-factor-authentication" aria-label="Permalink to &quot;Two Factor Authentication&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><p>In order to use Two Factor Authentication (2FA) on your account, you need to have a compatible app installed on a second device, such as your mobile phone or tablet. We recommend using Google Authenticator, available for <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&amp;hl=en_GB&amp;gl=US" target="_blank" rel="noreferrer">Android</a> and <a href="https://apps.apple.com/us/app/google-authenticator/id388497605" target="_blank" rel="noreferrer">iOS</a>. Other apps maybe be compatible, but Google Authenticator is the one we recommend.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>To set up 2FA on your account, please visit the <a href="https://events.solidrock.io/admin/profile/security" target="_blank" rel="noreferrer">Security page</a> in your profile area.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you have an admin-level account, the 2FA form will immediately appear on your next login after being made an administrator. Administrator accounts <strong>must</strong> have 2FA enabled. Other account types, such as Lead Bookers, can optionally enable/disable 2FA from the Security page.</p></div><p>Once you have clicked &quot;Enable Two Factor Authentication&quot; and confirmed your account password, you&#39;ll see the 2FA setup form. Using the authentication app you have downloaded to your device, scan the presented QR code. This will lead to a 6-digit code being shown on your device and this is the code you will use when logging into the system in the future.</p><h3 id="recovery-codes" tabindex="-1">Recovery Codes <a class="header-anchor" href="#recovery-codes" aria-label="Permalink to &quot;Recovery Codes&quot;">​</a></h3><p>Continuing through the form, you&#39;ll see a list of recovery codes. Please make sure to copy these and store them securely somewhere else. These codes can be used to access your account in the event you&#39;ve lost access to your 2FA device. Recovery codes are one-time use only.</p><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>If you need to use a recovery code, after entering your username and password when logging in, please select <a href="https://events.solidrock.io/use-recovery-code" target="_blank" rel="noreferrer">&quot;Use Recovery Code&quot;</a> when asked for your 6-digit code.</p></div><h3 id="confirming-2fa" tabindex="-1">Confirming 2FA <a class="header-anchor" href="#confirming-2fa" aria-label="Permalink to &quot;Confirming 2FA&quot;">​</a></h3><p>After you have stored your recovery codes, please use your device and find the 6-digit code for Solidrock. Enter this in the final field of the form. Now select &quot;Validate 2FA Setup&quot; and we&#39;ll check the code is valid and if so, 2FA will be enabled on your account. Every time you log into Solidrock, we&#39;ll ask for a 6-digit code from the authentication app.</p><h2 id="resetting-two-factor-authentication" tabindex="-1">Resetting Two Factor Authentication <a class="header-anchor" href="#resetting-two-factor-authentication" aria-label="Permalink to &quot;Resetting Two Factor Authentication&quot;">​</a></h2><p>If for any reason you need to reset your 2FA, for example you have lost your device, please use a recovery code to access your account then go to the <a href="https://events.solidrock.io/admin/profile/security" target="_blank" rel="noreferrer">Security page</a> in your profile area. You will see the option to disable your 2FA. You will need to confirm your password to do this, and then you will be able to enable 2FA again.</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>If you are an admin-level account, you will not see the option to disable the 2FA for your account. If you need to have your 2FA reset and cannot do so in your profile area, please contact Solidrock support using the live chat feature.</p></div>',15),i=[n];function c(s,l,u,d,h,p){return o(),t("div",null,i)}const y=e(r,[["render",c]]);export{m as __pageData,y as default};
