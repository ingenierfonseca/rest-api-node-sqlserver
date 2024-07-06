import { validationResult } from "express-validator";
import { getClase, getEmpaque, getProveedor, getSubClase, getUnidad } from "../repositories/catalogo.repository.js";
import Client from "../models/cliente.model.js";
import { createClient, deleteClient, getClient, getClients, updateClient } from "../repositories/client.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        Id,
        Codigo,
        Descripcion,
        IdClase,
        IdSubClase,
        IdUnidad,
        IdEmpaque,
        Proveedor,
        Impuesto,
        IdEstado
    } = req.body;

    const clientModel = new Client({
        Id: Id,
        Codigo: Codigo,
        Descripcion: Descripcion,
        IdClase: IdClase,
        IdSubClase: IdSubClase,
        IdUnidad: IdUnidad,
        IdEmpaque: IdEmpaque,
        Proveedor: Proveedor,
        Impuesto: Impuesto,
        IdEstado: IdEstado
    })

    try {
        const resultClase = await getClase(IdClase);
        if (resultClase == null) {
            return res.status(400).json({ message: 'IdClase invalid Param' })
        }

        const resultSubClase = await getSubClase(IdSubClase);
        if (resultSubClase == null) {
            return res.status(400).json({ message: 'IdSubClase invalid Param' })
        }

        const resultEmpaque = await getEmpaque(IdEmpaque);
        if (resultEmpaque == null) {
            return res.status(400).json({ message: 'IdEmpaque invalid Param' })
        }

        const resultProveedor = await getProveedor(Proveedor);
        if (resultProveedor == null) {
            return res.status(400).json({ message: 'Proveedor invalid Param' })
        }

        const resultUnidad = await getUnidad(IdUnidad);
        if (resultUnidad == null) {
            return res.status(400).json({ message: 'IdUnidad invalid Param' })
        }

        const resultCode = await getProductByCode(Codigo);
        if (resultCode != null && (Id === undefined || Id === 0)) {
            return res.status(400).json({ message: 'Codigo already exist' })
        }

        if (Id === undefined || Id === 0) {
            const result = await createClient(clientModel);
            return res.json({
                success: true,
                result
            })
        } else {
            const result = await updateClient(clientModel);

            if (result == null) return res.status(400).json({ message: 'Id invalid Param' })

            return res.json({
                success: true,
                result
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const GETALL = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const { filter, keyword, page = 1, limit = 15, orderBy = 'descripcion', sortBy = 'asc' } = req.query;

    const {fechaSincro = 0} = req.query

    try {
        const result = await getClients(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, parseInt(fechaSincro));

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

const GET = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors'] });
    }

    const { Id } = req.params;

    try {
        const result = await getClient(Id);

        if (result == null) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const DELETE = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors'] });
    }

    const { Id } = req.params;

    try {
        const result = await deleteClient(Id);

        if (result == 0) return res.status(400).json({ message: 'Invalid Param' })

        return res.json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default { POST, GET, GETALL, DELETE };