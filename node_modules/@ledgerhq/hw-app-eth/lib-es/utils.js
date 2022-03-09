export function defer() {
    var resolve, reject;
    var promise = new Promise(function (success, failure) {
        resolve = success;
        reject = failure;
    });
    if (!resolve || !reject)
        throw "defer() error"; // this never happens and is just to make flow happy
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
}
// TODO use bip32-path library
export function splitPath(path) {
    var result = [];
    var components = path.split("/");
    components.forEach(function (element) {
        var number = parseInt(element, 10);
        if (isNaN(number)) {
            return; // FIXME shouldn't it throws instead?
        }
        if (element.length > 1 && element[element.length - 1] === "'") {
            number += 0x80000000;
        }
        result.push(number);
    });
    return result;
}
// TODO use async await
export function eachSeries(arr, fun) {
    return arr.reduce(function (p, e) { return p.then(function () { return fun(e); }); }, Promise.resolve());
}
export function foreach(arr, callback) {
    function iterate(index, array, result) {
        if (index >= array.length) {
            return result;
        }
        else
            return callback(array[index], index).then(function (res) {
                result.push(res);
                return iterate(index + 1, array, result);
            });
    }
    return Promise.resolve().then(function () { return iterate(0, arr, []); });
}
export function doIf(condition, callback) {
    return Promise.resolve().then(function () {
        if (condition) {
            return callback();
        }
    });
}
export function asyncWhile(predicate, callback) {
    function iterate(result) {
        if (!predicate()) {
            return result;
        }
        else {
            return callback().then(function (res) {
                result.push(res);
                return iterate(result);
            });
        }
    }
    return Promise.resolve([]).then(iterate);
}
//# sourceMappingURL=utils.js.map