% Auto-generated: do not edit by hand
\name{dashDatetimepickerSingle}

\alias{dashDatetimepickerSingle}

\title{DashDatetimepickerSingle component}

\description{
Dash Datetime Single Picker is a component for selecting a single date + time.
}

\usage{
dashDatetimepickerSingle(id=NULL, date=NULL, dateFormat=NULL, locale=NULL,
timeFormat=NULL, utc=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{date}{Character. The date of the range picker. It will fire a dash callback if it is updated.}

\item{dateFormat}{Logical | character. Defines the format for the date.
It accepts any Moment date format (not in localized format).
If true the date will be displayed using the defaults for the current locale.
If false the datepicker is disabled and the component can be used as timepicker.}

\item{locale}{Character. Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.}

\item{timeFormat}{Logical | character. Defines the format for the time.
It accepts any Moment time format (not in localized format).
If true the time will be displayed using the defaults for the current locale.
If false the timepicker is disabled and the component can be used as datepicker.}

\item{utc}{Logical. When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

