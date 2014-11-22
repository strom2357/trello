TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function($main) {
    this.$main = $main;
  },
  
  routes: {
    "": "boards",
    "boards/:id": "boardShow"
  },
  
  boards: function() {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.boards
    });
    this.$main.html(view.render().$el);
  },
  
  boardShow: function(id) {
    // var b = TrelloClone.Models.Board({id: id});
    // b.fetch();
    var fetchedBoard = TrelloClone.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({
      model: fetchedBoard
    });
    this.$main.html(view.$el);
    view.render();
  }
});
