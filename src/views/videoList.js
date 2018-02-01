var VideoListView = Backbone.View.extend({

  el:'.list',

  initialize: function() {
    // Render the VideoListView
    this.render();

    //var context = this;
    // Render each VideoListEntry
    $('.video-list').append(this.collection.map(function(element) {
      var videoListEntry = new VideoListEntryView({model: element});
      return videoListEntry.$el;
    }));
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
