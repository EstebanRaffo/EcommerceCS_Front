import * as types from "../consts/actionTypes";
import { Venta } from "../../SistemaGestion/Models/Models.tsx";
const ExampleState = {
  ventas: Array<Venta>(),
  getRespuesta: undefined,
};

export function ventaReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_VENTAS_SUCCESS:
      return { ...state, ventas: action.response };
    case types.GET_VENTAS_FAILED:
      return { ...state, getRespuesta: false };

    case types.POST_VENTAS_SUCCESS:
      return { ...state, getRespuesta: true };
    case types.POST_VENTAS_FAILED:
      return { ...state, getRespuesta: false };
    default:
      return state;
  }
}
