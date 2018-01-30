var VideoListView = Backbone.View.extend({

  el:'.list',

  initialize: function() {
    // Render the VideoListView
    this.render();

    console.log('inside VideoListView.initialize....collection:', this.collection);

    var context = this;
    // Render each VideoListEntry
    console.log(context);

    this.collection.forEach(function(element) {
      var videoListEntry = new VideoListEntryView({model: element});

      console.log('videoListEntry: ', videoListEntry);

    });

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
