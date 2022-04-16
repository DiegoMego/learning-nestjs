import React, { useEffect, useReducer } from 'react';
import { Button, Card } from 'react-bootstrap';
import { SingleValue } from 'react-select';
import CompanyTable from '../../components/tables/company.table';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';
import ContentLayout from '../../layouts/content.layout';
import actions from '../../redux/actions/company.action';
import SelectFilter from '../../components/filters/select.filter';
import { EnabledFilter } from '../../shared/constants';
import InputFilter from '../../components/filters/input.filter';

type Filters = {
  name?: string | null,
  industry?: SingleValue<DropdownOption<number>> | null,
  type?: SingleValue<DropdownOption<number>> | null,
  enabled?: SingleValue<DropdownOption<boolean>> | null
}

type State = {
  filters: {
    name?: string | null,
    industry?: SingleValue<DropdownOption<number>> | null,
    type?: SingleValue<DropdownOption<number>> | null,
    enabled?: SingleValue<DropdownOption<boolean>> | null
  }
}

type Action = {
  type: string,
  payload: {
    name?: string | null,
    industry?: SingleValue<DropdownOption<number>> | null,
    type?: SingleValue<DropdownOption<number>> | null,
    enabled?: SingleValue<DropdownOption<boolean>> | null
  }
}

const initialState = {
  name: null,
  industry: null,
  type: null,
  enabled: null,
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

function CompanyFilters({ reload }: { reload: (filters: CompanyFilters) => void }) {
  const dispatch = useAppDispatch();
  const dropdowns = useAppSelector((state) => state.company.dropdowns);
  const [state, localDispatch] = useReducer(reducer, initialState, init);

  const onChange = (action: Action) => {
    localDispatch(action);
  };

  useEffect(() => {
    dispatch(actions.industries.get());
    dispatch(actions.types.get());
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      reload({
        Name: state.filters.name,
        Industry: state.filters.industry?.value,
        Type: state.filters.type?.value,
        Enabled: state.filters.enabled?.value,
      });
    }, 1000);
    return () => clearTimeout(delay);
  }, [state]);

  return (
    <Card>
      <Card.Body>
        <InputFilter
          name="name"
          onChange={(e) => onChange({ type: 'setName', payload: { name: e.target.value } })}
          onTitleClick={() => onChange({ type: 'setName', payload: { name: null } })}
          placeholder="Nombre"
          title="Nombre"
          value={state.filters.name || ''}
        />
        <SelectFilter
          placeholder="Estado"
          options={EnabledFilter}
          value={state.filters.enabled}
          onChange={(e) => onChange({ type: 'setEnabled', payload: { enabled: e } })}
        />
        <SelectFilter
          placeholder="Industria"
          options={dropdowns.industries}
          value={state.filters.industry}
          onChange={(e) => onChange({ type: 'setIndustry', payload: { industry: e } })}
        />
        <SelectFilter
          placeholder="Tipo"
          options={dropdowns.types}
          value={state.filters.type}
          onChange={(e) => onChange({ type: 'setType', payload: { type: e } })}
        />
        <Button onClick={() => onChange({ type: 'reset', payload: initialState })}>Reset</Button>
      </Card.Body>
    </Card>
  );
}

export default function CompanyIndex() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.company.table.data);
  const reload = (filters: CompanyFilters) => {
    dispatch(actions.table(filters));
  };

  return (
    <ContentLayout>
      <CompanyFilters reload={reload} />
      <div className="separator" />
      <CompanyTable data={data} />
    </ContentLayout>
  );
}
