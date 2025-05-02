import axios from 'axios';
import { APPLICATION_GATEWAY_ENDPOINT, APPLICATION_NUM_REGISTROS } from '#config/env';

export const enviarPayload = async (registerNumber: number, payload: any) => {
  try {
    const { status } = await axios.post(APPLICATION_GATEWAY_ENDPOINT!, payload);
    console.log(`✅ [${registerNumber}/${APPLICATION_NUM_REGISTROS}] Enviado:`, status);
  } catch (err: any) {
    console.error(`❌ [${registerNumber}/${APPLICATION_NUM_REGISTROS}] Erro:`, err.response?.data || err.message);
  }
};