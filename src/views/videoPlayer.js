var VideoPlayerView = Backbone.View.extend({

  // el: '.player',

  handleSelect: function(video) {
    console.log('videoPlayerView handleSelect', video);
    this.render(video);
  },

  initialize: function() {
    this.render();
    this.collection.on('select', function(e) {
      this.handleSelect(e);
    }, this);

  },

  render: function(selectedVideo) {
    // debugger;
    selectedVideo = selectedVideo || this.collection.models[0];
    console.log('selected video: ', selectedVideo);
    this.$el.html(this.template(selectedVideo.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
