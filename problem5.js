// Create a simple polyfill for the Array.includes method by the name of customIncludes.

if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(searchElement, fromIndex) {
        if (this == null) {
            throw new TypeError('Array.prototype.customIncludes called on null or undefined');
        }

        var O = Object(this);
        var len = O.length >>> 0;

        if (len === 0) {
            return false;
        }

        var n = fromIndex | 0;
        var k;

        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }

        while (k < len) {
            if (O[k] === searchElement) {
                return true;
            }
            k++;
        }

        return false;
    };
}


var arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3)); 
console.log(arr.customIncludes(6)); 
