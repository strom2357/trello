TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function($main) {
    this.$main = $main;
    this.collection = new TrelloClone.Collections.Boards();
    this.collection.fetch();
  },
  
  routes: {
    "": "boards",
    "boards/:id": "boardShow"
  },
  
  boards: function() {
    console.log("boards gets called in router..")
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });
    this.$main.html(view.render().$el);
  },
  
  boardShow: function(id) {
    // var b = TrelloClone.Models.Board({id: id});
    // b.fetch();
    
  }
  
});
