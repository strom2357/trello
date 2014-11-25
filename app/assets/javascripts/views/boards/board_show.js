TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({  
  template: JST['boards/show'],
  // this will get a collection of lists  that we'll listen to but I 
  // don't want to think about it yet
  initialize: function(){
    this.collection = this.model.lists();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.debug);
  },
  
  //from backbone demo vid diffs:
  addList: function (list) {
    var listsShow = 
      new TrelloClone.Views.ListsShow({ model: list });
    this.addSubview(".lists", listsShow);
  },

  render: function() {
    this.collection = this.model.lists();
    var content = this.template({
      board: this.model
    });
    var that = this
    this.$el.html(content);
    //actually call addList:
    this.collection.each(this.addList.bind(this));
    // // do we need this line?
    // this.$(".lists");
    return this;
  },

  // debug: function(){
  //   debugger
  // },


});
  

  