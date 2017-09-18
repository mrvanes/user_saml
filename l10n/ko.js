OC.L10N.register(
    "user_saml",
    {
    "Saved" : "저장됨",
    "X.509 certificate of the Service Provider" : "서비스 제공자의 X.509 인증서",
    "Private key of the Service Provider" : "서비스 제공자의 개인 키",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "이 서비스 제공자가 보낸 <samlp:logoutRequest>의 nameID를 암호화할 지 여부입니다.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "이 서비스 제공자가 보낸 <samlp:AuthnRequest> 메시지를 서명할 지 여부입니다. [서비스 제공자 메타데이터가 정보를 제공함]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "이 서비스 제공자가 보낸 <samlp:logoutRequest> 메시지를 서명할 지 여부입니다.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "이 서비스 제공자가 보낸 <samlp:logoutResponse> 메시지를 서명할 지 여부입니다.",
    "Whether the metadata should be signed." : "메타데이터를 서명할 지 여부입니다.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "이 서비스 제공자가 받는 <samlp:Response>, <samlp:LogoutRequest> 및 <samlp:LogoutResponse> 원소를 서명해야 할 지 여부입니다.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "이 서비스 제공자가 받는 <saml:Assertion> 메시지를 서명해야 할 지 여부입니다. [서비스 제공자 메타데이터가 정보를 제공함]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "이 서비스 제공자가 받는 <saml:Assertion> 원소를 암호화해야 할 지 여부입니다.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "이 서비스 제공자가 받는 SAMLResponse의 NameID 원소가 존재해야 할 지 여부입니다.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "이 서비스 제공자가 받는 NameID를 암호화해야 할 지 여부입니다.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS는 SAML 데이터를 소문자로 URL에 인코딩하며, 툴킷은 기본적으로 대문자를 사용합니다. 서명 검증 시 ADFS 호환성이 필요할 때 사용하십시오.",
    "Attribute to map the UID to." : "UID를 매핑할 속성입니다.",
    "Attribute to map the displayname to." : "표시 이름을 매핑할 속성입니다.",
    "Attribute to map the email address to." : "이메일 주소를 매핑할 속성입니다.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "%s 데스크톱 클라이언트에 SAML 인증을 사용합니다(사용자 재인증이 필요함)",
    "SSO & SAML authentication" : "SSO 및 SAML 인증",
    "Open documentation" : "문서 열기",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Nextcloud에 내장된 SAML 공급자로 인증할지, 환경 변수를 사용하여 인증할지를 선택하십시오.",
    "Use built-in SAML authentication" : "내장 SAML 인증 사용",
    "Use environment variable" : "환경 변수 사용",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "관리 사용자가 인스턴스에 SSO로 로그인할 수 있는지 확인하십시오. 일반 %s 계정으로 더 이상 로그인할 수 없습니다.",
    "General" : "일반",
    "Service Provider Data" : "서비스 공급자 데이터",
    "If your Service Provider should use certificates you can optionally specify them here." : "서비스 공급자가 인증서를 사용한다면 여기에 추가적으로 지정할 수 있습니다.",
    "Identity Provider Data" : "인증 공급자 데이터",
    "Configure your IdP settings here." : "IdP를 여기에서 설정할 수 있습니다.",
    "Identifier of the IdP entity (must be a URI)" : "IdP 엔티티 식별자(URI여야 함)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "SP에서 인증 요청 메시지를 보낼 IdP 대상 URL",
    "URL Location of the IdP where the SP will send the SLO Request" : "SP에서 SLO 요청 메시지를 보낼 IdP 대상 URL",
    "Public X.509 certificate of the IdP" : "IdP의 공개 X.509 인증서",
    "Attribute mapping" : "속성 매핑",
    "Security settings" : "보안 설정",
    "For increased security we recommend enabling the following settings if supported by your environment." : "보안을 강화하기 위해서 환경에서 지원하는 경우 다음 설정을 사용할 것을 추천합니다.",
    "Signatures and encryption offered" : "서명과 암호화 제공됨",
    "Signatures and encryption required" : "서명과 암호화 필요함",
    "Download metadata XML" : "메타데이터 XML 다운로드",
    "Metadata invalid" : "메타데이터 잘못됨",
    "Metadata valid" : "메타데이터 올바름",
    "Account not provisioned." : "계정이 프로비전되지 않았습니다.",
    "Your account is not provisioned, access to this service is thus not possible." : "계정이 프로비전되지 않아서 이 서비스에 접근할 수 없습니다.",
    "Indicates if the SP will validate all received XMLs." : "이 서비스 제공자가 모든 받는 XML의 유효성을 검증하는 지 여부입니다.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "다른 백엔드(예: LDAP)에 계정이 있을 때에만 인증을 허용합니다.",
    "Show Service Provider settings ..." : "서비스 공급자 설정 보이기 ...",
    "Show optional Identity Provider settings ..." : "추가 인증 공급자 설정 보이기 ...",
    "Show security settings ..." : "보안 설정 보이기 ...",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "SAML 속성을 추가로 매핑하려면 여기에서 설정하십시오.",
    "Show attribute mapping settings ..." : "속성 매핑 설정 보이기 ..."
},
"nplurals=1; plural=0;");
