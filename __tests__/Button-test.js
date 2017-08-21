import 'react-native';
import React from 'react';
import Button from '../app/components/Button'

import renderer from 'react-test-renderer';

test ('renders correctl', () => {
  const tree = renderer.create(
    <Button />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
