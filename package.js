Package.describe({
  name: 'carlevans719:dynamic-templates',
  version: '1.0.0',
  summary: 'Create Spacebars templates on the fly',
  git: 'https://github.com/carlevans719/dynamic-templates',
	issues: 'https://github.com/carlevans719/dynamic-templates/issues',
  documentation: 'README.md'
});

Package.onUse(function(api) {
	api.export('DynamicTemplate', ['client']);
	api.versionsFrom("1.2.1");
  api.use(['ecmascript', 'templating-tools'], {weak: false, unordered: false});
  api.addFiles('lib/dynamic-templates.js', ['client']);
});
