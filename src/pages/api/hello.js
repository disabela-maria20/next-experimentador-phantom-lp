// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

/*const human = await validateHuman(formData.tokenRecaptcha)
if(!human) {
  res.status(400)
  res.json({errors: ["Bot detectado"]})
  return
}

async function validateHuman(tokenRecaptcha) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${tokenRecaptcha}`, {
    method: "POST",
  })
  const data = await response.json()

  return data.success
}*/
