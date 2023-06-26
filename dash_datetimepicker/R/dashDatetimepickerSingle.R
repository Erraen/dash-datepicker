# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDatetimepickerSingle <- function(id=NULL, date=NULL, dateFormat=NULL, locale=NULL, timeFormat=NULL, utc=NULL) {
    
    props <- list(id=id, date=date, dateFormat=dateFormat, locale=locale, timeFormat=timeFormat, utc=utc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepickerSingle',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'date', 'dateFormat', 'locale', 'timeFormat', 'utc'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
