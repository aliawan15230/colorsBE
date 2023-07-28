const {ColorsModel} = require('../models')

exports.addColor = async (req, res) => {

    try {

        if (!req.body || !req.body.title) {
            return res.status(500).json({success: false, error: 'Cannot add color', reason: 'Empty body'})
        }

        const color = new ColorsModel(req.body);
        await color.save();

        return res.json({success: true, message: 'Color added Successfully'})

    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}

exports.getColor = async (req, res) => {

    try {

        const id = req.params.id

        const color = await ColorsModel.findById(id)

        return res.json({success: true, data: color})

    } catch (e) {

        return res.status(500).json({success: false, error: e.message})
    }
}

exports.getAllColors = async (req, res) => {

    try {
        const page = req.query.page ? req.query.page : 0

        const offset = req.query.offset ? req.query.offset : 10

        const colors = await ColorsModel.find({}, {
            _id: 1,
            "title": "$title",
        }).skip(page * offset).limit(offset).sort({createdAt: -1})

        const count = await ColorsModel.countDocuments()

        return res.json({success: true, data: {colors, count}})

    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}

exports.updateColor = async (req, res) => {

    try {
        if (Object.keys(req.body).length > 0) {

            const formData = await ColorsModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

            res.json({success: true, data: {formData}});

        } else {
            res.status(500).json({success: false, error: {message: "Cannot update form data, body cannot be empty"}});
        }
    } catch (error) {

        res.status(500).json({success: false, error: {message: "Cannot update Colors data", reason: error.message}});

    }

}
