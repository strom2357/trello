TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({  
  template: JST['boards/show'],
  // this will get a collection of lists  that we'll listen to but I 
  // don't want to think about it yet
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function() {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    alert('rendering!')
    return this;
  }
});
