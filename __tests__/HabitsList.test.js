import 'react-native';
import React from 'react';
import HabitsList from '../app/components/HabitsList';
import renderer from 'react-test-renderer';

describe('habits list', () => {

  test("is true", () => {
    expect(true).toBe(true);
  });

  test('renders the habits list correctly', () => {
    const tree = renderer.create(<HabitsList />).toJSON();
      expect(tree).toMatchSnapshot();
  });

});
