// more testing of push notifications

import React, { Component } from  'react';
import PushNotification from 'react-native-push-notification';

export default class PushControl extends Component {
	componentDidMount() {
		PushNotification.configure({
			onNotification: function(notification) {
				console.log('NOTIFICATION', notification );
			}

		});
	}

	render() {
		return null;
	}
}
