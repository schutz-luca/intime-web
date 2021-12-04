/**
 * IMPORTS
 */
import React from 'react';
import { defaultProps, IProps } from './emptystate.d';
import { $Description, $Empty, $Title } from './styles';


/**
 * I am an empty state component.
 */
const EmptyState = (props: IProps): React.ReactElement => (
  props.visible === true && (
    <$Empty>
      <props.icon />

      <$Title>{props.title}</$Title>
      <$Description>
        {props.description}
        {props.children}
      </$Description>
    </$Empty>
  )
);

// set default properties
EmptyState.defaultProps = defaultProps;


/**
 * EXPORTS
 */
export { EmptyState };
