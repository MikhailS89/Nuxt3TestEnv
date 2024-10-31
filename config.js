import { exec } from 'child_process';
import dotenv from 'dotenv';

// Загрузим переменные из .env
dotenv.config();

const NUXT_PUBLIC_API_URL = process.env.NUXT_PUBLIC_API_URL || 'default_value';

const command = `NUXT_PUBLIC_API_URL=${NUXT_PUBLIC_API_URL} node .output/server/index.mjs`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Ошибка: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Ошибка: ${stderr}`);
    return;
  }
  console.log(`Вывод: ${stdout}`);
});
