import Ember from 'ember';
export default function(){
    var Car = Ember.Object.extend({
        carName: null,
        carModel: null,
        carDetails: Ember.computed('carName', 'carModel', function(){
            return ' Car Name: ' + this.get('carName') + '<br>' + ' Car Model: ' + this.get('carModel');
        })
    });

    var myCar = Car.create({
        carName: "Alto",
        carModel: "800"
    })

    document.write("<h2>Details of the car: <br></h2>");
    document.write(myCar.get('carDetails'));
}
