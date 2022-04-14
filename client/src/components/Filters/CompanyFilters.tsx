import React, { useEffect, useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';
import Select, { SingleValue } from 'react-select';
import { EnabledFilter } from '../../shared/constants';

type Filters = {
  name?: string | null,
  enabled?: SingleValue<DropdownOption<boolean | null>>
}

type State = {
  filters: {
    name?: string | null,
    enabled?: SingleValue<DropdownOption<boolean | null>>
  }
}

type Action = {
  type: string,
  payload: {
    name?: string | null,
    enabled?: SingleValue<DropdownOption<boolean | null>>
  }
}

const initialState = {
  name: null,
  enabled: {
    label: 'Estado',
    value: null,
  },
};

const init = (initialValue: Filters): State => ({ filters: initialValue });

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setName':
      return {
        filters: {
          ...state.filters,
          name: action.payload.name,
        },
      };
    case 'setEnabled': {
      const payload = action.payload.enabled || initialState.enabled;
      return {
        filters: {
          ...state.filters,
          enabled: payload,
        },
      };
    }
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function CompanyFilters({ reload }: { reload: (filters: CompanyFilters) => void }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  let delay : NodeJS.Timeout | null = null;

  const onChange = (action: Action) => {
    dispatch(action);
  };

  useEffect(() => {
    if (delay !== null) clearTimeout(delay);
    delay = setTimeout(() => {
      reload({
        Name: state.filters.name,
        Enabled: state.filters.enabled?.value,
      });
    }, 1000);
  }, [state]);

  return (
    <Card>
      <Card.Body>
        <input
          name="name"
          placeholder="Filtrar por nombre"
          value={state.filters.name || ''}
          onChange={(e) => onChange({ type: 'setName', payload: { name: e.target.value } })}
        />
        <Select
          className="react-select-container"
          isClearable
          options={EnabledFilter}
          value={state.filters.enabled}
          onChange={(e) => onChange({ type: 'setEnabled', payload: { enabled: e } })}
        />
        <Button onClick={() => onChange({ type: 'reset', payload: initialState })}>Reset</Button>
      </Card.Body>
    </Card>
  );
}
