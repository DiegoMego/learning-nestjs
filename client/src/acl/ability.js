import { Ability } from '@casl/ability';

const godmode = new Ability([
  {
    action: 'read',
    subject: 'home',
  },
  {
    action: 'read',
    subject: 'company',
  }
]);


export default function GetUserAbility(role) {
  switch (role) {
    case 'GodMode':
      return godmode;
    default:
      return null;
  }
}