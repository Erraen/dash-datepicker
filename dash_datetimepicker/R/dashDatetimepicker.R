# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDatetimepicker <- function(id=NULL, endDate=NULL, locale=NULL, maxDays=NULL, startDate=NULL, utc=NULL) {
    
    props <- list(id=id, endDate=endDate, locale=locale, maxDays=maxDays, startDate=startDate, utc=utc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepicker',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'endDate', 'locale', 'maxDays', 'startDate', 'utc'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
