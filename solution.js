/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/
var getSwallowVelocity = function (type) {
    if (type === 'african') {
        return 'Roughly 11 meters per second.';
    }
    return "I... I don't know that!";
};
var isCatLiquid = function (isAsleep, containerShape) {
    return isAsleep && containerShape !== 'none';
};
var Wizard = /** @class */ (function () {
    function Wizard(name, favoriteSpell) {
        this.name = name;
        this.favoriteSpell = favoriteSpell;
    }
    Wizard.prototype.castSpell = function () {
        return "".concat(this.name, " casts ").concat(this.favoriteSpell, "!");
    };
    return Wizard;
}());
