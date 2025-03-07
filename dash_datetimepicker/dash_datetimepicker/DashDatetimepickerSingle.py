# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDatetimepickerSingle(Component):
    """A DashDatetimepickerSingle component.
Dash Datetime Single Picker is a component for selecting a single date + time.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- date (string; default new Date()):
    The date of the range picker. It will fire a dash callback if it
    is updated.

- dateFormat (boolean | string; optional):
    Defines the format for the date. It accepts any Moment date format
    (not in localized format). If True the date will be displayed
    using the defaults for the current locale. If False the datepicker
    is disabled and the component can be used as timepicker.

- locale (string; optional):
    Manually set the locale for the react-datetime instance. Moment.js
    locale needs to be loaded to be used, see i18n docs.

- timeFormat (boolean | string; optional):
    Defines the format for the time. It accepts any Moment time format
    (not in localized format). If True the time will be displayed
    using the defaults for the current locale. If False the timepicker
    is disabled and the component can be used as datepicker.

- utc (boolean; default False):
    When True, input time values will be interpreted as UTC (Zulu
    time) by Moment.js. Otherwise they will default to the user's
    local timezone."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_datetimepicker'
    _type = 'DashDatetimepickerSingle'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, date=Component.UNDEFINED, utc=Component.UNDEFINED, locale=Component.UNDEFINED, dateFormat=Component.UNDEFINED, timeFormat=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'date', 'dateFormat', 'locale', 'timeFormat', 'utc']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'date', 'dateFormat', 'locale', 'timeFormat', 'utc']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashDatetimepickerSingle, self).__init__(**args)
