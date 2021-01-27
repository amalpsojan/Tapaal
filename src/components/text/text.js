import React from 'react';
import type ReactElement from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import {Typography} from '@styles/';
const styles = StyleSheet.create({
  text: Typography.FONT_REGULAR,
});

export const Text = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.text, style]} {...props} />
);
