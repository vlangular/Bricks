// Controllers
appBricks.controller('mainController',['$scope','$filter','$log','shareName','getProp','Data',function($scope,$filter,$log,shareName,getProp,Data) {
    var main = this;

    main.title = 'Bricks!';
    main.desc = 'lorem ipsum'

    main.handle = '';

    main.toLower = function(str) {
            return $filter('lowercase')(str);
    };

    main.name = shareName.name;

    $scope.$watch(
        function() {
            return main.name;
        },
        function() {
            shareName.name = main.name;
        }
    );

    main.message = getProp.insideProp;

    main.data = Data;

}]);

appBricks.controller('guessController', function() {
    var guess = this;

    guess.trueNumber = 333;
    guess.yourNumber = '';
    guess.tries = 1;

    guess.checkNumber = function() {
        guess.yourNumber = '';
        guess.tries += 1;
    };

    guess. preventBackspace = function(e) {
        var evt = e || window.event;
        if (evt) {
            var keyCode = evt.charCode || evt.keyCode;
            if (keyCode === 8) {
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            }
        }
    };
});

appBricks.controller('galleryController', function($scope) {
    var gallery = this;

    gallery.images = [];

    var dir = "getImagesDir/";
    var fileextension = ".jpg";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location, "").replace("http://", "");
                // $("body").append($("<img src=" + dir + filename + "></img>"));
                console.log(filename);
                gallery.images.push(filename);
            });
        }
    });
});

appBricks.controller('aboutController', ['shareName','getProp', function(shareName,getProp) {
    var about = this;

    about.personYou = shareName.name;
    about.personYouAttr = shareName.nameAttr();

    about.message = getProp.insideProp;

}]);

appBricks.controller('headerController',function() {
    var head = this;

    head.title = 'Bricks!';
    head.navigation = [
        {name: 'Home', link:'index'},
        {name: 'Guess', link:'guess'},
        {name: 'Gallery', link:'gallery'},
        {name: 'Bars', link:'bars'},
        {name: 'About', link:'about'},
        {name: 'Contact', link:'contact'},
        {name: 'Contact2', link:'contact2'}
    ];
});

appBricks.controller('barsController',['$scope', function($scope) {
    var bars = this;

    bars.title = 'Barstars';

    bars.people = [
        {
            name: 'Vlad',
            city: 'Bucharest',
            value: '100'
        },
        {
            name: 'John',
            city: 'New York',
            value: '50'
        },
        {
            name: 'Jane',
            city: 'San Francisco',
            value: '75'
        },
        {
            name: 'Tim',
            city: 'Canada',
            value: '25'
        }
    ];

    bars.checkValue = function(person) {
            if(person.value < 50) {
                return 'Mission failed';
            } else if(person.value > 50) {
                return 'Congratulations';
            } else {
                return 'Please try again';
            }
    };

}]);

appBricks.controller('contactController',['$scope',function($scope) {
    $scope.contactDesc = [
        { title: 'Lorem1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut quaerat soluta incidunt quas, iure quia voluptates'
        },
        { title: 'Lorem2',
          desc: 'Lorem ipsum dolor sit amet'
        },
        { title: 'Lorem3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut quaerat soluta incidunt quas, iure quia voluptates. Itaque ut quaerat soluta incidunt quas, iure quia voluptates'
        },
        { title: 'Lorem4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ];
    $scope.contactList = [
        ['Cras justo odio1', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio2', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio3', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio4', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros']
    ];

      $scope.$watch('contactDesc', function(contactDesc) {
        $scope.groupedContacts = [];
        var i=0;
        angular.forEach($scope.contactDesc, function(contactDesc) {
            $scope.groupedContacts.push([contactDesc, $scope.contactList[i]]);
            i=i+1;
        });
      },true);

}]);

appBricks.controller('contactController2',['$scope',function($scope) {

    $scope.contactDesc = [
        { title: 'Lorem1',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut quaerat soluta incidunt quas, iure quia voluptates'
        },
        { title: 'Lorem2',
          desc: 'Lorem ipsum dolor sit amet'
        },
        { title: 'Lorem3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut quaerat soluta incidunt quas, iure quia voluptates. Itaque ut quaerat soluta incidunt quas, iure quia voluptates'
        },
        { title: 'Lorem4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ];
    $scope.contactList = [
        ['Cras justo odio1', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio2', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio3', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros'],
        ['Cras justo odio4', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros']
    ];


}]);
