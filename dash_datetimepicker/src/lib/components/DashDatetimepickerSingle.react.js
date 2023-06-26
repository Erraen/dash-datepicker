import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

/**
 * Dash Datetime Single Picker is a component for selecting a single date + time.
 */
export default class DashDatetimepicker extends Component {
    renderDay(props, currentDate) {
        const {className, ...rest} = props;
        let date;
        if (this.props.utc) {
            date = moment.utc(props.key, 'M_D');
        } else {
            date = moment(props.key, 'M_D');
        }
        // Add rdtActive to selected date
        let classes = props.className;
        classes =
            this.state &&
                date.isSame(moment(this.state.date).startOf('day'), 'day')
                ? `${classes} rdtActive`
                : classes;

        return (
            <td {...rest} className={classes}>
                {currentDate.date()}
            </td>
        );
    }

    onChange(date) {
        if (typeof date === 'string') {
            return;
        }
        this.setState({
            date: date,
        });
        this.props.setProps({date: date.toISOString()});
    }

    render() {
        return (
            <div id={this.props.id}>
                <Datetime
                    {...this.props}
                    initialValue={this.props.date}
                    onChange={this.onChange.bind(this)}
                    renderDay={this.renderDay.bind(this)}
                />
            </div>
        );
    }
}

DashDatetimepicker.defaultProps = {
    date: new Date(),
    utc: false,
    locale: null,
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
   * The date of the range picker. It will fire a dash callback if it is updated.
   */
  date: PropTypes.oneOfType([
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
