'use strict';

var React = require('react');
var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Rect = createComponent('Rect', LayerMixin, {

    applyRectProps: function(prevProps, props) {
        var layer = this.node;
        layer.type = 'rect';
        layer.backgroundColor = props.backgroundColor || [];
        this.applyLayerProps(prevProps, props);
    },

    mountComponent: function(rootID, transaction, context) {
        var props = this._currentElement.props;
        var layer = this.node;
        this.applyRectProps({}, props);
        return layer;
    },

    receiveComponent: function(nextComponent, transaction, context) {
        var prevProps = this._currentElement.props;
        var props = nextComponent.props;
        this.applyRectProps({}, props);
        this._currentElement = nextComponent;
        this.node.invalidateLayout();
    },

});

module.exports = Rect;