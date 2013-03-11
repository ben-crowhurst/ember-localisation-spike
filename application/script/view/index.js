Application.IndexView = Ember.View.extend({
	layout: Ember.Handlebars.compile('{{yield}} {{#linkTo "login"}}Login{{/linkTo}}'),
	defaultTemplate: Ember.Handlebars.compile("splash page".loc())
});