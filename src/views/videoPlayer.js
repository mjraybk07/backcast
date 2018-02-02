var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.handleSelect);
  },

  handleSelect: function(video) {
    console.log('videoPlayerView handleSelect', video);
    this.model = video;
    this.render();
  },
  
  render: function(selectedVideo) {;
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
