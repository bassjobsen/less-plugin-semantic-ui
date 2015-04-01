var getSemanticUIProcessor = require("./semantic-processor"),
    usage = require("./usage"),
    parseOptions = require("./parse-options");

function LessPluginSemanticUI(options) {
    this.options = options;
};

LessPluginSemanticUI.prototype = {
    install: function(less, pluginManager) {
        var SemanticUIProcessor = getSemanticUIProcessor();
        pluginManager.addPreProcessor(new SemanticUIProcessor(this.options));
    },
    printUsage: function () {
        usage.printUsage();
    },
    setOptions: function(options) {
        this.options = parseOptions(options);
    },
    minVersion: [2, 4, 0]
};

module.exports = LessPluginSemanticUI;

