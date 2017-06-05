import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
//import classinstance from './classinstance';
//import reopenclass from './reopenclass';
//import chainingcomputedproperties from './chainingcomputedproperties';
//import dynamicupdating from './dynamicupdating';
//import settingcomputedproperties from './settingcomputedproperties';
//import computedproperties from './computedproperties';
//import computedaggregate from './computedaggregate';
//import observerasynchrony from './observerasynchrony';
//import objectmodelbindings from './objectmodelbindings';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

//classinstance();
//reopenclass();
//chainingcomputedproperties();
//dynamicupdating();
//settingcomputedproperties();
//computedproperties();
//computedaggregate();
//observerasynchrony();
//objectmodelbindings();

export default App;
