import React from 'react';
import 'react-native';
import HabitTextInput from '../app/components/HabitTextInput';
import renderer from 'react-test-renderer';


describe('HabitTextInput', () => {

  test('it is true', () => {
    expect(true).toBe(true);
  });

  test('is rendered correctly', () => {
    const tree = renderer.create(<HabitTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
