import Ember from 'ember';
export default function(){
    var Person = Ember.Object.extend({
        firstName: null,
        lastName: null
    });

    Person.reopen({
        middleName: 'Smith'
    });

    document.write('Middle Name: ' + Person.create().get('middleName'));
    document.write("<br>");

    Person.reopenClass({
        openClass: function(){
            return Person.create({isMan: true});
        }
    });

    document.write('isMan: ' + Person.openClass().get('isMan'));
}
