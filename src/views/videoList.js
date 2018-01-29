var VideoListView = Backbone.View.extend({

  initialize: function() {
    // Render the VideoListView
    this.render();

    console.log('inside VideoListView.initialize....collection:', this.collection);


    // Render each VideoListEntry
    this.collection.forEach(function(element) {
      var video = new VideoListEntryView({model: element});
      video.render();
    });

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
