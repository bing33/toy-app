import Ember from 'ember';

export default Ember.Route.extend({
    templateName: 'home',

    model() {
        //The RSVP.hash methos is built with RSVP.js library that allows to load multiple JavaScript promises
        return Ember.RSVP.hash({
            //Find the records for the given type and returns all the records of this type present in the store
            rentals: this.store.findAll('rental'),
            reviews: this.store.findAll('review')
        });
    },
});
