(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@widgets-project/my-utils', ['exports'], factory) :
    (factory((global['widgets-project'] = global['widgets-project'] || {}, global['widgets-project']['my-utils'] = {})));
}(this, (function (exports) { 'use strict';

    function extendedFunc(firstNumber, secondNumber) {
        return !isNaN(firstNumber) || isNaN(secondNumber);
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.extendedFunc = extendedFunc;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=widgets-project-my-utils.umd.js.map