const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

app.post('/send-email', (req, res) => {
    const { name, email, content } = req.body

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Mensagem de ${name}`,
        html: `
            <p><strong>Nome:</strong> ${name}</p>
            <hr>
            <p><strong>E-mail:</strong> ${email}</p>
            <hr>
            <p><strong>Mensagem:</strong><br>${content}</p>
        `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao enviar o e-mail', error: error.toString() })
        }
        res.status(200).json({ message: 'E-mail enviado com sucesso!' })
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
