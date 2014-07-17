grunt-connect-mockserver
========================

Simple middleware module to handle POST, PUT and DELETE requests in grunt-connect

This simple file is designed to work with the angular-apimock library by handling all requests types except GET requests and tries to read a file from disk and return it to the requesting browser.

To configure the middleware to be used by grunt-contrib-connect use the following:

    connect: {
      main: {
        options: {
          port: 9000,
          middleware: function (connect, options) {
            // Same as in grunt-contrib-connect
            var middlewares = [];
            var directory = options.directory ||
                options.base[options.base.length - 1];
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }

            // Here comes the PHP middleware
            middlewares.push(mockServer);

            // Same as in grunt-contrib-connect
            options.base.forEach(function (base) {
              middlewares.push(connect.static(base));
            });

            middlewares.push(connect.directory(directory));
            return middlewares;
          }
        }
      }
    }
    
Then just make sure you have the response files in the appropriate location based on how you've configured the angular-apimock library.

