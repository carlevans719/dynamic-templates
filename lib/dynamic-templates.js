DynamicTemplate = function(content, name) {
	var self = this;
	self.name = name || Meteor.uuid();
	self._spacebarsString = content;

	eval(
		TemplatingTools.compileTagsWithSpacebars(
			TemplatingTools.scanHtmlForTags({
				sourceName: null,
				contents: '<template name="' + self.name + '">' + content + '</template>',
				tagNames: ['template']
			})
		).js
	);

	self.template = Template[self.name];
};
