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
    BTN_OTP_01: '#code-0',
    BTN_OTP_02: '#code-1',  
    BTN_OTP_03: '#code-2',
    BTN_OTP_04: '#code-3',
    BTN_OTP_05: '#code-4',
    BTN_OTP_06: '#code-5',
    LBL_FIELD_NECESSARY: '#mat-error-1',

    //Customer dashboard
    PANEL_TITLE: '.mat-tooltip-trigger',
    CREDITO_DISPONIBLE: '[ng-reflect-title="CRÉDITO DISPONIBLE"] > .aplazo-stat-card > .aplazo-stat-card__title > span',
    PANEL: ':nth-child(1) > .mat-list-item > .mat-list-item-content > .aplazo-sidenav-link__label',
    PERFIL: ':nth-child(2) > .mat-list-item > .mat-list-item-content > .aplazo-sidenav-link__label',
    AYUDA: '.aplazo-helper-link > span',
    
};