// selectors.ts
export const SELECTORS = {
    //Login
    TITLE_LOGIN: '.aplazo-header__title',
    LOGIN_CUSTOMER: '#loginForm-phone',
    BTN_CONTINUAR_LOGIN: '.aplazo__form > aplazo-button > .aplazo-new-button',

    //OTP
    BTN_OTP_VERIFICATION: '.aplazo__form > aplazo-button.ng-star-inserted > .aplazo-new-button',
    BTN_SEND_OTP_WHATSAPP: ':nth-child(1) > aplazo-button > .aplazo-new-button',
    BTN_SEND_OTP_SMS: 'aplazo-buttons > :nth-child(2) > aplazo-button > .aplazo-new-button',
    BTN_OTP_REGRESAR: '[ng-reflect-variant="link"] > .aplazo-new-button',
    BTN_OTP_01: '#mat-input-1',
    BTN_OTP_02: '#mat-input-2',  
    BTN_OTP_03: '#mat-input-3',
    BTN_OTP_04: '#mat-input-4',
    BTN_OTP_05: '#mat-input-5',
    BTN_OTP_06: '#mat-input-6',
    LBL_FIELD_NECESSARY: '#mat-error-1',

    //Customer dashboard
    PANEL_TITLE: '.mat-tooltip-trigger',
    CREDITO_DISPONIBLE: '[ng-reflect-title="CRÉDITO DISPONIBLE"] > .aplazo-stat-card > .aplazo-stat-card__title > span',
    PANEL: ':nth-child(1) > .mat-list-item > .mat-list-item-content > .aplazo-sidenav-link__label',
    PERFIL: ':nth-child(2) > .mat-list-item > .mat-list-item-content > .aplazo-sidenav-link__label',
    AYUDA: '.aplazo-helper-link > span',
    LIMITE_CREDITO: '[ng-reflect-title="LÍMITE DE CRÉDITO"] > .aplazo-stat-card > .aplazo-stat-card__title > span',
    DESCUBRE_DONDE_COMPRAR: 'h4',
    FILTRO_EN_PROGRESO: '.aplazo-head-paginator__filters > .mat-menu-trigger',

    //Perfil información
    LBL_PERFIL: '.mat-tooltip-trigger',
    LBL_INFORMACION: '#mat-tab-label-0-0 > .mat-tab-label-content',
    LBL_INFORMACION_PERSONAL: '.aplazo-information-template__form > :nth-child(1)', 
    LBL_FECHA_NACIMIENTO: '#mat-input-11',
    LBL_CURP: '#mat-input-13',
    LBL_DIRECCION: '.aplazo-title.ng-star-inserted',

    //Perfil método de pago
    LBL_METODO_PAGO: '#mat-tab-label-0-1 > .mat-tab-label-content',
    LBL_TARJETA_ACTUAL: '.aplazo-customer-card__digits',
    BTN_AGREGAR_METODO_PAGO: '.aplazo-new-button',
    APLAZO_HEADER_LOGO: '.aplazo-header__logo > img',
    LBL_DOMICILIA_TARJETA: '.aplazo-header__title',
    LBL_SUGERENCIA_AGREGAR_TARJETA_01: '.aplazo-add-card-template__info > :nth-child(1) > p',
    LBL_SUGERENCIA_AGREGAR_TARJETA_02: ':nth-child(2) > p',
    LBL_TITULAR_TARJETA: '.aplazo-form-card > :nth-child(1) > label',
    LBL_NUMERO_TARJETA: '.aplazo-form-card > :nth-child(2) > label',
    LBL_VENCIMIENTO: '.aplazo-form-card-group > :nth-child(1) > label',
    LBL_CVV: '.aplazo-form-card-group > :nth-child(2) > label',
    BTN_REEMPLAZAR: '.aplazo-form-card > aplazo-button > .aplazo-new-button',
    LBL_INFORMATIVA:'.aplazo-add-card-template__payment-methods-text',

    TXT_TITULAR: '.aplazo-form-card-input-wrapper-item.ng-untouched.ng-pristine.ng-invalid',
    IFRAME_CARD: 'iframe[title="Secure card number input frame"]',
    TXT_CARD: 'input[type="tel"].card-number-input',
    IFRAME_EXPIRATION: 'iframe[title="Secure card expiration date input frame"]',
    TXT_EXPIRATION: 'input[type="tel"][autocomplete="cc-exp"]:not([arial-hidden="true"])',
    IFRAME_CVV: 'iframe[title="Secure card security code input frame"]',
    TXT_CVV: 'input[type="password"].css-ti0isa',



};