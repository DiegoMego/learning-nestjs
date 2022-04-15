/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select, {
  components, ControlProps, GroupBase, Props,
} from 'react-select';

function Control<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ children, ...props }: ControlProps<Option, IsMulti, Group>) {
  return (
    <>
      <span
        style={{
          display: `${props.selectProps.menuIsOpen || props.hasValue ? 'inline' : 'none'}`,
        }}
      >
        {props.selectProps.placeholder}
      </span>
      <components.Control {...props}>
        {children}
      </components.Control>
    </>
  );
}

export default function SelectControl<
  Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      {...props}
      components={{ Control }}
    />
  );
}
