const express = require("express")
const getCountryById = require("../controllers/getCountryById");

const getCountryByIdHandler = async (req, res) => {
    const { idPais } = req.params;
    try {
        const countryId = await getCountryById(idPais)
       return res.status(200).json(countryId);
    } catch (error) {
       return res.status(400).json({ error: error.message });
    }
};

module.exports = getCountryByIdHandler;
