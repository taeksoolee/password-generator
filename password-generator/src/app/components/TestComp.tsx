'use client'

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    backgroundColor: 'rgba(0,0,1,1)',
    padding: '1rem',
    paddingInlineStart: '2rem',
    margin: 0,
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