window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    new TrelloClone.Routers.Boards($("#main"))
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
