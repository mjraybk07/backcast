var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(collection) {
    this.videos = new Videos( exampleVideoData);
    //this.videos = new Videos(window.fakeVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    // Render Video List
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos
    }).render();
    
    // Render Video Player
    new VideoPlayerView({
      el: this.$('.player'), 
      //model: this.videos.at(0)
      collection: this.videos
    }).render();
    
    // Render Search
    new SearchView({
      el: this.$('.search'), 
      collection: this.videos
    }).render();
    
    
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});



