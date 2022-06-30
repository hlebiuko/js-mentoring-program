/**
 * Organize a page object structure https://drive.google.com/file/d/1w3B4Z2ABy2AkacJFRlQosrYXwwv3jw_V/view
 */

class BasePage {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
		this.footer = new Component('footer');
		this.header = new Component('header');
	}
	open(url) {
		return (`${this.baseUrl}/${url}`);
		}
	}

	class LoginPage extends BasePage {
		constructor(baseUrl) {
			super(baseUrl);

			this.password = 'password';
			this.submitButton = 'submitButton';
		}
		open() {  // IDK what and how should I implement
			super.open(this.baseUrl);
		}
		typeEmail(text) {   // IDK what and how should I implement
			this.email = new Component(text);
			return (`${text}`);
		}
		typePassword(text) {  // IDK what and how should I implement
			this.password = text;
		}
		clickSubmit() {  // IDK what and how should I implement

		}


	}

	class Component {
		constructor(type) {
			this.type = type;
		}
		review() {
			return (`${this.type}`);
		}
	}

	// const login = new LoginPage('www.test.com');
	// login.typeEmail('test@test.com');

	module.exports = {
		BasePage,
		LoginPage
	};