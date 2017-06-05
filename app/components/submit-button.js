import Ember from 'ember';

export default Ember.Component.extend( {
    tagName: 'button',
    attributeBindings: [ 'type' ],
    type: 'submit',
    loadingIcon: '<i class="fa fa-cog fa-spin"></i>',
    locked: false,
    click: function( e ){
        var _this = this;
        e.preventDefault();

        if( !this.get( 'locked' ) ){
            _this.set( 'locked', true );
            _this.sendAction();
        }
    }
} );
