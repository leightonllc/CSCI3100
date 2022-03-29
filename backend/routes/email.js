const formData = require('form-data')
const Mailgun = require('mailgun.js')
const expressAsyncHandler = require('express-async-handler')
const express = require("express");

const emailRoutes = express.Router();

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
   username: 'api', 
   key: process.env.MAILGUN_API_KEY || '7e86515328a55a97799f585891a6c046-62916a6c-c9db4d11'
})


const sendEmail = expressAsyncHandler(async (req, res) => {
   console.log(req.body)
   const {name, email, rando} = req.body
   if(!email) {
      res.status(400)
      throw new Error("No email provided")
   } else {
      res.status(201).json({
         email: email,
         rando: rando
      })
   }

   const messageParams = {
      from: "CUTE <test@sandbox7eb4561f9f764479b2bd493d3c23829e.mailgun.org>",
      to: [email],
      subject: "CUTE Verification Code",
      text: 'Verfication Code:'+rando
   }
   mg.messages.create("sandbox7eb4561f9f764479b2bd493d3c23829e.mailgun.org", messageParams)

})

emailRoutes.post('/verificationEmail', sendEmail)




module.exports =  emailRoutes