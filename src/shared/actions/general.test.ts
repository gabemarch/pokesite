import { GeneralActionTypes, handleModal } from "./general";

describe('General Actions', () => {
  const mockHandleModal = false
  test('Handle modal action', () => {
    expect(handleModal(mockHandleModal).type).toEqual(GeneralActionTypes.HANDLE_MODAL);
  })
})