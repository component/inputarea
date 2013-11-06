
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var classes = require('classes');
var events = require('events');

/**
 * Expose `Input`.
 */

module.exports = Input;

/**
 * Initialize input with the given textarea `el`.
 *
 * @param {Element} el
 * @api public
 */

function Input(el) {
  if (!(this instanceof Input)) return new Input(el);
  this.classes = classes(el);
  this.events = events(el, this);
  this.events.bind('keypress');
  this.el = el;
}

/**
 * Mixin Emitter.
 */

Emitter(Input.prototype);

/**
 * Handle keypress.
 */

Input.prototype.onkeypress = function(e){
  // return
  if (13 != e.keyCode) return;

  // textarea mode
  if (e.shiftKey) {
    this.classes.add('multiline');
    return;
  }

  // input mode
  var val = this.el.value;
  this.emit('input', val);
  this.clear();
  e.preventDefault();
  this.classes.remove('multiline');
};

/**
 * Clear input.
 */

Input.prototype.clear = function(){
  this.el.value = '';
};