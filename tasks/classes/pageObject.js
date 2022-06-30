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
		open() {  
		  return super.open('login');
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
			return (`${this.type}`);
		}
	}

	module.exports = {
		BasePage,
		LoginPage
	};