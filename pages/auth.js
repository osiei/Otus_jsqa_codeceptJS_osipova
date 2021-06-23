const { I } = inject();

module.exports = {

  fields: {
    userLogin: ('#user-profile'),
    usernameField: ('#input-username'),
    passwordField: ('#input-password'),

},
pageTitle: ('head > title'),
authForm: ("[class='panel panel-default']"),
authButton: ('[class="btn btn-primary"]'),

login() {
    I.fillField(this.fields.usernameField, 'demo');
    I.fillField(this.fields.passwordField, 'demo');
    I.click(this.authButton);
},
}
