# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDatetimepicker <- function(id=NULL, dateFormat=NULL, endDate=NULL, locale=NULL, maxDays=NULL, startDate=NULL, timeFormat=NULL, utc=NULL) {
    
    props <- list(id=id, dateFormat=dateFormat, endDate=endDate, locale=locale, maxDays=maxDays, startDate=startDate, timeFormat=timeFormat, utc=utc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepicker',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'dateFormat', 'endDate', 'locale', 'maxDays', 'startDate', 'timeFormat', 'utc'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
