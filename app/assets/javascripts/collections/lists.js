TrelloClone.Collections.Lists = Backbone.Collection.extend({

  model: TrelloClone.Models.List,

  // probably need URL which means probably need a jbuilder which means look at rails routes
	// ?? is this right?
  // url: 'api/lists',
	
  // we'll pass in a board?
	initialize: function( board ) {
		this.board = board;
		this.board.fetch;
	}


});



