import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DatetimeRangePicker from "../utils/DatePickerRange.jsx";

/**
 * Dash Datetime Range Picker is a component for selecting two dates (including times).
 * It takes `startDate` and `endDate` as main properties and renders two inputs
 * which open datepickers when they are clicked.
 */
export default class DashDatetimepicker extends Component {
  componentDidMount() {
    let startDate = DashDatetimepicker.defaultProps.startDate;
    let endDate = DashDatetimepicker.defaultProps.endDate;
    if (this.props.startDate === startDate) {
      this.props.setProps({ startDate: startDate.toISOString() });
    }
    if (this.props.endDate === endDate) {
      this.props.setProps({ endDate: endDate.toISOString() });
    }
  }

  render() {
    return (
      <DatetimeRangePicker
        {...this.props}
        onEndDateChange={(e) =>
          this.props.setProps({ endDate: e.toISOString() })
        }
        onStartDateChange={(e) =>
          this.props.setProps({ startDate: e.toISOString() })
        }
      />
    );
  }
}

DashDatetimepicker.defaultProps = {
  startDate: new Date(new Date() - 1000 * 60 * 60 * 24),
  endDate: new Date(),
  utc: false,
  locale: null,
  maxDays: null,
};

DashDatetimepicker.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,
  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,
  /**
   * The endDate of the range picker. It will fire a dash callback if it is updated.
   */
  endDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  /**
   * The startDate of the range picker. It will fire a dash callback if it is updated.
   */
  startDate: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  /**
   * When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.
   */
  utc: PropTypes.bool,
  /**
   * Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.
   */
  locale: PropTypes.string,
  /**
   * Set max difference between startDate and endDate
   */
  maxDays: PropTypes.number,
  /**
   * Defines the format for the date.
   * It accepts any Moment date format (not in localized format).
   * If true the date will be displayed using the defaults for the current locale.
   * If false the datepicker is disabled and the component can be used as timepicker.
   */
  dateFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Defines the format for the time.
   * It accepts any Moment time format (not in localized format).
   * If true the time will be displayed using the defaults for the current locale.
   * If false the timepicker is disabled and the component can be used as datepicker.
   */
  timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export const propTypes = DashDatetimepicker.propTypes;
export const defaultProps = DashDatetimepicker.defaultProps;
