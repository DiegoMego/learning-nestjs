import React, { useEffect, useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';
import Select, { SingleValue } from 'react-select';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import { EnabledFilter } from '../../shared/constants';
import actions from '../../redux/actions/company.action';

type Filters = {
  name?: string | null,
  industry?: SingleValue<DropdownOption<number | null>>,
  type?: SingleValue<DropdownOption<number | null>>,
  enabled?: SingleValue<DropdownOption<boolean | null>>
}

type State = {
  filters: {
    name?: string | null,
    industry?: SingleValue<DropdownOption<number | null>>,
    type?: SingleValue<DropdownOption<number | null>>,
    enabled?: SingleValue<DropdownOption<boolean | null>>
  }
}

type Action = {
  type: string,
  payload: {
    name?: string | null,
    industry?: SingleValue<DropdownOption<number | null>>,
    type?: SingleValue<DropdownOption<number | null>>,
    enabled?: SingleValue<DropdownOption<boolean | null>>
  }
}

const initialState = {
  name: null,
  industry: {
    label: 'Industria',
    value: null,
  },
  type: {
    label: 'Tipo',
    value: null,
  },
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
    case 'setIndustry': {
      const payload = action.payload.industry || initialState.industry;
      return {
        filters: {
          ...state.filters,
          industry: payload,
        },
      };
    }
    case 'setType': {
      const payload = action.payload.type || initialState.type;
      return {
        filters: {
          ...state.filters,
          type: payload,
        },
      };
    }
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
  const dispatch = useAppDispatch();
  const dropdowns = useAppSelector((state) => state.company.dropdowns);
  const [state, localDispatch] = useReducer(reducer, initialState, init);
  let delay : NodeJS.Timeout | null = null;

  const onChange = (action: Action) => {
    localDispatch(action);
  };

  useEffect(() => {
    dispatch(actions.industries.get());
    dispatch(actions.types.get());
  }, []);

  useEffect(() => {
    if (delay !== null) clearTimeout(delay);
    delay = setTimeout(() => {
      reload({
        Name: state.filters.name,
        Industry: state.filters.industry?.value,
        Type: state.filters.type?.value,
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
        <Select
          className="react-select-container"
          isClearable
          options={dropdowns.industries}
          value={state.filters.industry}
          onChange={(e) => onChange({ type: 'setIndustry', payload: { industry: e } })}
        />
        <Select
          className="react-select-container"
          isClearable
          options={dropdowns.types}
          value={state.filters.type}
          onChange={(e) => onChange({ type: 'setType', payload: { type: e } })}
        />
        <Button onClick={() => onChange({ type: 'reset', payload: initialState })}>Reset</Button>
      </Card.Body>
    </Card>
  );
}
