/**
 * Organize a Page Object-like structure.
 * Page object definition: 
 * - https://martinfowler.com/bliki/PageObject.html
 * - https://webdriver.io/docs/pageobjects/
 * - https://javascript.info/class-inheritance
 * Inctruction:
 * + 1. LoginPage should be inherited from the BasePage
 * + 2. BasePage should accept one argument 'url'
 * + 3. LoginPage should use the parent constructor and extend it with one argument 'name'
 * + 4. BasePage should have open() method that will get 'pageName' as a parameter
 * and return the string: "Open this ${this.url}/${pageName}"
 * + 5. Login page should have open() method that will call the parent's open() method passing
 * 'this.name' as a parameter
 * + 6. Component class should accept one argument 'type' 
 * (will recieve values such as 'footer' and 'header')
 * + 7. BasePage should have getters footer() and header() that will return new Component's
 * passing 'footer' and 'header' appropriately
 * 8. Component should have review() method that will return the string "I can review ${this.type}"
 */

class BasePage {
	constructor(url) {
		this.url = url;
		this.footer = new Component('footer');
		this.header = new Component('header');
	}

	getFooter(){
		return new Component('footer');
	}

	getHeader(){
		return new Component('header');
	}

	open(pageName) {
		return (`Open this ${this.url}/${pageName}`);
		}
	}


	class LoginPage extends BasePage {
		constructor(baseUrl, name) {
			super(baseUrl);
			this.name = name;
		}
		open() {  
			return super.open(this.name);
		}
		typeEmail(text) {  
			this.email = text; 
			return ('type email');
		}
		typePassword(text) {  
			this.password = text;
			return ('type password');

		}
		clickSubmit() {  
			return 'click';
		}
	}

	class Component {
		constructor(type) {
			this.type = type;
		}
		review() {
			return (`I can review ${this.type}}`);
		}
	}

module.exports = {
	BasePage,
	LoginPage,
	Component
};







// /**
//  * Organize a page object structure https://drive.google.com/file/d/1w3B4Z2ABy2AkacJFRlQosrYXwwv3jw_V/view
//  */

//  class BasePage {
// 	constructor(baseUrl) {
// 		this.baseUrl = baseUrl;
// 		this.footer = new Component('footer');
// 		this.header = new Component('header');
// 	}
// 	open(url) {
// 		return (`${this.baseUrl}/${url}`);
// 		}
// 	}

// 	class LoginPage extends BasePage {
// 		constructor(baseUrl) {
// 			super(baseUrl);

// 			this.password = 'password';
// 			this.submitButton = 'submitButton';
// 		}
// 		open() {  
// 			return super.open('login');
// 		}
// 		typeEmail(text) {  
// 			this.email = text; 
// 			return ('type email');
// 		}
// 		typePassword(text) {  
// 			this.password = text;
// 			return ('type password');

// 		}
// 		clickSubmit() {  
// 			return 'click';
// 		}


// 	}

// 	class Component {
// 		constructor(type) {
// 			this.type = type;
// 		}
// 		review() {
// 			return (`${this.type}`);
// 		}
// 	}


// 	module.exports = {
// 		BasePage,
// 		LoginPage
// 	};