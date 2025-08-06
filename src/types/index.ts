// Define la interfaz base para cualquier campo del formulario
export interface BaseField {
  id: string;
  nameField: { es: string; en: string };
  group?: number; // 'group' es opcional para todos los campos
}

// Interfaz para campos de tipo 'input'
export interface InputField extends BaseField {
  type: "input";
  registerName: string;
  typeInput?: string; // 'typeInput' es opcional y solo para 'input'
}

// Interfaz para campos de tipo 'textarea'
export interface TextareaField extends BaseField {
  type: "textarea";
  registerName: string;
}

// Interfaz para campos de tipo 'submit'
export interface SubmitField extends BaseField {
  type: "submit";
}

// Tipo de unión discriminada para todos los campos posibles en inputLabels
export type InputLabel = InputField | TextareaField | SubmitField;
