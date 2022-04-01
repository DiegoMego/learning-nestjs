import { NavCollapseContext, NavCollapseProvider } from "./nav-collapse.context";
import AbilityContext from './ability.context';

const contexts = {
  nav_collapse: NavCollapseContext,
  ability: AbilityContext,
};

const providers = {
  nav_collapse: NavCollapseProvider,
};

export {
  contexts,
  providers,
}