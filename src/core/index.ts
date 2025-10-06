import { gerarPayload } from '#core/payloadBuilder';
import { enviarPayload } from '#services/apiService';
import { APPLICATION_NUM_REGISTROS } from '#config/env';
import { sleep } from '#utils/helpers';

export const handler = async () => {
  try {

    for (let i = 0; i < APPLICATION_NUM_REGISTROS; i++) {
      const payload = gerarPayload();
      await enviarPayload(i + 1, payload);

      if (i < APPLICATION_NUM_REGISTROS - 1) {
        await sleep(500);
      }

    }

  } catch (error) {
    console.error('handler error:', error);
  }
};

