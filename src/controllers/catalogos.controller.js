import { validationResult } from "express-validator";
import { Catalogo, getAllAgencias, getAllClases, getAllDepartamentos, getAllEmpaques, getAllMonedas, getAllMunicipios, getAllNegocios, getAllProveedores, getAllSubClases, getAllTipoIdentificaciones, getAllTipoPrecios, getAllUnidades, getAllVendedores } from "../repositories/catalogo.repository.js";

const GETALL = async (req, res) => {
    const errors = validationResult(req);
    const {fechaSincro = 0} = req.query

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const { Catalog } = req.params;
    var result = [];

    try {
        switch(Catalog) {
            case Catalogo.AGENCIA:
                result =  await getAllAgencias(fechaSincro);
                break;
            case Catalogo.CLASE:
                result =  await getAllClases(fechaSincro);
                break;
            case Catalogo.SUBCLASE:
                result = await getAllSubClases(fechaSincro);
                break;
            case Catalogo.DEPARTAMENTO:
                result = await getAllDepartamentos(fechaSincro);
                break;
            case Catalogo.EMPAQUE:
                result = await getAllEmpaques(fechaSincro);
                break;
            case Catalogo.MONEDA:
                result = await getAllMonedas(fechaSincro);
                break;
            case Catalogo.MUNICIPIO:
                result = await getAllMunicipios(fechaSincro);
                break;
            case Catalogo.NEGOCIO:
                result = await getAllNegocios(fechaSincro);
                break;
            case Catalogo.PROVEEDOR:
                result = await getAllProveedores(fechaSincro);
                break;
            case Catalogo.TIPOIDENTIFICACION:
                result = await getAllTipoIdentificaciones(fechaSincro);
                break;
            case Catalogo.TIPOPRECIO:
                result = await getAllTipoPrecios(fechaSincro);
                break;
            case Catalogo.UNIDAD:
                result = await getAllUnidades(fechaSincro);
                break;
            case Catalogo.VENDEDOR:
                result = await getAllVendedores(fechaSincro);
                break;
        }

        return res.json({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default { GETALL };