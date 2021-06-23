const { I } = inject();

module.exports = {

pageTitle: ('head > title'),
systemMenu: ('#menu-system'),
localMenu: ("#collapse42 > li:nth-child(2) > a"),
languageMenu: ('#collapse43 > li:nth-child(2)'),
catalogMenu: ('#menu-catalog'),
categoryMenu: ('#collapse1 > li:nth-child(1) > a'),
exitButton: ('[class="nav navbar-nav navbar-right"] > li:nth-child(2) > a'),
}
