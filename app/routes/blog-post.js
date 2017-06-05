import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'blog-post',

    model: function(params, transition) {
        return { username: params.username };
    },
    serialize: function(model) {
        return { username: model.get('username') };
    }
});
