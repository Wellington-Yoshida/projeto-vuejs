class Cliente {
  constructor() {
    this.clientes = [
      { nome: 'Romero', produto: 'API-Dist', ip: '192.101.102.1' },
      { nome: 'Romero', produto: 'API-Financ', ip: '192.101.102.2' },
      { nome: 'Romero', produto: 'Mule', ip: '192.101.102.3' },
      { nome: 'Romero', produto: 'Redis', ip: '192.101.102.4' },
    ]
  }
  clientes: Object;
}