/**
 * Created by Eugene on 21.12.13.
 */
Function.prototype.myBind= function (context){
    this.apply(context,arguments);
};
var App = function(){
    return {
        init: function() {
            this.nodes = document.querySelectorAll('.node');
            this.setListeners();
        },

        setListeners: function() {
            [].slice.call(this.nodes).forEach(function(n){
                n.onclick = this.onClick.myBind(this);
            }, this);
        },

        onClick: function(e) {
            e = e || window.event;
            var node = e.target || e.srcElement;
            // this - should be the main context - instance of App
            // node - should be the node, that fires event
        }
    };
};
(new App()).init();