export const getNavigator = () => {
  if (typeof window === 'undefined') return false;
  const nav = window.navigator || navigator;
  if (!nav) return false;

  return nav;
};
