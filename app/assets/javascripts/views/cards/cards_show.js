TrelloClone.Views.CardsShow = Backbone.CompositeView.extend({  
  template: JST['cards/show'],
  // this will get a collection of lists  that we'll listen to but I 
  // don't want to think about it yet
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },
  
  // // this might be unnecessary:
  // addCard: function (card) {
  //   var cardsShow = 
  //     new TrelloClone.Views.CardsShow({ model: card });
  //   this.addSubview(".cards", cardsShow);
  // },

  render: function() {
    console.log("card show render gets called")
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    //actually call addCard:
    // this.model.cards().cards.each(this.addCard.bind(this));
    // this.$(".cards");
    return this;
  },



});