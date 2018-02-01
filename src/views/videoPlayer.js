var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  handleSelect: function(video) {
    //console.log('videoPlayerView handleSelect', e);
    this.render(video);
  },

  initialize: function() {
    this.render();
    this.collection.on('select', function(e) {
      this.handleSelect(e);
    }, this);

  },

  render: function(selectedVideo) {
    selectedVideo = selectedVideo || this.collection.models[0];
    this.$el.html(this.template(selectedVideo));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
