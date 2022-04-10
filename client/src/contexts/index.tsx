import { NavCollapseContext, NavCollapseProvider } from './nav-collapse.context';
import AbilityContext from './ability.context';

const Contexts = {
  NavCollapse: NavCollapseContext,
  Ability: AbilityContext,
};

const Providers = {
  NavCollapse: NavCollapseProvider,
};

export {
  Contexts,
  Providers,
};
