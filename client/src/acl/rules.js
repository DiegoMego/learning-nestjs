const godmode = [
  {
    action: 'read',
    subject: 'home',
  },
  {
    action: 'read',
    subject: 'company',
  }
];


export default function GetUserAbilityRules(role) {
  switch (role) {
    case 'GodMode':
      return godmode;
    default:
      return null;
  }
}