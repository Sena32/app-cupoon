import * as yup from "yup";

export const validate = async (data) => {
  const schema = yup.object().shape({
    code: yup.string().required(),
    description: yup.string().required(),
    value: yup.number().required(),
    expiration_date: yup
      .date()
      .required() /* when("use_date", (use_date, field) => {
      if (use_date && field >= use_date) return field.required();
    }) */,
    status: yup.object().required(),
    use_date: yup.date().required(),
  });

  return await schema.isValid(data);
};
