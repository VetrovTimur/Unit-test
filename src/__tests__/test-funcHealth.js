import getHealthStatus from '../funcHealth';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
])(
  'testing healthStatus function with %i points and %s status',
  (hp, expected) => {
    expect(getHealthStatus(hp)).toBe(expected);
  },
);
