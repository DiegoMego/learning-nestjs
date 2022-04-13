import React, { useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';
import Select, { SingleValue } from 'react-select';
import { EnabledFilter } from '../../shared/constants';

type Filters = {
  enabled: SingleValue<DropdownOption<boolean | null>>
}

type State = {
  filters: {
    enabled: SingleValue<DropdownOption<boolean | null>>
  }
}

type Action = {
  type: string,
  payload: Filters
}

const initialState = {
  enabled: {
    label: 'Estado',
    value: null,
  },
};

const init = (
  payload: { enabled: SingleValue<DropdownOption<boolean | null>> },
) => ({ filters: payload });

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setEnabled':
      return {
        filters: {
          ...state.filters,
          ...(action.payload || initialState),
        },
      };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function CompanyFilters({ reload }: { reload: (filters: CompanyFilters) => void }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const onChange = (action: Action) => {
    dispatch(action);
    reload({ Enabled: state.filters.enabled?.value });
  };

  return (
    <Card>
      <Card.Body>
        <Select
          className="react-select-container"
          isClearable
          options={EnabledFilter}
          value={state.filters.enabled}
          onChange={(e) => onChange({ type: 'setEnabled', payload: { enabled: e } })}
        />
        <Button onClick={() => dispatch({ type: 'reset', payload: initialState })}>Reset</Button>
      </Card.Body>
    </Card>
  );
}
