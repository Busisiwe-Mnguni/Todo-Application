(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function noop() {}
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 1;
                    payload._result = moduleObject;
                    var _ioInfo = payload._ioInfo;
                    null != _ioInfo && (_ioInfo.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 2;
                    payload._result = error;
                    var _ioInfo2 = payload._ioInfo;
                    null != _ioInfo2 && (_ioInfo2.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
            });
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
                ioInfo.value = thenable;
                var displayName = thenable.displayName;
                "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
    }
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) if (0 !== queue.length) try {
            flushActQueue(queue);
            enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1)
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] && "function" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
            return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = fnName;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.cacheSignal = function() {
        return null;
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key]);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        ctor = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
        }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [
            {
                awaited: ioInfo
            }
        ];
        return lazyType;
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = new Set();
        ReactSharedInternals.T = currentTransition;
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.2.8";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/jsx-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.getBooleanOption = (options, key)=>{
    let value = false;
    if (key in options && typeof (value = options[key]) !== 'boolean') {
        throw new TypeError(`Expected the "${key}" option to be a boolean`);
    }
    return value;
};
exports.cppdb = Symbol();
exports.inspect = Symbol.for('nodejs.util.inspect.custom');
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/wrappers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
exports.prepare = function prepare(sql) {
    return this[cppdb].prepare(sql, this, false);
};
exports.exec = function exec(sql) {
    this[cppdb].exec(sql);
    return this;
};
exports.close = function close() {
    this[cppdb].close();
    return this;
};
exports.loadExtension = function loadExtension(...args) {
    this[cppdb].loadExtension(...args);
    return this;
};
exports.defaultSafeIntegers = function defaultSafeIntegers(...args) {
    this[cppdb].defaultSafeIntegers(...args);
    return this;
};
exports.unsafeMode = function unsafeMode(...args) {
    this[cppdb].unsafeMode(...args);
    return this;
};
exports.getters = {
    name: {
        get: function name() {
            return this[cppdb].name;
        },
        enumerable: true
    },
    open: {
        get: function open() {
            return this[cppdb].open;
        },
        enumerable: true
    },
    inTransaction: {
        get: function inTransaction() {
            return this[cppdb].inTransaction;
        },
        enumerable: true
    },
    readonly: {
        get: function readonly() {
            return this[cppdb].readonly;
        },
        enumerable: true
    },
    memory: {
        get: function memory() {
            return this[cppdb].memory;
        },
        enumerable: true
    }
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/transaction.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
const controllers = new WeakMap();
module.exports = function transaction(fn) {
    if (typeof fn !== 'function') throw new TypeError('Expected first argument to be a function');
    const db = this[cppdb];
    const controller = getController(db, this);
    const { apply } = Function.prototype;
    // Each version of the transaction function has these same properties
    const properties = {
        default: {
            value: wrapTransaction(apply, fn, db, controller.default)
        },
        deferred: {
            value: wrapTransaction(apply, fn, db, controller.deferred)
        },
        immediate: {
            value: wrapTransaction(apply, fn, db, controller.immediate)
        },
        exclusive: {
            value: wrapTransaction(apply, fn, db, controller.exclusive)
        },
        database: {
            value: this,
            enumerable: true
        }
    };
    Object.defineProperties(properties.default.value, properties);
    Object.defineProperties(properties.deferred.value, properties);
    Object.defineProperties(properties.immediate.value, properties);
    Object.defineProperties(properties.exclusive.value, properties);
    // Return the default version of the transaction function
    return properties.default.value;
};
// Return the database's cached transaction controller, or create a new one
const getController = (db, self)=>{
    let controller = controllers.get(db);
    if (!controller) {
        const shared = {
            commit: db.prepare('COMMIT', self, false),
            rollback: db.prepare('ROLLBACK', self, false),
            savepoint: db.prepare('SAVEPOINT `\t_bs3.\t`', self, false),
            release: db.prepare('RELEASE `\t_bs3.\t`', self, false),
            rollbackTo: db.prepare('ROLLBACK TO `\t_bs3.\t`', self, false)
        };
        controllers.set(db, controller = {
            default: Object.assign({
                begin: db.prepare('BEGIN', self, false)
            }, shared),
            deferred: Object.assign({
                begin: db.prepare('BEGIN DEFERRED', self, false)
            }, shared),
            immediate: Object.assign({
                begin: db.prepare('BEGIN IMMEDIATE', self, false)
            }, shared),
            exclusive: Object.assign({
                begin: db.prepare('BEGIN EXCLUSIVE', self, false)
            }, shared)
        });
    }
    return controller;
};
// Return a new transaction function by wrapping the given function
const wrapTransaction = (apply, fn, db, { begin, commit, rollback, savepoint, release, rollbackTo })=>function sqliteTransaction() {
        let before, after, undo;
        if (db.inTransaction) {
            before = savepoint;
            after = release;
            undo = rollbackTo;
        } else {
            before = begin;
            after = commit;
            undo = rollback;
        }
        before.run();
        try {
            const result = apply.call(fn, this, arguments);
            after.run();
            return result;
        } catch (ex) {
            if (db.inTransaction) {
                undo.run();
                if (undo !== rollback) after.run();
            }
            throw ex;
        }
    };
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/pragma.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { getBooleanOption, cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
module.exports = function pragma(source, options) {
    if (options == null) options = {};
    if (typeof source !== 'string') throw new TypeError('Expected first argument to be a string');
    if (typeof options !== 'object') throw new TypeError('Expected second argument to be an options object');
    const simple = getBooleanOption(options, 'simple');
    const stmt = this[cppdb].prepare(`PRAGMA ${source}`, this, true);
    return simple ? stmt.pluck().get() : stmt.all();
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/backup.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/path-browserify/index.js [client] (ecmascript)");
const { promisify } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/util/util.js [client] (ecmascript)");
const { cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
const fsAccess = promisify(fs.access);
module.exports = async function backup(filename, options) {
    if (options == null) options = {};
    // Validate arguments
    if (typeof filename !== 'string') throw new TypeError('Expected first argument to be a string');
    if (typeof options !== 'object') throw new TypeError('Expected second argument to be an options object');
    // Interpret options
    filename = filename.trim();
    const attachedName = 'attached' in options ? options.attached : 'main';
    const handler = 'progress' in options ? options.progress : null;
    // Validate interpreted options
    if (!filename) throw new TypeError('Backup filename cannot be an empty string');
    if (filename === ':memory:') throw new TypeError('Invalid backup filename ":memory:"');
    if (typeof attachedName !== 'string') throw new TypeError('Expected the "attached" option to be a string');
    if (!attachedName) throw new TypeError('The "attached" option cannot be an empty string');
    if (handler != null && typeof handler !== 'function') throw new TypeError('Expected the "progress" option to be a function');
    // Make sure the specified directory exists
    await fsAccess(path.dirname(filename)).catch(()=>{
        throw new TypeError('Cannot save backup because the directory does not exist');
    });
    const isNewFile = await fsAccess(filename).then(()=>false, ()=>true);
    return runBackup(this[cppdb].backup(this, attachedName, filename, isNewFile), handler || null);
};
const runBackup = (backup, handler)=>{
    let rate = 0;
    let useDefault = true;
    return new Promise((resolve, reject)=>{
        setImmediate(function step() {
            try {
                const progress = backup.transfer(rate);
                if (!progress.remainingPages) {
                    backup.close();
                    resolve(progress);
                    return;
                }
                if (useDefault) {
                    useDefault = false;
                    rate = 100;
                }
                if (handler) {
                    const ret = handler(progress);
                    if (ret !== undefined) {
                        if (typeof ret === 'number' && ret === ret) rate = Math.max(0, Math.min(0x7fffffff, Math.round(ret)));
                        else throw new TypeError('Expected progress callback to return a number or undefined');
                    }
                }
                setImmediate(step);
            } catch (err) {
                backup.close();
                reject(err);
            }
        });
    });
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/serialize.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
module.exports = function serialize(options) {
    if (options == null) options = {};
    // Validate arguments
    if (typeof options !== 'object') throw new TypeError('Expected first argument to be an options object');
    // Interpret and validate options
    const attachedName = 'attached' in options ? options.attached : 'main';
    if (typeof attachedName !== 'string') throw new TypeError('Expected the "attached" option to be a string');
    if (!attachedName) throw new TypeError('The "attached" option cannot be an empty string');
    return this[cppdb].serialize(attachedName);
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/function.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { getBooleanOption, cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
module.exports = function defineFunction(name, options, fn) {
    // Apply defaults
    if (options == null) options = {};
    if (typeof options === 'function') {
        fn = options;
        options = {};
    }
    // Validate arguments
    if (typeof name !== 'string') throw new TypeError('Expected first argument to be a string');
    if (typeof fn !== 'function') throw new TypeError('Expected last argument to be a function');
    if (typeof options !== 'object') throw new TypeError('Expected second argument to be an options object');
    if (!name) throw new TypeError('User-defined function name cannot be an empty string');
    // Interpret options
    const safeIntegers = 'safeIntegers' in options ? +getBooleanOption(options, 'safeIntegers') : 2;
    const deterministic = getBooleanOption(options, 'deterministic');
    const directOnly = getBooleanOption(options, 'directOnly');
    const varargs = getBooleanOption(options, 'varargs');
    let argCount = -1;
    // Determine argument count
    if (!varargs) {
        argCount = fn.length;
        if (!Number.isInteger(argCount) || argCount < 0) throw new TypeError('Expected function.length to be a positive integer');
        if (argCount > 100) throw new RangeError('User-defined functions cannot have more than 100 arguments');
    }
    this[cppdb].function(fn, name, argCount, safeIntegers, deterministic, directOnly);
    return this;
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/aggregate.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { getBooleanOption, cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
module.exports = function defineAggregate(name, options) {
    // Validate arguments
    if (typeof name !== 'string') throw new TypeError('Expected first argument to be a string');
    if (typeof options !== 'object' || options === null) throw new TypeError('Expected second argument to be an options object');
    if (!name) throw new TypeError('User-defined function name cannot be an empty string');
    // Interpret options
    const start = 'start' in options ? options.start : null;
    const step = getFunctionOption(options, 'step', true);
    const inverse = getFunctionOption(options, 'inverse', false);
    const result = getFunctionOption(options, 'result', false);
    const safeIntegers = 'safeIntegers' in options ? +getBooleanOption(options, 'safeIntegers') : 2;
    const deterministic = getBooleanOption(options, 'deterministic');
    const directOnly = getBooleanOption(options, 'directOnly');
    const varargs = getBooleanOption(options, 'varargs');
    let argCount = -1;
    // Determine argument count
    if (!varargs) {
        argCount = Math.max(getLength(step), inverse ? getLength(inverse) : 0);
        if (argCount > 0) argCount -= 1;
        if (argCount > 100) throw new RangeError('User-defined functions cannot have more than 100 arguments');
    }
    this[cppdb].aggregate(start, step, inverse, result, name, argCount, safeIntegers, deterministic, directOnly);
    return this;
};
const getFunctionOption = (options, key, required)=>{
    const value = key in options ? options[key] : null;
    if (typeof value === 'function') return value;
    if (value != null) throw new TypeError(`Expected the "${key}" option to be a function`);
    if (required) throw new TypeError(`Missing required option "${key}"`);
    return null;
};
const getLength = ({ length })=>{
    if (Number.isInteger(length) && length >= 0) return length;
    throw new TypeError('Expected function.length to be a positive integer');
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/table.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/buffer/index.js [client] (ecmascript)");
'use strict';
const { cppdb } = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
module.exports = function defineTable(name, factory) {
    // Validate arguments
    if (typeof name !== 'string') throw new TypeError('Expected first argument to be a string');
    if (!name) throw new TypeError('Virtual table module name cannot be an empty string');
    // Determine whether the module is eponymous-only or not
    let eponymous = false;
    if (typeof factory === 'object' && factory !== null) {
        eponymous = true;
        factory = defer(parseTableDefinition(factory, 'used', name));
    } else {
        if (typeof factory !== 'function') throw new TypeError('Expected second argument to be a function or a table definition object');
        factory = wrapFactory(factory);
    }
    this[cppdb].table(factory, name, eponymous);
    return this;
};
function wrapFactory(factory) {
    return function virtualTableFactory(moduleName, databaseName, tableName, ...args) {
        const thisObject = {
            module: moduleName,
            database: databaseName,
            table: tableName
        };
        // Generate a new table definition by invoking the factory
        const def = apply.call(factory, thisObject, args);
        if (typeof def !== 'object' || def === null) {
            throw new TypeError(`Virtual table module "${moduleName}" did not return a table definition object`);
        }
        return parseTableDefinition(def, 'returned', moduleName);
    };
}
function parseTableDefinition(def, verb, moduleName) {
    // Validate required properties
    if (!hasOwnProperty.call(def, 'rows')) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition without a "rows" property`);
    }
    if (!hasOwnProperty.call(def, 'columns')) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition without a "columns" property`);
    }
    // Validate "rows" property
    const rows = def.rows;
    if (typeof rows !== 'function' || Object.getPrototypeOf(rows) !== GeneratorFunctionPrototype) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with an invalid "rows" property (should be a generator function)`);
    }
    // Validate "columns" property
    let columns = def.columns;
    if (!Array.isArray(columns) || !(columns = [
        ...columns
    ]).every((x)=>typeof x === 'string')) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with an invalid "columns" property (should be an array of strings)`);
    }
    if (columns.length !== new Set(columns).size) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with duplicate column names`);
    }
    if (!columns.length) {
        throw new RangeError(`Virtual table module "${moduleName}" ${verb} a table definition with zero columns`);
    }
    // Validate "parameters" property
    let parameters;
    if (hasOwnProperty.call(def, 'parameters')) {
        parameters = def.parameters;
        if (!Array.isArray(parameters) || !(parameters = [
            ...parameters
        ]).every((x)=>typeof x === 'string')) {
            throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with an invalid "parameters" property (should be an array of strings)`);
        }
    } else {
        parameters = inferParameters(rows);
    }
    if (parameters.length !== new Set(parameters).size) {
        throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with duplicate parameter names`);
    }
    if (parameters.length > 32) {
        throw new RangeError(`Virtual table module "${moduleName}" ${verb} a table definition with more than the maximum number of 32 parameters`);
    }
    for (const parameter of parameters){
        if (columns.includes(parameter)) {
            throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with column "${parameter}" which was ambiguously defined as both a column and parameter`);
        }
    }
    // Validate "safeIntegers" option
    let safeIntegers = 2;
    if (hasOwnProperty.call(def, 'safeIntegers')) {
        const bool = def.safeIntegers;
        if (typeof bool !== 'boolean') {
            throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with an invalid "safeIntegers" property (should be a boolean)`);
        }
        safeIntegers = +bool;
    }
    // Validate "directOnly" option
    let directOnly = false;
    if (hasOwnProperty.call(def, 'directOnly')) {
        directOnly = def.directOnly;
        if (typeof directOnly !== 'boolean') {
            throw new TypeError(`Virtual table module "${moduleName}" ${verb} a table definition with an invalid "directOnly" property (should be a boolean)`);
        }
    }
    // Generate SQL for the virtual table definition
    const columnDefinitions = [
        ...parameters.map(identifier).map((str)=>`${str} HIDDEN`),
        ...columns.map(identifier)
    ];
    return [
        `CREATE TABLE x(${columnDefinitions.join(', ')});`,
        wrapGenerator(rows, new Map(columns.map((x, i)=>[
                x,
                parameters.length + i
            ])), moduleName),
        parameters,
        safeIntegers,
        directOnly
    ];
}
function wrapGenerator(generator, columnMap, moduleName) {
    return function* virtualTable(...args) {
        /*
			We must defensively clone any buffers in the arguments, because
			otherwise the generator could mutate one of them, which would cause
			us to return incorrect values for hidden columns, potentially
			corrupting the database.
		 */ const output = args.map((x)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(x) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Buffer"].from(x) : x);
        for(let i = 0; i < columnMap.size; ++i){
            output.push(null); // Fill with nulls to prevent gaps in array (v8 optimization)
        }
        for (const row of generator(...args)){
            if (Array.isArray(row)) {
                extractRowArray(row, output, columnMap.size, moduleName);
                yield output;
            } else if (typeof row === 'object' && row !== null) {
                extractRowObject(row, output, columnMap, moduleName);
                yield output;
            } else {
                throw new TypeError(`Virtual table module "${moduleName}" yielded something that isn't a valid row object`);
            }
        }
    };
}
function extractRowArray(row, output, columnCount, moduleName) {
    if (row.length !== columnCount) {
        throw new TypeError(`Virtual table module "${moduleName}" yielded a row with an incorrect number of columns`);
    }
    const offset = output.length - columnCount;
    for(let i = 0; i < columnCount; ++i){
        output[i + offset] = row[i];
    }
}
function extractRowObject(row, output, columnMap, moduleName) {
    let count = 0;
    for (const key of Object.keys(row)){
        const index = columnMap.get(key);
        if (index === undefined) {
            throw new TypeError(`Virtual table module "${moduleName}" yielded a row with an undeclared column "${key}"`);
        }
        output[index] = row[key];
        count += 1;
    }
    if (count !== columnMap.size) {
        throw new TypeError(`Virtual table module "${moduleName}" yielded a row with missing columns`);
    }
}
function inferParameters({ length }) {
    if (!Number.isInteger(length) || length < 0) {
        throw new TypeError('Expected function.length to be a positive integer');
    }
    const params = [];
    for(let i = 0; i < length; ++i){
        params.push(`$${i + 1}`);
    }
    return params;
}
const { hasOwnProperty } = Object.prototype;
const { apply } = Function.prototype;
const GeneratorFunctionPrototype = Object.getPrototypeOf(function*() {});
const identifier = (str)=>`"${str.replace(/"/g, '""')}"`;
const defer = (x)=>()=>x;
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/inspect.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const DatabaseInspection = function Database() {};
module.exports = function inspect(depth, opts) {
    return Object.assign(new DatabaseInspection(), this);
};
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/sqlite-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const descriptor = {
    value: 'SqliteError',
    writable: true,
    enumerable: false,
    configurable: true
};
function SqliteError(message, code) {
    if (new.target !== SqliteError) {
        return new SqliteError(message, code);
    }
    if (typeof code !== 'string') {
        throw new TypeError('Expected second argument to be a string');
    }
    Error.call(this, message);
    descriptor.value = '' + message;
    Object.defineProperty(this, 'message', descriptor);
    Error.captureStackTrace(this, SqliteError);
    this.code = code;
}
Object.setPrototypeOf(SqliteError, Error);
Object.setPrototypeOf(SqliteError.prototype, Error.prototype);
Object.defineProperty(SqliteError.prototype, 'name', descriptor);
module.exports = SqliteError;
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/database.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/buffer/index.js [client] (ecmascript)");
'use strict';
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/path-browserify/index.js [client] (ecmascript)");
const util = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/util.js [client] (ecmascript)");
const SqliteError = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/sqlite-error.js [client] (ecmascript)");
let DEFAULT_ADDON;
function Database(filenameGiven, options) {
    if (new.target == null) {
        return new Database(filenameGiven, options);
    }
    // Apply defaults
    let buffer;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(filenameGiven)) {
        buffer = filenameGiven;
        filenameGiven = ':memory:';
    }
    if (filenameGiven == null) filenameGiven = '';
    if (options == null) options = {};
    // Validate arguments
    if (typeof filenameGiven !== 'string') throw new TypeError('Expected first argument to be a string');
    if (typeof options !== 'object') throw new TypeError('Expected second argument to be an options object');
    if ('readOnly' in options) throw new TypeError('Misspelled option "readOnly" should be "readonly"');
    if ('memory' in options) throw new TypeError('Option "memory" was removed in v7.0.0 (use ":memory:" filename instead)');
    // Interpret options
    const filename = filenameGiven.trim();
    const anonymous = filename === '' || filename === ':memory:';
    const readonly = util.getBooleanOption(options, 'readonly');
    const fileMustExist = util.getBooleanOption(options, 'fileMustExist');
    const timeout = 'timeout' in options ? options.timeout : 5000;
    const verbose = 'verbose' in options ? options.verbose : null;
    const nativeBinding = 'nativeBinding' in options ? options.nativeBinding : null;
    // Validate interpreted options
    if (readonly && anonymous && !buffer) throw new TypeError('In-memory/temporary databases cannot be readonly');
    if (!Number.isInteger(timeout) || timeout < 0) throw new TypeError('Expected the "timeout" option to be a positive integer');
    if (timeout > 0x7fffffff) throw new RangeError('Option "timeout" cannot be greater than 2147483647');
    if (verbose != null && typeof verbose !== 'function') throw new TypeError('Expected the "verbose" option to be a function');
    if (nativeBinding != null && typeof nativeBinding !== 'string' && typeof nativeBinding !== 'object') throw new TypeError('Expected the "nativeBinding" option to be a string or addon object');
    // Load the native addon
    let addon;
    if (nativeBinding == null) {
        addon = DEFAULT_ADDON || (DEFAULT_ADDON = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/bindings/bindings.js [client] (ecmascript)")('better_sqlite3.node'));
    } else if (typeof nativeBinding === 'string') {
        // See <https://webpack.js.org/api/module-variables/#__non_webpack_require__-webpack-specific>
        const requireFunc = typeof __non_webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t;
        addon = requireFunc(path.resolve(nativeBinding).replace(/(\.node)?$/, '.node'));
    } else {
        // See <https://github.com/WiseLibs/better-sqlite3/issues/972>
        addon = nativeBinding;
    }
    if (!addon.isInitialized) {
        addon.setErrorConstructor(SqliteError);
        addon.isInitialized = true;
    }
    // Make sure the specified directory exists
    if (!anonymous && !fs.existsSync(path.dirname(filename))) {
        throw new TypeError('Cannot open database because the directory does not exist');
    }
    Object.defineProperties(this, {
        [util.cppdb]: {
            value: new addon.Database(filename, filenameGiven, anonymous, readonly, fileMustExist, timeout, verbose || null, buffer || null)
        },
        ...wrappers.getters
    });
}
const wrappers = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/wrappers.js [client] (ecmascript)");
Database.prototype.prepare = wrappers.prepare;
Database.prototype.transaction = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/transaction.js [client] (ecmascript)");
Database.prototype.pragma = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/pragma.js [client] (ecmascript)");
Database.prototype.backup = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/backup.js [client] (ecmascript)");
Database.prototype.serialize = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/serialize.js [client] (ecmascript)");
Database.prototype.function = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/function.js [client] (ecmascript)");
Database.prototype.aggregate = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/aggregate.js [client] (ecmascript)");
Database.prototype.table = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/table.js [client] (ecmascript)");
Database.prototype.loadExtension = wrappers.loadExtension;
Database.prototype.exec = wrappers.exec;
Database.prototype.close = wrappers.close;
Database.prototype.defaultSafeIntegers = wrappers.defaultSafeIntegers;
Database.prototype.unsafeMode = wrappers.unsafeMode;
Database.prototype[util.inspect] = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/methods/inspect.js [client] (ecmascript)");
module.exports = Database;
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/database.js [client] (ecmascript)");
module.exports.SqliteError = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/better-sqlite3/lib/sqlite-error.js [client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/file-uri-to-path/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ var sep = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/path-browserify/index.js [client] (ecmascript)").sep || '/';
/**
 * Module exports.
 */ module.exports = fileUriToPath;
/**
 * File URI to Path function.
 *
 * @param {String} uri
 * @return {String} path
 * @api public
 */ function fileUriToPath(uri) {
    if ('string' != typeof uri || uri.length <= 7 || 'file://' != uri.substring(0, 7)) {
        throw new TypeError('must pass in a file:// URI to convert to a file path');
    }
    var rest = decodeURI(uri.substring(7));
    var firstSlash = rest.indexOf('/');
    var host = rest.substring(0, firstSlash);
    var path = rest.substring(firstSlash + 1);
    // 2.  Scheme Definition
    // As a special case, <host> can be the string "localhost" or the empty
    // string; this is interpreted as "the machine from which the URL is
    // being interpreted".
    if ('localhost' == host) host = '';
    if (host) {
        host = sep + sep + host;
    }
    // 3.2  Drives, drive letters, mount points, file system root
    // Drive letters are mapped into the top of a file URI in various ways,
    // depending on the implementation; some applications substitute
    // vertical bar ("|") for the colon after the drive letter, yielding
    // "file:///c|/tmp/test.txt".  In some cases, the colon is left
    // unchanged, as in "file:///c:/tmp/test.txt".  In other cases, the
    // colon is simply omitted, as in "file:///c/tmp/test.txt".
    path = path.replace(/^(.+)\|/, '$1:');
    // for Windows, we need to invert the path separators from what a URI uses
    if (sep == '\\') {
        path = path.replace(/\//g, '\\');
    }
    if (/^.+\:/.test(path)) {
    // has Windows drive at beginning of path
    } else {
        // unix path…
        path = sep + path;
    }
    return host + path;
}
}),
"[project]/OneDrive/Desktop/SDP_lab1/node_modules/bindings/bindings.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
/**
 * Module dependencies.
 */ var fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})(), path = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/next/dist/compiled/path-browserify/index.js [client] (ecmascript)"), fileURLToPath = __turbopack_context__.r("[project]/OneDrive/Desktop/SDP_lab1/node_modules/file-uri-to-path/index.js [client] (ecmascript)"), join = path.join, dirname = path.dirname, exists = fs.accessSync && function(path) {
    try {
        fs.accessSync(path);
    } catch (e) {
        return false;
    }
    return true;
} || fs.existsSync || path.existsSync, defaults = {
    arrow: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NODE_BINDINGS_ARROW || ' → ',
    compiled: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NODE_BINDINGS_COMPILED_DIR || 'compiled',
    platform: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].platform,
    arch: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arch,
    nodePreGyp: 'node-v' + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].versions.modules + '-' + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].platform + '-' + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arch,
    version: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].versions.node,
    bindings: 'bindings.node',
    try: [
        // node-gyp's linked version in the "build" dir
        [
            'module_root',
            'build',
            'bindings'
        ],
        // node-waf and gyp_addon (a.k.a node-gyp)
        [
            'module_root',
            'build',
            'Debug',
            'bindings'
        ],
        [
            'module_root',
            'build',
            'Release',
            'bindings'
        ],
        // Debug files, for development (legacy behavior, remove for node v0.9)
        [
            'module_root',
            'out',
            'Debug',
            'bindings'
        ],
        [
            'module_root',
            'Debug',
            'bindings'
        ],
        // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        [
            'module_root',
            'out',
            'Release',
            'bindings'
        ],
        [
            'module_root',
            'Release',
            'bindings'
        ],
        // Legacy from node-waf, node <= 0.4.x
        [
            'module_root',
            'build',
            'default',
            'bindings'
        ],
        // Production "Release" buildtype binary (meh...)
        [
            'module_root',
            'compiled',
            'version',
            'platform',
            'arch',
            'bindings'
        ],
        // node-qbs builds
        [
            'module_root',
            'addon-build',
            'release',
            'install-root',
            'bindings'
        ],
        [
            'module_root',
            'addon-build',
            'debug',
            'install-root',
            'bindings'
        ],
        [
            'module_root',
            'addon-build',
            'default',
            'install-root',
            'bindings'
        ],
        // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}
        [
            'module_root',
            'lib',
            'binding',
            'nodePreGyp',
            'bindings'
        ]
    ]
};
/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */ function bindings(opts) {
    // Argument surgery
    if (typeof opts == 'string') {
        opts = {
            bindings: opts
        };
    } else if (!opts) {
        opts = {};
    }
    // maps `defaults` onto `opts` object
    Object.keys(defaults).map(function(i) {
        if (!(i in opts)) opts[i] = defaults[i];
    });
    // Get the module root
    if (!opts.module_root) {
        opts.module_root = exports.getRoot(exports.getFileName());
    }
    // Ensure the given bindings name ends with .node
    if (path.extname(opts.bindings) != '.node') {
        opts.bindings += '.node';
    }
    // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035
    var requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : /*TURBOPACK member replacement*/ __turbopack_context__.t;
    var tries = [], i = 0, l = opts.try.length, n, b, err;
    for(; i < l; i++){
        n = join.apply(null, opts.try[i].map(function(p) {
            return opts[p] || p;
        }));
        tries.push(n);
        try {
            b = opts.path ? requireFunc.resolve(n) : requireFunc(n);
            if (!opts.path) {
                b.path = n;
            }
            return b;
        } catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND' && e.code !== 'QUALIFIED_PATH_RESOLUTION_FAILED' && !/not find/i.test(e.message)) {
                throw e;
            }
        }
    }
    err = new Error('Could not locate the bindings file. Tried:\n' + tries.map(function(a) {
        return opts.arrow + a;
    }).join('\n'));
    err.tries = tries;
    throw err;
}
module.exports = exports = bindings;
/**
 * Gets the filename of the JavaScript file that invokes this function.
 * Used to help find the root directory of a module.
 * Optionally accepts an filename argument to skip when searching for the invoking filename
 */ exports.getFileName = function getFileName(calling_file) {
    var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;
    Error.stackTraceLimit = 10;
    Error.prepareStackTrace = function(e, st) {
        for(var i = 0, l = st.length; i < l; i++){
            fileName = st[i].getFileName();
            if (fileName !== ("TURBOPACK compile-time value", "/ROOT/OneDrive/Desktop/SDP_lab1/node_modules/bindings/bindings.js")) {
                if (calling_file) {
                    if (fileName !== calling_file) {
                        return;
                    }
                } else {
                    return;
                }
            }
        }
    };
    // run the 'prepareStackTrace' function above
    Error.captureStackTrace(dummy);
    dummy.stack;
    // cleanup
    Error.prepareStackTrace = origPST;
    Error.stackTraceLimit = origSTL;
    // handle filename that starts with "file://"
    var fileSchema = 'file://';
    if (fileName.indexOf(fileSchema) === 0) {
        fileName = fileURLToPath(fileName);
    }
    return fileName;
};
/**
 * Gets the root directory of a module, given an arbitrary filename
 * somewhere in the module tree. The "root directory" is the directory
 * containing the `package.json` file.
 *
 *   In:  /home/nate/node-native-module/lib/index.js
 *   Out: /home/nate/node-native-module
 */ exports.getRoot = function getRoot(file) {
    var dir = dirname(file), prev;
    while(true){
        if (dir === '.') {
            // Avoids an infinite loop in rare cases, like the REPL
            dir = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$SDP_lab1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cwd();
        }
        if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
            // Found the 'package.json' file or 'node_modules' dir; we're done
            return dir;
        }
        if (prev === dir) {
            // Got to the top
            throw new Error('Could not find module root given file: "' + file + '". Do you have a `package.json` file? ');
        }
        // Try the parent dir next
        prev = dir;
        dir = join(dir, '..');
    }
};
}),
]);

//# sourceMappingURL=0ngz_12cj095._.js.map