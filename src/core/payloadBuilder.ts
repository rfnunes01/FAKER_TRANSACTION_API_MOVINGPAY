import { v4 as uuidv4 } from 'uuid';
import { generateAlphaNumeric, generateRandomNumber, pickRandom, getCurrentDateTime } from '#utils/helpers';

import {
  APPLICATION_TOKEN,
  APPLICATION_CAPTURE_PARTNER,
  APPLICATION_DOCUMENTS_LIST,
  APPLICATION_ACQUIRER_LIST,
  APPLICATION_BRANDS_LIST,
  APPLICATION_WEBHOOK_URL
} from '#config/env';

export const gerarPayload = () => {

  const documentNumber = pickRandom(APPLICATION_DOCUMENTS_LIST);
  const acquirerId     = pickRandom(APPLICATION_ACQUIRER_LIST);
  const brand          = pickRandom(APPLICATION_BRANDS_LIST);
  const isDebit        = ['VISA ELECTRON', 'MAESTRO'].includes(brand);
  const installments   = isDebit ? 1 : generateRandomNumber(1, 12);
  const paymentMethod  = isDebit ? 'CHCK' : installments === 1 ? 'CRDT' : 'CRDT_PARC';

  return {
    cpf_cnpj                    :  documentNumber,
    merchants_id_mvpay          :  String(documentNumber).length < 11 ? documentNumber :  null,
    referencia_externa          :  "",
    situacao                    :  "APPR",
    refuse_reason               :  "",
    acquirer_response_code      :  "00",
    acquirer_id                 :  acquirerId,
    codigo_autorizacao          :  generateAlphaNumeric(6),
    moeda_transacao             :  "096",
    uuid                        :  uuidv4(),
    cupom_fiscal                :  "",
    tef_nsu                     :  generateAlphaNumeric(12),
    nsu                         :  generateAlphaNumeric(12),
    nsu_cancelamento            :  "",
    valor                       :  (generateRandomNumber(100, 10000 ) * 100).toString(),
    parcelas                    :  installments.toString(),
    valor_devolucao             :  "0",
    custo_intercambio           :  "0",
    cartao_portador             :  "Indisponível",
    cartao_primeiros_digitos    :  generateRandomNumber(100000, 999999 ).toString(),
    cartao_ultimos_digitos      :  generateRandomNumber(1000, 9999 ).toString(),
    bandeira                    :  brand,
    forma_pagamento             :  paymentMethod,
    forma_captura               :  "TEF",
    codigo_pedido               :  "",
    numero_serie                :  "SN-TESTE",
    sim_provedor                :  "",
    sim_numero                  :  "",
    data_inicial_transacao      :  getCurrentDateTime(),
    data_final_transacao        :  getCurrentDateTime(),
    data_confirmacao_transacao  :  getCurrentDateTime(),
    data_pagamento_transacao    :  getCurrentDateTime(),
    data_cancelamento_transacao :  "",
    transacao_internacional     :  0,
    transacao_ecommerce         :  0,
    capture_partner             :  APPLICATION_CAPTURE_PARTNER,
    postback_urls               :  APPLICATION_WEBHOOK_URL,
    token                       :  APPLICATION_TOKEN
  };
};