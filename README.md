# Dynamic Templates

Enables the creation of Spacebars templates on the fly.

This package aims to solve the issue of accessing global helpers from within
static HTML strings. Currently, the triple-brace `{{{ }}}` doesn't parse
Spacebars template tags. This package will allow you to create a new template
from the string, which you can then pass to a `Template.dynamic` instead.

## Installation

Add the package:
```
meteor add carlevans719:dynamic-templates
```

## Usage

This package adds `DynamicTemplate` to the client. It takes a Spacebars string
as the first argument (e.g. `<p>{{someHelper}}</p>`) and an optional template
name as the second.
```
var content = '<p>{{someHelper}}</p>';
var name = 'myNewTemplate';
var template = new DynamicTemplate(content, name);
```


## Example

index.html:
```
<head>
  <title>Dynamic Templates</title>
</head>

<body>
  <h1>Dynamic template:</h1>
  {{> Template.dynamic template=myDynamicTemplate}}
</body>
```

index.js:
```
// Define global helpers for bgColor and color
Template.registerHelper('bgColor', function () {
	return 'orange';
});
Template.registerHelper('color', function () {
	return 'purple';
});

Template.body.helpers({
	myDynamicTemplate: function () {
		// content could come from a "CMS" collection...
		var content = '<div style="background-color: {{bgColor}}; color: {{color}};">Wow, this content is dynamic! <ul><li>The background color is: {{bgColor}}</li><li>The font color is: {{color}}</li></ul></div>';

		// Create a new template
		var template = new DynamicTemplate(content);

		return template.name;
	}
});

```

## Limitations

These will be addressed as soon as possible, however for now:

 - Templates persist until a refresh, potentially consuming a lot of memory
 - You cannot update existing templates, you will need to create a new one for
 each update
 - There is no abstraction for adding helpers / events to the dynamic templates


## License

MIT
