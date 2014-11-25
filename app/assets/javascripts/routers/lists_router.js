TrelloClone.Routers.Lists = Backbone.Router.extend({
	initialize: function($main) {
    this.$main = $main;
  },

  routes: {
  	"lists/new" : "listNew"
  },

  listNew: function() {
  	var view = new TrelloClone.Views.BoardNew();
    this.$main.html(view.$el);
    view.render();
  }



});
