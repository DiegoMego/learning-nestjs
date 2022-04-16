/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select, {
  components, ControlProps, CSSObjectWithLabel, GroupBase, Props,
} from 'react-select';
import styles from '../../assets/scss/filters/select.module.scss';

function Control<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ children, ...props }: ControlProps<Option, IsMulti, Group>) {
  return (
    <>
      <span
        role="button"
        tabIndex={0}
        onClick={() => props.clearValue()}
        onKeyDown={() => null}
        className={styles.title}
        style={{
          display: `${props.selectProps.menuIsOpen || props.hasValue ? 'inline' : 'none'}`,
          color: `${props.isFocused ? '#2684ff' : '#ccc'}`,
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

export default function SelectFilter<
  Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      {...props}
      className={styles.container}
      components={{ Control }}
      styles={{
        menu: (css: CSSObjectWithLabel) => {
          const { width, ...rest } = css;
          return rest;
        },
        option: (css: CSSObjectWithLabel) => ({
          ...css,
          whiteSpace: 'nowrap',
        }),
      }}
    />
  );
}
