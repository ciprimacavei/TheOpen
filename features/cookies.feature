Feature: Cookies Window

@AcceptCookies
Scenario: Accept All Cookies
  Given The user opens the website
  When The Accept Cookies button is displayed
  And The user presses the button
  Then Website Logo is accessable

@FunctionalCookiesOFF
Scenario: Turn on functional cookies
  Given The user will access the website
  When The user clicks on cookies settings button
  And Scrolls down the menu
  And Presses the toggle button
  And Accepts all cookies
  Then The new cookies are saved