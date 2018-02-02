var VideoListEntryView = Backbone.View.extend({

  //el:'.video-list-entry',
  //el:'.video-list',

  events: {'click': 'handleClick'},

  handleClick: function () {
    this.model.select();
  },

  render: function() {
    //this.$el.append(this.template(this.model.attributes));
    this.$el.html(this.template(this.model.attributes));
    //$('.video-list').append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

//You don't need to understand how the templateURL function itself works. All you need to know is that it returns a function that's the result of invoking underscore's _.template() function, on the contents of the HTML file named by the argument to the templateURL function. This process results a template function that you can invoke within your Backbone View, passing in a context object with the appropriate values to substitue into the template HTML.