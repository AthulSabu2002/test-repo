const express = require('express');
const router = express.Router();
const {
    addPublisher,
    viewPublishers,
    viewRequest,
    renderDashboard,
    renderAddPublisher,
    deletePublisher,
    deleteRequest
    } = require("../controllers/adminController");


router.route('/dashboard').get(renderDashboard);

router.route('/add-publisher').get(renderAddPublisher);

router.route('/view-publishers').get(viewPublishers);

router.route('/view-requests').get(viewRequest);

router.route('/add-publisher').post(addPublisher);

router.route('/delete-publisher/:id').post(deletePublisher);

router.route('/delete-request/:id').post(deleteRequest);

module.exports = router;