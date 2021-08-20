import * as yup from "yup";

export default yup.object().shape({
  name: yup
  .string()
  .required()
  .min(2, "Name must be more then 2 characters!"),
  size: yup
  .string()
  .required()
  .oneOf(["12", "14", "18", "half", "full"]),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  peppers: yup.boolean(),
  onion: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup.string(),
});