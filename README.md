
    npm install hrequire

    var hrequire = require('hrequire')

    // just hrequire with true to force re require a module
    var someModule = hrequire('someModule', true)

    // its probably better to just do this in dev mode
    var someModule = hrequire('someModule', process.env.NODE_ENV == "development")

