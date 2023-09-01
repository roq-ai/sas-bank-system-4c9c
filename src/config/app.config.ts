interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Bank Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Bank Owner', 'Bank Employee', 'Bank Manager', 'Customers', 'Accounts'],
  tenantName: 'Bank',
  applicationName: 'SAS Bank System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Log in to account securely',
    'View and manage account balance',
    'Download account statement',
    'Pay bills through the bank app',
    'Use credit card service',
    'Update personal details',
    'Securely log out of the bank app',
    'Manage credit card settings',
  ],
  ownerAbilities: [
    'Manage bank information',
    'Ensure bank app security',
    'Manage credit card services',
    "Manage bank app's security settings",
  ],
};
