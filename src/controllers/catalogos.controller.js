import { validationResult } from "express-validator";
import { Catalogo, getAllClases, getAllEmpaques, getAllProveedores, getAllSubClases, getAllUnidades } from "../repositories/catalogo.repository.js";

const GETALL = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const { Catalog } = req.params;
    var result = [];

    try {
        switch(Catalog) {
            case Catalogo.CLASE:console.log('tipo clase');
                result =  await getAllClases();
                break;
            case Catalogo.SUBCLASE:
                result = await getAllSubClases();
                break;
            case Catalogo.EMPAQUE:
                result = await getAllEmpaques();
                break;
            case Catalogo.PROVEEDOR:
                result = await getAllProveedores();
                break;
            case Catalogo.UNIDAD:
                result = await getAllUnidades();
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