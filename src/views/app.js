var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos( exampleVideoData);
    //this.videos = new Videos(window.fakeVideoData);
    this.render();

    // this.videoPlayerView = new VideoPlayerView({collection: this.videos});

    // this.videoListView = new VideoListView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    
    // Render Video List
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    
    // Render Video Player
    new VideoPlayerView({el: this.$('.player'), collection: this.videos}).render();
    
    // Render Search
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    
    
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});



