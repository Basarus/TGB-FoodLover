import { config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./config.interface.js";

export class ConfigService implements IConfigService {

    private config: DotenvParseOutput;

    constructor() {
        const { error, parsed } = config();
        if (error) throw Error('Не найден файл .env');
        if (!parsed) throw Error('Пустой .env');

        this.config = parsed;
    }

    get(key: string): string {
        const res = this.config[key];
        if (!res) throw Error('Нет такого ключа');
        return res;
    }
}