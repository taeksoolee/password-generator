'use client'

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    backgroundColor: 'red',
    padding: '1rem',
    paddingInlineStart: '2rem',
  },
  conditional: {
    backgroundColor: 'blue',
  },
  dynamic: (opacity) => ({
    opacity,
  }),
});

export const TestComp = () => (
<div
  {...stylex.props(
    styles.root,
  )}
></div>
);