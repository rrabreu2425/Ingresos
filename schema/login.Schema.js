const {z}= require('zod')


export const singUpSchema= z.object({
  username: z.string({
    required_error: 'Username is required'
      }).email({
        required_error: 'Invalid Username'
      }),
  password: z.string({
       required_error:'Passwor is required'
  }).min(6, {
    required_error:'Password must be at least 6 characters '
  })
})

export const signIn= z.object({
    username: z.string({
        required_error:'Email requiered'
    }).email({
        required_error:' Invalid email'
    }),
    password:z.string({
        required_error:'Password requiered'
    }).min(6, {
        required_error:'Password must be at least 6 characters '
    })
})