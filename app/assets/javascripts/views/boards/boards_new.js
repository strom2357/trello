TrelloClone.Views.BoardNew = Backbone.CompositeView.extend({  
  template: JST['boards/new'],
  
  // initialize: function(){
  //   this.listenTo(this.collection, 'sync', this.render);
  // },
  
  render: function() {
    console.log("render gets called in the new view...")
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
