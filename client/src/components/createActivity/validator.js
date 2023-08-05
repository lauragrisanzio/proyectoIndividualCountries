export const validator = (data) => {

    let errors = {};

    if (!data.name) {
        errors.name1 = "Must be complete field: Name";
    }

    if (!data.duration) {
        errors.duration1 = "Must be complete field: Duration";
    }
    if (data.duration > 24) {
        errors.duration2 = "The duration should not exceed 24 hours";
    }
    if (data.duration === 0) {
      errors.duration2 = "Duration must be greater than 0 hours";
    }

    if (!data.difficulty) {
        errors.difficulty1 = "Must be complete field: Difficulty";
    }

    if (!data.season) {
        errors.season1 = "Must be complete field: Season";
    }

    if (data.countries === []) {
        errors.countries1 = "Must select a country";
    }
    return errors;
};

