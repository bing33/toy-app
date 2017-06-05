import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params, transition) {
        return { username: params.username };
    },
    serialize: function(model) {
        return { username: model.get('username') };
    }
});
