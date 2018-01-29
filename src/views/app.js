var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView;
    this.videoListView = new VideoListView;
    this.videoListView.render()
    this.videoPlayerView.render();

    this.render();

    console.log(this)

  },


  render: function() {
    this.$el.html(this.template());
    console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

