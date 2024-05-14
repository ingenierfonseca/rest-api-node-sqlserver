
export const lastDateSincroValidate = (value, {req}) => {
    if (req.query.ultimaFechaSincro) {
        if (value.length != 14) {
            throw new Error('Invalid param length');
        }

        const fecha = new Date(parseInt(value, 10));
        if (isNaN(fecha.getFullYear()) || fecha.getTime() != value) {
            throw new Error('Invalida param structure');
        }
        

        return true;
    }
    return true;
  };