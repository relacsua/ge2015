var AppDispatcher = require('../AppDispatcher.js');
var ConstituencyConstants = require('../constants/ConstituencyConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ConstituencyConstants.ActionTypes;
var CHANGE_EVENT = 'change';

// var _constituent = [];
var _currentData = null;

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

  getCurrentDivisionData: function () {
    return _currentData;
  },

  // containsDivisionData: function (divisionName) {
  //   var data = null;

  //   for(var i=0; i<_constituent.length;i++) {
  //     if(_constituent[i].divisionName === divisionName) {
  //       _currentData = data = _constituent[i];
  //       break;
  //     }
  //   }
  //   return data;
  // }

});

ConstituencyStore.dispatchToken = AppDispatcher.register(function(action) {

  switch(action.type) {
    case ActionTypes.GET_CONSTITUENCY:
    	_currentData = null;
      ConstituencyStore.emitChange();
      break;
    case ActionTypes.GET_CONSTITUENCY_SUCCESS:
      _currentData = action.data;
      ConstituencyStore.emitChange();
      break;
    case ActionTypes.GET_CONSTITUENCY_FAILURE:
      ConstituencyStore.emitChange();
      break;
    default:
      // do nothing
  }

});

module.exports = ConstituencyStore;