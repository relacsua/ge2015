var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ConstituencyConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _error = null;

var ConstituencyStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getErrorMessage() {
    return _error;
  }

});

ConstituencyStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {
    case ActionTypes.GET_CONSTITUENCY_FAILURE:
    case ActionTypes.SHOW_ERROR_MESSAGE:
    case ActionTypes.GET_CONSTITUENCY_NAME_FAILURE:
      _error = action.errorMessage;
      ConstituencyStore.emitChange();
      break
    case ActionTypes.DELETE_ERROR_MESSAGE:
      _error = null;
      ConstituencyStore.emitChange();
    default:
      // do nothing
  }

});

module.exports = ConstituencyStore;