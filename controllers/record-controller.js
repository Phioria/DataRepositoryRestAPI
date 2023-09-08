const db = require('../models');
const Records = db.records;
const Op = db.Sequelize.Op;


// CREATE
// Create a new record
exports.create = req => {
    data = req.body;
    const record = {
        //rid: req.rid,
        dataset: data.dataset,
        species: data.species,
        track_name: data.track_name,
        sequencing_type: data.sequencing_type,
        file_location: data.file_location,
        note: data.notes,
        mutant: data.mutant,
        tissue: data.tissue,
        cell_line: data.cell_line,
        development_stage: data.development_stage,
        gender: data.gender,
        paper: data.paper,
        srr_id: data.srr_id,
        total_mapped: data.total_mapped,
        percent_aligned: data.percent_aligned,
        percent_uniquely_mapped: data.percent_uniquely_mapped,
        submitted_by: data.submitted_by,
        author: data.author,
        project: data.project,
        submitted_date: data.submitted_date
    };

    return Records.findOne({
        where: {
            // When creating a new record, you won't have an RID yet
            //rid: record.rid,
            file_location: record.file_location
        }
    })
        .then(result => {
            if (result == null) {
                return Records.create(record)
                    .then(data => {
                        console.log("Record Created.");
                        return(data)
                    })
                    .catch(err => {
                        console.log(err.message || "Some error occurred while creating the new record.");
                    });
            } else {
                console.log("Duplicate");
                return(null);
            }
        })
        .catch(err => {
            console.log(err);
        });
}; // End create function

exports.testing = req => {
    console.log(req);
}; // End testing function

// READ
// Find Record by ID
exports.findOneById = req => {
    const id = req.id;
    return Records.findByPk(id)
        .then(data => {
            if (data) {
                return(data);
            } else {
                return({
                    message: `Cannot find Record with id: ${id}`
                })
            }
        })
        .catch(err => {
            return({
                message: err.message || "Error retrieving Record with id: " + id
            });
        });
}; // End findOneById function

// Return all Records
exports.findAll = (req, res) => {
    Records.findAll()
        .then(data => {
            if (data) {
                return(data);
            } else {
                return({
                    message: "Nothing to return currently."
                });
            }
        })
        .catch(err => {
            return({
                message: err.message || "Error retrieving Records."
            });
        });
}; // End findAll function

// UPDATE


// DESTROY