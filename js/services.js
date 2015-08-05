// Services
appBricks.service('shareName', function() {
    var self = this;

    this.name = 'Whats your name?';
    this.nameAttr = function() {
            return self.name.length;
    };
});

appBricks.service('getProp', function() {
    var getProp = this;

    getProp.insideProp = 'deep';
});

appBricks.service('getImages', function() {
    var getImages = this;


});
