const mapping: Record<string, string> = {
  banks: 'bank',
  bills: 'bill',
  customers: 'customer',
  employees: 'employee',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
