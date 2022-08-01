export const environment = {
  production: true,
  weatherApiKey: "" // This should not be stored here
                    // these calls should most likely go through a thin API that we control
                    // and that will protect our key from being stolen by a hacker.
};
