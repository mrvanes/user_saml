OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Sparad",
    "X.509 certificate of the Service Provider" : "X.509-certifikat av leverantören",
    "Private key of the Service Provider" : "Privat nyckel från leverantören",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indikerar att nameID av <samlp:logoutRequest> som skickats av SP kommer att krypteras.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indikerar om <samlp:AuthnRequest> meddelanden från denna SP kommer att undertecknas. [Metadata av SP kommer att erbjuda denna information]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indikerar om <samlp:logoutRequest> meddelanden från denna SP kommer att undertecknas.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indikerar om <samlp:logoutResponse> meddelanden från denna SP kommer att undertecknas.",
    "Whether the metadata should be signed." : "Huruvida metadata bör undertecknas.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indikerar ett krav för <samlp:Response>, <samlp:LogoutRequest> och <samlp:LogoutResponse> delar mottaget av denna SP signeras.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indikerar ett krav för de mottagna <saml:Assertion>-objekten av denna SP att signeras. [Metadata av SP'n erbjuder denna information]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indikerar ett krav för de mottagna <saml:Assertion>-objekten från denna SP att krypteras.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indikerar ett krav för objektet NameID på SAMLResponse mottaget av denna SP ska finnas.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indikerar ett krav för NameID mottagen av denna SP att vara krypterad.",
    "Indicates if the SP will validate all received XML." : "Indikerar om SP'n kommer validera alla mottagna XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Avkodar SAML-data som små bokstäver och verktyget använder stora bokstäver som standard. Aktivera för ADFS-kompatibilitet för signaturverifiering.",
    "Attribute to map the UID to." : "Attribut för att mappa UID till.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Tillåt bara tillgång om ett konto finns på någon annan backend. (t.ex. LDAP)",
    "Attribute to map the displayname to." : "Attribut att mappa visningsnamnet till",
    "Attribute to map the email address to." : "Attribut att mappa epost-adress till.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Använd SAML-autentisering för de %s skrivbordsklienterna (kräver att användarna loggar in på nytt)",
    "SSO & SAML authentication" : "SSO & SAML-autentisering",
    "Open documentation" : "Öppna dokumentation",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Vänligen välj om du vill autentisera med SAML-leverantören inbyggd i Nextcloud eller om du vill autentisera mot en miljövariabel.",
    "Use built-in SAML authentication" : "Använd den inbyggda SAML-autentiseringen",
    "Use environment variable" : "Använd miljövariabel",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Försäkra dig om att konfigurera en administrativ användare som kan komma åt instansen via SSO. Att logga in med ditt vanliga %s konto kommer inte längre vara möjligt.",
    "General" : "Allmänt",
    "Service Provider Data" : "Leverantörsdata",
    "If your Service Provider should use certificates you can optionally specify them here." : "Om din tjänstleverantör använder certifikat kan du välja att ange dom här.",
    "Show Service Provider settings…" : "Visa leverantörsinställningar",
    "Identity Provider Data" : "Identity Provider Data",
    "Configure your IdP settings here." : "Konfigurera dina IdP-inställningar här.",
    "Identifier of the IdP entity (must be a URI)" : "Identifierare av IdP'n (måste vara en URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL-mål av IdP'n där SP'n kommer skicka meddelande om åtkomstbegäran.",
    "Show optional Identity Provider settings…" : "Visa valbara Identity Provider inställningar...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL plats för IdP'n där SP'n kommer skicka en SLO-begäran",
    "Public X.509 certificate of the IdP" : "Publikt X.509-certifikat av IdP'n",
    "Attribute mapping" : "Attributmappning",
    "Show attribute mapping settings…" : "Visa inställningar för attributmappning",
    "Security settings" : "Säkerhetsinställningar",
    "For increased security we recommend enabling the following settings if supported by your environment." : "För ökad säkerhet rekommenderar vi att följande inställningar aktiveras om de stöds av din miljö.",
    "Show security settings…" : "Visa säkerhetsinställningar...",
    "Signatures and encryption offered" : "Signatur och kryptering erbjuden",
    "Signatures and encryption required" : "Signaturer och kryptering krävs",
    "Download metadata XML" : "Ladda ned metadata XML-fil",
    "Metadata invalid" : "Metadata ogiltig",
    "Metadata valid" : "Metadata giltig",
    "Account not provisioned." : "Konto inte förberett",
    "Your account is not provisioned, access to this service is thus not possible." : "Ditt konto är inte förberett, tillgång till tjänsten är därför inte möjligt.",
    "Indicates if the SP will validate all received XMLs." : "Indikerar om SP'n kommer validera alla mottagna XMLs.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Tillåt bara autentisering om kontot finns på någon annan backend. (t.ex. LDAP)",
    "Show Service Provider settings ..." : "Visa leverantörsinställningar",
    "Show optional Identity Provider settings ..." : "Visa valbara Identity Provider inställningar ...",
    "Show security settings ..." : "Visa säkerhetsinställningar ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Om du frivilligt vill mappa SAML-attribut till användaren kan du konfigurera dessa här.",
    "Show attribute mapping settings ..." : "Visa inställningar för attributmappning ..."
},
"nplurals=2; plural=(n != 1);");
