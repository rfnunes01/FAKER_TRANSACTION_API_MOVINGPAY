import 'dotenv/config'
import { handler } from '#core/index'

/* Inicializa o aplicação */
handler().catch((e) => console.error(e)).finally(() => process.exit(0));
