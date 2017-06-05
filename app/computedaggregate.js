import Ember from 'ember';
export default function(){
    var Person = Ember.Object.extend({
        todos: [
            Ember.Object.create({
                isDone: true
            }),
            Ember.Object.create({
                isDone: false
            }),
            Ember.Object.create({
                isDone: true
            })
        ],
        remaining: Ember.computed('todos.@each.isDone', function(){
            var todos = this.get('todos');
            return todos.filterBy('isDone', false).get('length');
        })
    });

    var car_obj = Person.create();
    document.write("The remaining number of cars in todo list: " + car_obj.get('remaining'));
}
