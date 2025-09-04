const Contact = require("../models/Support");

exports.createSupport = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};