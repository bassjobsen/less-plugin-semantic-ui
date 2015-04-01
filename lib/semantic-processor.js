var path = require('path');

module.exports = function() {
    function SemanticUIProcessor(options) {
       
    };

     SemanticUIProcessor.prototype = {
				process : function (src, extra) {
                if(extra.fileInfo.filename === extra.fileInfo.rootFilename)
                {
                extra.context.paths.push(path.resolve(__dirname, '../'));
                extra.context.paths.push(path.resolve(__dirname, '../node_modules/semantic-ui-less/'));
                var injected = '@import "' + path.resolve(__dirname, '../') + '/node_modules/semantic-ui-less/semantic.less";\n';
				var ignored = extra.imports.contentsIgnoredChars;
				var fileInfo = extra.fileInfo;
				ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
				ignored[fileInfo.filename] += injected.length;
                return injected + src;            
                }
                if(extra.fileInfo.filename.match(/semantic-ui-less\/theme\.less$/))
                {
                    return src.replace(/@import "/g,'@import (optional) "');
                }    
                return src;
                }
    };

return SemanticUIProcessor;
};
