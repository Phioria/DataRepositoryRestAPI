module.exports = (sequelize, Sequelize) => {
    const Record = sequelize.define('record', {
        rid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            //defaultValue: Sequelize.literal('uuid_generate_v4()'),
            allowNull: false,
            primaryKey: true
        },
        dataset: {
            type: Sequelize.STRING,
            allowNull: false
        },
        species: {
            type: Sequelize.STRING,
            allowNull: false
        },
        track_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sequencing_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        file_location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        notes: {
            type: Sequelize.TEXT
        },
        mutant: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tissue: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cell_line: {
            type: Sequelize.STRING
        },
        development_stage: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paper: {
            type: Sequelize.STRING
        },
        srr_id: {
            type: Sequelize.STRING
        },
        total_mapped: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        percent_aligned: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        percent_uniquely_mapped: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        submitted_by: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        project: {
            type: Sequelize.STRING
        },
        submitted_date: {
            type: Sequelize.DATEONLY
        }
    });

    return Record;
}