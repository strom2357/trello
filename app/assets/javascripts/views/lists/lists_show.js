TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({  
  template: JST['lists/show'],
  // will this help?  doesn't seem to.
 
  
  // // this might be unnecessary:
  addCard: function (card) {
    var cardsShow = 
      new TrelloClone.Views.CardsShow({ model: card });
    this.addSubview(".cards", cardsShow);
  },

  render: function() {
    console.log("list show render gets called")
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    //actually call addCard:
    
    this.model.cards().each(this.addCard.bind(this));
    // this.$(".cards");
    return this;
  },



});