
export const lastDateSincroValidate = (value, {req}) => {
    if (req.query.fechaSincro) {
        if (value.length != 17 && value != 0) {
            throw new Error('Invalid param length');
        }

        /*const fecha = new Date(parseInt(value, 10));
        console.log(fecha);
        if (isNaN(fecha.getFullYear()) || fecha.getTime() != value) {
            throw new Error('Invalida param structure');
        }*/
        

        return true;
    }
    return true;
  };