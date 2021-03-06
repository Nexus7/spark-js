Package.describe({
    name: 'rickbehl:spark-js',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Provide a wrapper around the Particle (previously Spark) library to interact with hardware devices.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/Nexus7/spark-js.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    'spark': '1.0.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.addFiles(['spark-js.js'], 'server');
    api.export('Spark', 'server');
});
