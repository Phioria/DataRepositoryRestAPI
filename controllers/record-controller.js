const db = require('../models');
const Records = db.records;
const Op = db.Sequelize.Op;

// Create a new record
exports.create = req => {
    const record = {
        rid: req.rid,
        dataset: req.dataset,
        species: req.species,
        track_name: req.track_name,
        sequencing_type: req.sequencing_type,
        file_location: req.file_location,
        note: req.notes,
        mutant: req.mutant,
        tissue: req.tissue,
        cell_line: req.cell_line,
        development_stage: req.development_stage,
        gender: req.gender,
        paper: req.paper,
        srr_id: req.srr_id,
        total_mapped: req.total_mapped,
        percent_aligned: req.percent_aligned,
        percent_uniquely_mapped: req.percent_uniquely_mapped,
        submitted_by: req.submitted_by,
        author: req.author,
        project: req.project,
        submitted_date: req.submitted_date
    };

    return Records.findOne({
        where: {
            rid: record.rid,
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
