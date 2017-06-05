import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'blog-post',

    model(params) {
        return Ember.RSVP.hash({
            blog: this.store.findRecord('blogs', params.id)
        });
    }
});
