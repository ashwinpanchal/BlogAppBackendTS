import dotenv from "dotenv";

dotenv.config();

interface configInterface {
  PORT: string | undefined;
}

const config: configInterface = {
  PORT: process.env.PORT,
};

export const { PORT } = config;
