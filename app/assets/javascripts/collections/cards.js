TrelloClone.Collections.Cards = Backbone.Collection.extend({

  model: TrelloClone.Models.Card,

  // probably need URL which means probably need a jbuilder which means look at rails routes
	// ?? is this right?
  // url: 'api/cards',
	
  // we'll pass in a list?
	initialize: function( list ) {
		this.list = list;
	}


});


