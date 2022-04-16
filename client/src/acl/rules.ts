const godmode = [
  {
    action: 'read',
    subject: 'home',
  },
  {
    action: 'read',
    subject: 'company',
  },
  {
    action: 'create',
    subject: 'company',
  },
];

export default function GetUserAbilityRules(role: string) {
  switch (role) {
    case 'GodMode':
      return godmode;
    default:
      return [];
  }
}
