import * as joi from 'joi';
import 'dotenv/config';

interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
  API_KEY: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    API_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: EnvVars = value;

export const envs = {
  PORT: envsVars.PORT,
  DATABASE_URL: envsVars.DATABASE_URL,
  API_KEY: envsVars.API_KEY,
};