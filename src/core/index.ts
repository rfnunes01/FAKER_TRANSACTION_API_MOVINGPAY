import { gerarPayload } from '#core/payloadBuilder';
import { enviarPayload } from '#services/apiService';
import { APPLICATION_NUM_REGISTROS } from '#config/env';

export const handler = async () => {
 try {
  
  for (let i = 0; i < APPLICATION_NUM_REGISTROS; i++) {
    const payload = gerarPayload();
    await enviarPayload(i+1, payload);
  }

 } catch (error) {
  console.error('handler error:', error);
 }
};

