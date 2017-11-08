module.exports = function(app) {
    app.dataSources.postgresDs.automigrate('Post', function(err) {
      if (err) throw err;
    });

    app.dataSources.postgresDs.automigrate('Category', function(err) {
        if (err) throw err;
      });
  };