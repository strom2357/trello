window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();
    
    new TrelloClone.Routers.Boards($("#main"))
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
