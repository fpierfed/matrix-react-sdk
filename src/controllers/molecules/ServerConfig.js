/*
Copyright 2015 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require("react");

module.exports = {
    propTypes: {
        onHsUrlChanged: React.PropTypes.func,
        onIsUrlChanged: React.PropTypes.func,
        defaultHsUrl: React.PropTypes.string,
        defaultIsUrl: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            onHsUrlChanged: function() {},
            onIsUrlChanged: function() {},
            defaultHsUrl: 'https://matrix.org/',
            defaultIsUrl: 'https://matrix.org/'
        };
    },

    getInitialState: function() {
        return {
            hs_url: this.props.defaultHsUrl,
            is_url: this.props.defaultIsUrl,
            original_hs_url: this.props.defaultHsUrl,
            original_is_url: this.props.defaultIsUrl,
        }
    },

    hsChanged: function(ev) {
        this.setState({hs_url: ev.target.value}, function() {
            this.props.onHsUrlChanged(this.state.hs_url);
        });
    },

    // XXX: horrible naming due to potential confusion between the word 'is' and the acronym 'IS'
    isChanged: function(ev) {
        this.setState({is_url: ev.target.value}, function() {
            this.props.onIsUrlChanged(this.state.is_url);
        });
    },

    getHsUrl: function() {
        return this.state.hs_url;
    },

    getIsUrl: function() {
        return this.state.is_url;
    },
};
