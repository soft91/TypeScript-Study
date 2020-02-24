var Animal;
(function (Animal) {
    function run() {
        console.log('동물이 달립니다.');
    }
    Animal.run = run;
})(Animal || (Animal = {}));
(function (Animal) {
    var Land;
    (function (Land) {
        Animal.run();
        function run() {
            console.log('육상 동물이 달립니다.');
        }
        Land.run = run;
    })(Land = Animal.Land || (Animal.Land = {}));
})(Animal || (Animal = {}));
(function (Animal) {
    var Land;
    (function (Land) {
        var Pet;
        (function (Pet) {
            Animal.Land.run();
            function run() {
                console.log('애완 동물이 달립니다.');
            }
            Pet.run = run;
            var Cat = /** @class */ (function () {
                function Cat() {
                }
                Cat.prototype.run = function () {
                    Animal.Land.Pet.run();
                };
                return Cat;
            }());
            Pet.Cat = Cat;
        })(Pet = Land.Pet || (Land.Pet = {}));
    })(Land = Animal.Land || (Animal.Land = {}));
})(Animal || (Animal = {}));
var cat = new (Animal.Land.Pet).Cat();
cat.run();
