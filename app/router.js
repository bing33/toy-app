import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend( {
    location: config.locationType,
    rootURL: config.rootURL
} );

Router.map( function(){
  this.route( 'home' );
  this.route( 'about' );
  this.route( 'blogs');
  this.route( 'blog-post', { path: '/blog-post/:id' } );
  this.route('file');
  this.route('footer');
  this.route('header');
} );

export default Router;
