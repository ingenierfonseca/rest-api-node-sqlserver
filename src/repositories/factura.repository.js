import { sequelize2 } from '../db/connection.js';
import FacturaRes from '../response/factura.res.js';

export const getFacturasCliente = async (id, fechaSincro) => {
    try {
        const [resultados] = await sequelize2.query('EXEC spObternerFacturasClientes :param1, :param2', {
            replacements: { param1: id, param2: fechaSincro }
        });
        const res = resultados.map(row => new FacturaRes(
            row.numero, row.fechaing, row.fechaven, row.saldo, row.saldoUSD, row.FechaEmisionDate,
            row.FechaVencimientoDate, row.registro, row.IdRegistro, row.Moneda, row.IdMoneda
        ));
        return res;
    } catch (error) {
        console.error('Error al llamar al procedimiento almacenado:', error);
    }
}