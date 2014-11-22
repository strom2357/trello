Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
  },
  
  attachSubviews: function() {
    var view = this;
    _(this.subviews()).forEach(function (subviews, selector) {
      var $el = view.$(selector);
      $el.empty();
      
      subviews.forEach(function (subview) {
        $el.append(subview.$el);
        subview.delegateEvents();
      });
    });
  },
  
  subviews: function(selector) {
    this._subviews = this._subviews || {};
    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    }
  }
});