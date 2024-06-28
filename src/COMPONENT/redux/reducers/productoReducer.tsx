import * as types from "../consts/actionTypes";
import { Producto } from "../../SistemaGestion/Models/Models.tsx";

const ExampleState = {
  producto: Producto,
  productos: Array<Producto>(),
  getRespuesta: undefined,
};

export function productoReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_PRODUCTOS_SUCCESS:
      return { ...state, productos: action.response };
    case types.GET_PRODUCTOS_FAILED:
      return { ...state, productos: false };

    case types.PUT_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
    case types.PUT_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };

    case types.POST_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
    case types.POST_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };

    case types.DELETE_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
    case types.DELETE_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };

    default:
      return state;
  }
}
