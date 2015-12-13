module myModule {
    
    interface IMyDirectiveController {
        // specify exposed controller methods and properties here
        getUrl(): string;
    }
    
    class MyDirectiveController implements IMyDirectiveController {
    
        static $inject = ["$location", "$timeout"];
        
        private greeting: string;
        
        constructor(private $location: angular.ILocationService, private $timeout: angular.ITimeoutService) {
            // $location and $timeout are now properties of the controller
            this.greeting = "Hello world";
        }
    
        getUrl(): string {
            return this.$location.url(); // utilize $location to retrieve the URL
        }
    }
    
    function myDirective(): angular.IDirective {
        return {
            restrict: "E",
            template: "<div><span data-ng-bind='ctrl.greeting'></span></div>",
            replace: true,
            controller: MyDirectiveController,
            controllerAs: "ctrl"
        };
    }
    
    angular.module("myModule").
        directive("myDirective", myDirective);
}
