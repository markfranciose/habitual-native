// first stab at IOS push notifications

import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, AppState } from 'react-native';
import PushControl from './pushControl';
import PushNotification from 'react-native-push-notification';

const styles = StyleSheet.create({
	picker: {
		width: 100,
	},
});

export default class Cool extends Component {
	constructor(props){
		super(props);

		this.handleAppStateChange = this.handleAppStateChange.bind(this);
		this.state = {
			seconds: 5,
		};
	}

	componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener('change', this.handleAppStateChange);
	}

	handleAppStateChange(AppState){
		if (AppState === 'background') {
			PushNotification.localNotificationSchedule({
				message: "Time for a habit, yo!",
				date: new Date(Date.now() + (this.state.seconds * 1000))
			})
		}
	}

	render() {
		return (
			<View>
				<Text>Gimme a habbbbbbbbbbit!</Text>
				<Picker
					style={styles.picker}
					selectedValue={this.state.seconds}
					onValueChange={(seconds) => this.setState({ seconds })}
				>
					<Picker.Item label="5" value={5} />
					<Picker.Item label="10" value={10} />
					<Picker.Item label="15" value={15} />

				</Picker>
				<PushControl/>
			</View>
			)
	}
}
