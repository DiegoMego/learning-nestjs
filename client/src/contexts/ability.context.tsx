import { createContext } from 'react';
import { Ability } from '@casl/ability';

const AbilityContext = createContext<Ability>(new Ability([]));

export default AbilityContext;
