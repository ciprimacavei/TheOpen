const cookiesPage = {
    cookieWindow: () => '.cookie-warning__content',
    acceptCookies: () => '.cookie-warning__agree-button',
    cookieSettings: () => '.cookie-warning__agree-link',
    cookiePolicy: () => 'cookie-warning__details-link',
    noCookieWindow: () => 'cookie-warning is-closed',
    closeCookieWindow: () => '#ccc-close svg path',
    acceptAllCookies: () => '#ccc-button-holder #ccc-recommended-settings',
    cookiePolicyLink: () => 'span.ccc-statement-name',
    cookieExternalLink: () => 'span.ccc-svg-element svg',
    categorizedCookiesOn: typeIndexOn => {
        if(typeIndexOn == 1)
            return 'div:nth-child(1)  div  label span.checkbox-toggle-on'
        else 
            return 'div:nth-child(2)  div  label span.checkbox-toggle-on'
    },
    categorizedCookiesOff: typeIndexOff => {
        if(typeIndexOff == 1)
            return 'div:nth-child(1)  div  label span.checkbox-toggle-off'
        else 
            return 'div:nth-child(2)  div  label span.checkbox-toggle-off'
    }
};
module.exports = cookiesPage;