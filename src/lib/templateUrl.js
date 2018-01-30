
// DO NOT MODIFY THIS CODE -- unless you find a bug.

// Dynamically load HTML template files into the browser.
// This is a very simple loader, in some ways, similar to webpack

(function() {

  var promises = [];

  window.templateURL = function(src) {
    var template;

    // create a promise
    var defer = $.Deferred();
    defer.done(data => {
      template = _.template(data);
    });
    promises.push(defer);

    // create a node and load the src, then
    // resolve promise on successful load
    $('<script>').load(src, (data, status) => {
      defer.resolve(data);
    });

    return function() {
      if (!template) {
        console.error(`Template '${src}' failed to load`);
        return;
      }
      return template.apply(this, arguments);
    };
  };

  window.backboneReady = function(callback) {
    // wait for the dom ready event to fire
    // then wait for all the templates to load
    $(document).ready(() => $.when(...promises).then(callback));
  };

})();


//You don't need to understand how the templateURL function itself works. All you need to know is that it returns a function that's the result of invoking underscore's _.template() function, on the contents of the HTML file named by the argument to the templateURL function. This process results a template function that you can invoke within your Backbone View, passing in a context object with the appropriate values to substitue into the template HTML.
