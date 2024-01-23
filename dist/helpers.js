'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatesParameter = exports.sortDates = exports.filterInvalidDates = exports.relativeDates = undefined;

var _start_of_day = require('date-fns/start_of_day');

var _start_of_day2 = _interopRequireDefault(_start_of_day);

var _sub_days = require('date-fns/sub_days');

var _sub_days2 = _interopRequireDefault(_sub_days);

var _add_days = require('date-fns/add_days');

var _add_days2 = _interopRequireDefault(_add_days);

var _is_valid = require('date-fns/is_valid');

var _is_valid2 = _interopRequireDefault(_is_valid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var relativeDates = exports.relativeDates = function relativeDates() {
  return {
    today: (0, _start_of_day2.default)(new Date()),
    yesterday: (0, _start_of_day2.default)((0, _sub_days2.default)(new Date(), 1)),
    tomorrow: (0, _start_of_day2.default)((0, _add_days2.default)(new Date(), 1))
  };
};

var filterInvalidDates = exports.filterInvalidDates = function filterInvalidDates(dates) {
  return dates.filter(function (date) {
    return !(0, _is_valid2.default)(new Date(date)) ? console.error('The date \'' + date + '\' is not in a valid date format and streak-end-to-end is ignoring it. Browsers do not consistently support this and this package\'s results may fail. Verify the array of dates you\'re passing to streak-end-to-end are all valid date strings. http://momentjs.com/docs/#/parsing/string/') : new Date(date);
  });
};

var sortDates = exports.sortDates = function sortDates(dates) {
  return dates.sort(function (a, b) {
    return (0, _start_of_day2.default)(b) - (0, _start_of_day2.default)(a);
  }).reverse();
};

var getDatesParameter = exports.getDatesParameter = function getDatesParameter() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(param)) {
    return param;
  } else {
    var dates = param.dates;

    return dates || [];
  }
};