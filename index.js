
function Rpncc() {

    this.convert = function(expression) {
        var priority;
        var argument;
        var stack = [], result = [];

        return result.concat(stack.reverse());
    };
}
module.exports = Rpncc;