import Joi, { valid } from 'joi'

const Routes = {
  LOGIN: {
    path: '/login',
    method: 'POST',
    validate: {
      payload: Joi.object({
        email: Joi.string()
          .email({
            tlds: false,
          })
          .required(),
        password: Joi.string().required(),
      }),
    },
  },
}

export default Routes
