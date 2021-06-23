Feature('Проверка сценариев на странице авторизации demo-opencart');
Before(({ presetStep }) => {
    presetStep.preset();
});

Scenario('Успешная загрузка формы авторизации', ({ I , authPage}) => {
    I.see('Авторизация', authPage.pageTitle);
    });

Scenario('Успешная авторизация демо-юзером', ({ I , authPage}) => {
    authPage.login();
    I.see('Demo User');
    });

Feature('Проверка сценариев demo-opencart авторизованным пользователем');

Before(({ presetStep }) => {
    presetStep.presetLogin();
});

Scenario('Демо-пользователь может перейти к разделу "настройки" в панели навигации и добавить новый язык системы', ({ I , menuPage, langPage }) => {
    I.click(menuPage.systemMenu);
    I.click(menuPage.localMenu);
    I.click(menuPage.languageMenu);
    I.see('Языки', menuPage.pageTitle);

    //Создаем новый язык(в демо-версии нет возможности сохранить язык, поэтому тут проверить что нельзя сохранить с пустыми полями)
    I.click(langPage.addLanguageButton);
    I.click(langPage.saveLanguageButton);
    I.seeElement(langPage.alertError);
    }); 

Scenario('Демо пользователь может скролиить список категорий и выбрать категорию', ({ I , menuPage, categoryPage}) => {
    I.click(menuPage.catalogMenu);
    I.click(menuPage.categoryMenu);
    I.click(categoryPage.paginationButton); // //Пагинация на странице с категориями

    I.click(categoryPage.checkAllButton);//кликаем чекбокс

    I.seeCheckboxIsChecked(categoryPage.checkBoxElement);//Проверяем что любой чек-бокс на странице выставлен
    });

 Scenario('Пользователь успешно разлогинен, после разлогина попадает на страницу авторизации ', ({ I , menuPage, authPage}) => {
    I.click(menuPage.exitButton);
    I.see('Авторизация', authPage.pageTitle);
    });   
  
    Scenario('Пользователь успешно печатает счет заказа', ({ I , orderPage, authPage}) => {
        I.click(orderPage.orderitem);
        I.click(orderPage.printOrder);
        I.switchToNextTab();
        I.see('Счет', authPage.pageTitle);
        });       