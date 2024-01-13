export default function getHealthStatus(obj) {
  const hp = obj.health;
  if (hp > 50) {
    return 'healthy';
  } if (hp < 15) {
    return 'critical';
  }
  return 'wounded';
}
