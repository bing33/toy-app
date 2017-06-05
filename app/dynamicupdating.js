import Ember from 'ember';
export default function(){
    var Person = Ember.Object.extend({
        firstName: null,
        lastName: null,
        age: null,
        mobno: null,
        Details1: Ember.computed('firstName', 'lastName', function(){
            return this.get('firstName') + ' ' + this.get('lastName');
        }),
        Details2: Ember.computed('age', 'mobno', function(){
            return this.get('Details1') + '<br>' + ' Age: ' + this.get('age') + '<br>' + ' Mob No: ' + this.get('mobno');
        })
    });

    var person_details = Person.create({
        firstName: 'John',
        lastName: 'Smith',
        age: 26,
        mobno: '1234567890'
    });

    person_details.set('firstName', 'Steve');
    document.write("<h2>Details of the Person: <br></h2>");
    document.write(person_details.get('Details2'));
}