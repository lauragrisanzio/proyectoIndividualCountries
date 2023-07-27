const express = require("express")
const getCountryById = require("../controllers/getCountryById");

const getCountryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const countryId = await getCountryById(id)
        res.status(200).json(countryId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getCountryByIdHandler;
