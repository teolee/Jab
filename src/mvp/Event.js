jab.Event = function() {
    
    /**
     * The proto object
     */
    var event = {};

    /**
     * @param {Function} handler The handler function for the event
     * @return the event for chaining
     */
    event.addListener = function(handler) {
        for (var i=0,len=this._listeners.length;i<len;i++) {
            if (this._listeners[i] == handler) {
                return this;
            }
        }
        this._listeners.push(handler);
        return this;
    };

    /**
     * Return the number of listeners the event has
     * @return {Number} The number of listener the event has
     */
    event.hasListener = function() {
        return this._listeners.length;
    };

    /**
     * @param {Mixed} data The optional data to pass to the handler when
     * the event is fired
     * @return the event for chaining
     */
    event.fire = function(data) {
        var fn;
        for (var i in this._listeners) {
            fn = this._listeners[i];
            fn.call(this.target,this,data);
        }
        return this;
    };

    /**
     * The Event constructor. It just initializes the listener array
     */
    event.constructor = function() {
        this._listeners = [];
    };

    event.constructor.prototype = event;

    return event.constructor;

}();
