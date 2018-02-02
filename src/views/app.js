var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    //this.videos = new Videos(window.fakeVideoData);
    this.render();

    this.videoPlayerView = new VideoPlayerView({collection: this.videos});

    this.videoListView = new VideoListView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});



