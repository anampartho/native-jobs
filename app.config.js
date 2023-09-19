import "dotenv/config";

export default {
  name: "native-jobs",
  version: "0.0.1",
  extra: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
  },
};
