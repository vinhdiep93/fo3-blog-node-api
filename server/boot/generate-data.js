module.exports = function(app) {
    // app.dataSources.postgresDs.automigrate('comment', function(err) {
    //   if (err) throw err;
    // });

    // app.dataSources.postgresDs.automigrate('Menu', function(err) {
    //     if (err) throw err;
    //   });
    var remotes = app.remotes();
    
      // Set X-Total-Count for all search requests
      remotes.after('*.find', function (ctx, next) {
        var filter;
        if (ctx.args && ctx.args.filter) {                                                                                       
          filter = ctx.args.filter.where;
        }
    
        if (!ctx.res._headerSent) {
          this.count(filter, function (err, count) {
            ctx.res.set('Access-Control-Expose-Headers', 'x-total-count');
            ctx.res.set('X-Total-Count', count);
            next();
          });
        } else {
          next();
        }
      });
  };