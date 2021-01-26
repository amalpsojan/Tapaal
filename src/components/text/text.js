import React from 'react';
import type ReactElement from 'react';
import {Platform, StyleSheet, Text as RNText} from 'react-native';

const styles = StyleSheet.create({
  text: {fontWeight: FontWeight('400'), fontSize: FontSize(14)},
});

export const Text = ({style, ...props}: Object): ReactElement<RNText> => (
  <RNText style={[styles.text, style]} {...props} />
);
