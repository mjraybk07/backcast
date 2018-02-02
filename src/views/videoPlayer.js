var VideoPlayerView = Backbone.View.extend({

  // el: '.player',


  initialize: function() {
    //this.render();
    this.listenTo(this.collection, 'select', this.handleSelect);
  },
  
  // initialize: function() {
  //   this.render();
  //   this.listenTo('select', this.render, this)
  // },

  handleSelect: function(video) {
    console.log('videoPlayerView handleSelect', video);
    this.model = video;
    this.render();
  },
  
  render: function(selectedVideo) {
    // // debugger;
    selectedVideo = selectedVideo || this.collection.models[0];
    // console.log('selected video: ', selectedVideo);
    this.$el.html(this.template(selectedVideo.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
