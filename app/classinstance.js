import Ember from 'ember';
export default function(){
    const Demo = Ember.Object.extend({
        init(){
            alert('The default property of stateOn is : ' + this.get('stateOn'));
        },
        stateOn: false
    });

    const state = Demo.create();
    state.set('stateOn', true);
    console.log(state.get('stateOn'));
}
