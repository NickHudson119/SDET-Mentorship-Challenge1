import fs from 'fs';

const environment = process.env.TEST_ENV || 'qa';

const configFile = fs.readFileSync(`configs/${environment}.json`, 'utf-8')

const config = JSON.parse(configFile)

export default config;
