// Filters
appBricks.filter('drouble', function(Data) {
    return function(number) {
        return number*2 + ' is the drouble of ' + Data.number
    }
});
