import axios from "axios";
import erro from "../models/validations/common/erro.message.js";
import { cepIsInvalid, isCepInvalid } from "../models/validations/empresa/cep.validation.js";

export async function apiCep(req,res) {
    const { cep } = req.params;
    console.log(cep);

    if (await isCepInvalid(cep))
        return cepIsInvalid(cep);

    try {
        const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);

        const cepRes= response.data;
        res.status(200).json(cepRes);

    } catch (error) {
        erro(error);
    };
};