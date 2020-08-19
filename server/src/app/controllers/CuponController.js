import Cupon from "../models/Cupon";
//import { validate } from "../models/CuponValidate";
import { parseISO, isBefore, isEqual } from "date-fns";
const { Op } = require("sequelize");

import * as yup from "yup";

class CuponController {
  async index(request, response) {
    const { status, dateExpirationStart, dateExpirationEnd } = request.query;

    if (status) {
      console.log("entrei");
      const cupon = await Cupon.findAll({
        where: { status: status },
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["createdAt", "ASC"],
        ],
      });
      return response.json(cupon);
    }

    if (dateExpirationStart && dateExpirationEnd) {
      const cupon = await Cupon.findAll({
        where: {
          expiration_date: {
            [Op.between]: [dateExpirationStart, dateExpirationEnd],
          },
        },
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["createdAt", "ASC"],
        ],
      });
      return response.json(cupon);
    }

    const cupon = await Cupon.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["createdAt", "ASC"],
      ],
    });
    return response.json(cupon);
  }

  async store(request, response) {
    const {
      code,
      description,
      value,
      expiration_date,
      use_date,
      status,
    } = request.body;

    const schema = yup.object().shape({
      code: yup
        .string()
        .matches(/^[^\W_]*\d+[^\W_]*$/)
        .required(),
      description: yup.string().required(),
      value: yup.number().required(),
      expiration_date: yup.date().required(),
      status: yup.mixed().oneOf(["active", "expired", "utilized"]),
      use_date: yup.date().required(),
    });

    const checkCodeCupon = await Cupon.findOne({
      where: { code: code },
    });

    if (checkCodeCupon) {
      return response
        .status(400)
        .json({ error: "Código de cupom já foi criado" });
    }

    const expirationDate = parseISO(expiration_date);
    const useDate = parseISO(use_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateIsBefore = isBefore(useDate, expirationDate);
    const dateIsEqual = isEqual(useDate, expirationDate);
    const dateIsExpired = isBefore(expirationDate.setHours(0, 0, 0, 0), today);
    const dateIsEqualActual = isEqual(
      expirationDate.setHours(0, 0, 0, 0),
      today
    );

    if (dateIsExpired && !dateIsEqualActual) {
      return response.status(400).json({
        error: "Data inválida, precisa ser posterior ou igual a atual",
      });
    }

    if (!dateIsBefore && !dateIsEqual) {
      return response
        .status(400)
        .json({ error: "Validação falhou, data de uso inválida" });
    }

    const isValid = await schema.isValid(request.body);

    if (!isValid) {
      return response
        .status(400)
        .json({ error: "Validação falhou, verifique os campos" });
    }

    const cupon = await Cupon.create({
      code,
      description,
      value,
      expiration_date, //"2020-08-11 13:30:00",
      use_date,
      status,
    });
    return response.json(cupon);
  }

  async update(request, response) {
    const cupon = await Cupon.findByPk(request.params.id);

    const {
      code,
      description,
      value,
      expiration_date,
      use_date,
      status,
    } = request.body;

    const schema = yup.object().shape({
      code: yup
        .string()
        .matches(/^[^\W_]*\d+[^\W_]*$/)
        .required(),
      description: yup.string().required(),
      value: yup.number().required(),
      expiration_date: yup.date().required(),
      status: yup.mixed().oneOf(["active", "expired", "utilized"]),
      use_date: yup.date().required(),
    });

    const checkCodeCupon = await Cupon.findOne({
      where: { code: code },
    });
    //first checked if code in request.body is the cupon selected for pk
    if (!(code === cupon.code)) {
      //checked if exist in bank other code identity
      if (checkCodeCupon) {
        return response
          .status(400)
          .json({ error: "Código de cupom já foi criado" });
      }
    }

    const expirationDate_bank = parseISO(cupon.expiration_date);
    const expirationDate = parseISO(expiration_date);
    const useDate = parseISO(use_date);

    const dateIsBefore_bank = isBefore(useDate, expirationDate_bank);
    const dateIsBefore = isBefore(useDate, expirationDate);
    const dateIsEqual = isEqual(useDate, expirationDate);
    const cuponIsExpired = isBefore(dateIsBefore_bank, new Date());

    if (!dateIsBefore && !dateIsEqual) {
      return response
        .status(400)
        .json({ error: "Validação falhou, data de uso inválida" });
    }

    if (cuponIsExpired || cupon.status === "expired") {
      return response
        .status(400)
        .json({ error: "Cupon expirado, não pode ser alterado" });
    }

    const isValid = await schema.isValid(request.body);

    if (!isValid) {
      return response
        .status(400)
        .json({ error: "Validação falhou, verifique os campos" });
    }

    const cuponUp = await cupon.update(request.body);
    return response.json(cuponUp);
  }
}

export default new CuponController();
