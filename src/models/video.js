var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    //console.log('Model selected: ', this);
    this.trigger('select', this);
  }

});



