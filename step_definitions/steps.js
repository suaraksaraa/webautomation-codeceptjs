const { I } = inject();
// Add in your custom step files
const { url, text, element } = require('../utils/constant');



Given('I have access the website demo.automationtesting', () => {
  // From "features/basic.feature" {"line":6,"column":5}
  I.amOnPage(url.demo)
  
});

When('I click skip sign in', () => {
  // From "features/basic.feature" {"line":7,"column":5}
  I.click(text.skip)
});

Then('I will be navigate to Register page', () => {
  // From "features/basic.feature" {"line":8,"column":5}
  I.see(text.register)
});

When('I fill all the fields', () => {
  // From "features/basic.feature" {"line":9,"column":5}
  I.fillField(text.firstname, 'halo')
  I.fillField(text.lastname, 'world')
  I.fillField(element.email, Math.floor(100 + Math.random() * 900)+'@mail.com')
  I.fillField(element.phonenumber, Math.floor(1000000000 + Math.random() * 900000000))
  I.click(element.gender)
  I.fillField(element.countries, 'Indonesia')
  I.selectOption(text.year, '1980')
  I.selectOption(text.month, 'March')
  I.selectOption(text.day, '21')
  I.fillField(element.firstpassword, 'Q1w2e3')
  I.fillField(element.secondpassword, 'Q1w2e3')
});

When('click submit button', () => {
  // From "features/basic.feature" {"line":10,"column":5}
  I.click(text.submit)
  
});

Then('I will be navigate to webtable page', () => {
  // From "features/basic.feature" {"line":11,"column":5}
  I.see(text.edittext)
});

Given('I have access the webtable page', () => {
  // From "features/basic.feature" {"line":13,"column":5}
  I.amOnPage(url.webtable)
});

When('I delete a record from webtable', () => {
  // From "features/basic.feature" {"line":14,"column":5}
  I.rightClick(element.deleteicon)
  I.wait(1)
  I.click(text.delete)
});

Then('I successfully deleted', () => {
  // From "features/basic.feature" {"line":15,"column":5}
  I.acceptPopup()
  
});

Given('I have access the SwitchTo page', () => {
  // From "features/basic.feature" {"line":17,"column":5}
  I.amOnPage(url.switchto)
});

When('I click alert box button', () => {
  // From "features/basic.feature" {"line":18,"column":5}
  I.click(text.alert)
});

Then('I will see the alert box on the screen', () => {
  // From "features/basic.feature" {"line":19,"column":5}
  I.acceptPopup()
});

Given('I have access the Interaction page', () => {
  // From "features/basic.feature" {"line":21,"column":5}
  I.amOnPage(url.interaction)
});

When('Drag & drop the selenium logo', () => {
  // From "features/basic.feature" {"line":23,"column":5}
  I.dragAndDrop('#node', '#droparea')
});

Then('I will see selenium logo on the another screen', () => {
  // From "features/basic.feature" {"line":24,"column":5}
  I.seeElement('#node')
});
