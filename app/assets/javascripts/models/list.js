TrelloClone.Models.List = Backbone.Model.extend({
// need to figure out what the api urlroot is and create card Collections	
// will probably mean making a jbuilder and looking at rails routes
	
	//we don't actually have an API for this
	cards: function () {
    if(!this._cards) {
      this._cards = new TrelloClone.Collections.Cards([], { list: this });
    }

    return this._cards;
  }

 	// 	// board collection needed this, see if list does too when we've built it out:
 	// 	parse: function (response) {
  //   if(response.cards) {
  //     this.cards().set(response.cards, { parse: true });
  //     delete response.cards;
  //   }

  //   return response;
  // }

});
