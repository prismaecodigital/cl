const letterBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('confirm-letter.index'), text: 'Confirm Letter' },
];

const databaseBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: '#', text: 'Database' },
];

const organizationBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('organizations.index'), text: 'Organization' },
];

const picBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('contacts.index'), text: 'PIC' },
];

const eventBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('events.index'), text: 'Event' },
];

const roomBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('rooms.index'), text: 'Room' },
];

const packageBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('packages.index'), text: 'Package' },
];

const authorizationBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: '#', text: 'Authorization' },
];

const userBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('users.index'), text: 'User' },
];

const roleBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('roles.index'), text: 'Role' },
];

const permissionBreadcrumb = [
  { link: route('dashboard'), text: 'Dashboard' },
  { link: route('permissions.index'), text: 'Permission' },
];

export {
  letterBreadcrumb,
  databaseBreadcrumb,
  organizationBreadcrumb,
  picBreadcrumb,
  eventBreadcrumb,
  roomBreadcrumb,
  packageBreadcrumb,
  authorizationBreadcrumb,
  userBreadcrumb,
  roleBreadcrumb,
  permissionBreadcrumb,
}