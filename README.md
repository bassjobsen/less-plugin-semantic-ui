less-plugin-lesshat
========================

Imports [Semantic UI](http://www.semantic-ui.com) Less code before your custom Less code.

## lessc usage

Install..

requires Less v2.4.0

```
npm install -g less-plugin-semantic-ui
```

and then on the command line,

```
lessc file.less --semantic-ui
```


## Programmatic usage

```
var LessPluginSemanticUI = require('less-plugin-semantic-ui'),
    SemanticUIPlugin = new LessPluginSemanticUI();
less.render(lessString, { plugins: [SemanticUIPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
