const { I, authPage } = inject();

module.exports = {
  preset() {
    I.clearCookie();
    I.amOnPage('/login');
},
presetLogin() {
  I.clearCookie();
  I.amOnPage('/login');
  authPage.login();
}
}
