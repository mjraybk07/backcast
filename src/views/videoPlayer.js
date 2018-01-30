var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.render();
  },
  render: function() {
    var exampleVideo = this.collection.models[0];
    console.log('example video', exampleVideo);
    this.$el.html(this.template(exampleVideo));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
