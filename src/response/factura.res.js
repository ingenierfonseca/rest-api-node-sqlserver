class FacturaRes {
    constructor(numero, fechaing, fechaven, saldo, saldoUSD, FechaEmisionDate, 
        FechaVencimientoDate, registro, IdRegistro, Moneda, IdMoneda,
        FechaSincronizacion) {
      this.Numero = numero;
      this.FechaIngreso = fechaing;
      this.FechaVence = fechaven;
      this.SaldoCR = saldo;
      this.SaldoUSD = saldoUSD;
      this.FechaEmision = FechaEmisionDate;
      this.FechaVencimiento = FechaVencimientoDate;
      this.Registro = registro;
      this.IdRegistro = IdRegistro;
      this.Moneda = Moneda;
      this.IdMoneda = IdMoneda;
      this.FechaSincronizacion = FechaSincronizacion;
    }
}
export default FacturaRes;