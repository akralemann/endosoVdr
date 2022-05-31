export interface Status {
    status:     string;
    comentario: string;
    sessionId:  string;
    data:       Coberturas[];
}

export interface Coberturas {
    SUCURSAL:               string;
    TIPO_DOCUMENTO:         string;
    DOCUMENTO:              string;
    RUT_CLIENTE:            string;
    NOMBRE_CLIENTE:         string;
    RUT_CORREDOR:           string;
    NOMBRE_CORREDOR:        string;
    FECHA_EMISION:          string;
    FECHA_VIGENCIA_INICIAL: string;
    FECHA_VIGENCIA_FINAL:   string;
    CONVENIO:               string;
    DESC_CONVENIO:          string;
    DESCRIPCION_MARCA:      string;
    DESCRIPCION_MODELO:     string;
    RAMO:                   string;
    NUMERO_ITEM:            string;
    CODIGO_COBERTURA:       string;
    DESC_COBERTURA:         string;
    MONTO_ASEGURADO:        string;
    PRIMA_AFECTA:           string;
    PRIMA_EXENTA:           string;
    PRIMA_NETA:             string;
}