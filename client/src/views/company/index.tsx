import React, { useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';
import Select from 'react-select';
import PageLayout from '../../layouts/PageLayout';
import { EnabledFilter } from '../../shared/constants';

type State = {
  filters: {
    enabled: DropdownOption<boolean | null>
  }
}

type Action = {
  type: string,
  payload: any,
}

const initialState = {
  enabled: {
    label: 'Estado',
    value: null,
  },
};

const init = (payload: { enabled: DropdownOption<boolean | null> }) => ({ filters: payload });

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'setEnabled':
      return {
        filters: {
          ...state.filters,
          enabled: action.payload,
        },
      };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function CompanyIndex() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <PageLayout>
      <Card>
        <Card.Body>
          <Select
            isClearable
            options={EnabledFilter}
            value={state.filters.enabled}
            onChange={(e) => dispatch({ type: 'setEnabled', payload: e })}
          />
        </Card.Body>
      </Card>
      <Button onClick={() => dispatch({ type: 'reset', payload: initialState })}>Reset</Button>
    </PageLayout>
  );
}
