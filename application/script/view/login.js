Application.LoginView = Ember.View.extend({
	layout: Ember.Handlebars.compile("{{yield}} <a href='#' {{action 'login'}}>sign-in</a>"),
	defaultTemplate: Ember.Handlebars.compile("Login Page")
});