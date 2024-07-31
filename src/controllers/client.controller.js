import { validationResult } from "express-validator";
import { getDepartamento, getMunicipio, getNegocio, getTipoCliente, getTipoIdentificacion, getVendedor } from "../repositories/catalogo.repository.js";
import Client from "../models/cliente.model.js";
import { createClient, deleteClient, getClient, getClientByCode, getClients, updateClient } from "../repositories/client.repository.js";


const POST = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors:  errors['errors']})
    }

    const {
        Id,
        Codigo,
        Nombre,
        IdTipoCliente,
        IdTipoId,
        Identificacion,
        Direccion,
        NegRegistro,
        VendREgistro,
        DepRegistro,
        MunRegistro,
        Telefono,
        Fax,
        Correo,
        Negocio,
        DireccionNegocio,
        Contacto1,
        Contacto2,
        Limite,
        Saldo,
        DiasCredito,
        CTAContable,
        SaldoAFavor,
        SaldoUSD,
        Estado
    } = req.body;

    const clientModel = new Client({
        Id: Id,
        Codigo: Codigo,
        Nombre: Nombre,
        IdTipoCliente: IdTipoCliente,
        IdTipoId: IdTipoId,
        Identificacion: Identificacion,
        Direccion: Direccion,
        NegRegistro: NegRegistro,
        VendREgistro: VendREgistro,
        DepRegistro: DepRegistro,
        MunRegistro: MunRegistro,
        Telefono: Telefono,
        Fax: Fax == undefined ? '' : Fax,
        Correo: Correo,
        Negocio: Negocio == undefined ? '' : Negocio,
        DireccionNegocio: DireccionNegocio == undefined ? '' : DireccionNegocio,
        Contacto1: Contacto1 == undefined ? '' : Contacto1,
        Contacto2: Contacto2 == undefined ? '' : Contacto2,
        Limite: Limite == undefined ? 0.0 : Limite,
        Saldo: Saldo == undefined ? 0.0 : Saldo,
        DiasCredito: DiasCredito == undefined ? 0 : DiasCredito,
        CTAContable: CTAContable == undefined ? '' : CTAContable,
        SaldoAFavor: SaldoAFavor == undefined ? 0.0 : SaldoAFavor,
        SaldoUSD: SaldoUSD,
        Estado: Estado == undefined ? 0 : Estado
    })

    try {
        const resultTipoCliente = await getTipoCliente(IdTipoCliente);
        if (resultTipoCliente == null) {
            return res.status(400).json({ message: 'IdTipoCliente invalid Param' })
        }

        const resultTipoId = await getTipoIdentificacion(IdTipoId);
        if (resultTipoId == null) {
            return res.status(400).json({ message: 'IdTipoId invalid Param' })
        }

        const resultNegocio = await getNegocio(NegRegistro);
        if (resultNegocio == null) {
            return res.status(400).json({ message: 'NegRegistro invalid Param' })
        }

        const resultVendedor = await getVendedor(VendREgistro);
        if (resultVendedor == null) {
            return res.status(400).json({ message: 'VendREgistro invalid Param' })
        }

        const resultDepartamento = await getDepartamento(DepRegistro);
        if (resultDepartamento == null) {
            return res.status(400).json({ message: 'DepRegistro invalid Param' })
        }

        const resultMunicipio = await getMunicipio(MunRegistro);
        if (resultMunicipio == null) {
            return res.status(400).json({ message: 'MunRegistro invalid Param' })
        }

        const resultCode = await getClientByCode(Codigo);
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
        const result = await getClients(filter, keyword, parseInt(page), parseInt(limit), orderBy, sortBy, fechaSincro);

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