import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'blog-post',

    // model: function(params, transition) {
    //     return { id: params.id };
    // },
    // serialize: function(model) {
    //     return {
    //         id: model.get('id'),
    //         title: model.get('title'),
    //         content: model.get('content')
    //     };
    // }

    model(params) {
        return Ember.RSVP.hash({
            blog: this.store.findRecord('blogs', params.id)
        });
    }
});
