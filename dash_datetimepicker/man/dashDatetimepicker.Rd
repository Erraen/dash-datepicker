% Auto-generated: do not edit by hand
\name{dashDatetimepicker}

\alias{dashDatetimepicker}

\title{DashDatetimepicker component}

\description{
Dash Datetime Range Picker is a component for selecting two dates (including times). It takes `startDate` and `endDate` as main properties and renders two inputs which open datepickers when they are clicked.
}

\usage{
dashDatetimepicker(id=NULL, dateFormat=NULL, endDate=NULL, locale=NULL,
maxDays=NULL, startDate=NULL, timeFormat=NULL, utc=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{dateFormat}{Logical | character. Defines the format for the date.
It accepts any Moment date format (not in localized format).
If true the date will be displayed using the defaults for the current locale.
If false the datepicker is disabled and the component can be used as timepicker.}

\item{endDate}{Character. The endDate of the range picker. It will fire a dash callback if it is updated.}

\item{locale}{Character. Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.}

\item{maxDays}{Numeric. Set max difference between startDate and endDate}

\item{startDate}{Character. The startDate of the range picker. It will fire a dash callback if it is updated.}

\item{timeFormat}{Logical | character. Defines the format for the time.
It accepts any Moment time format (not in localized format).
If true the time will be displayed using the defaults for the current locale.
If false the timepicker is disabled and the component can be used as datepicker.}

\item{utc}{Logical. When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

