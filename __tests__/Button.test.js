import 'react-native';
import React from 'react';
import Button from '../app/components/Button';
import renderer from 'react-test-renderer';

describe('button', () => {

  test("is true", () => {
    expect(true).toBe(true);
  });

  test("renders the button correctly", () =>{
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
