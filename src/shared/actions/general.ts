export enum GeneralActionTypes {
  HANDLE_MODAL = 'HANDLE_MODAL',
}

interface HandleModal {
  type: GeneralActionTypes.HANDLE_MODAL;
  payload: boolean;
}

export const handleModal = (value: boolean): HandleModal => ({
  type: GeneralActionTypes.HANDLE_MODAL,
  payload: value
});
