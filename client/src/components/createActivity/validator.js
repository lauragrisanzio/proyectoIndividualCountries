

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
  if (data.duration <1) {
    errors.duration3 = "Duration must be greater than 0 hours";
  }

  if (!data.difficulty) {
    errors.diff1 = "Must be complete field: Difficulty";
  }

  if (!data.season) {
    errors.s1 = "Must be complete field: Season";
  }

  if (data.countries === []) {
    errors.c1 = "Must select a country";
  }
  return errors;
};
