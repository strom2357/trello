TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({  
  template: JST['boards/index'],
  
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    console.log("render gets called in the view...")
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    return this;
  }
});
