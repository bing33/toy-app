import Ember from 'ember';

const { Controller, inject, computed, observer } = Ember;

export default Controller.extend({
    //specifying the 'query' as one of controller's query parameter
    queryParams: ['comment'],

    //initialize the query value
    query: null,

    //defining a computed property queryParam
    queryParam: computed.oneWay('comment'),
    actions: {
        create: function () {
            //setting up the query parameters and displaying it
            this.set('comment', this.get('queryParam'));
            document.write(this.get('comment'));
        }
    }
} );