import { Action } from './types'

export const actionCreator =
  <TActionName extends string, TCreatePayload extends (...args: any[]) => any>(
    type: TActionName,
    createPayload: TCreatePayload
  ) =>
  (
    ...args: Parameters<typeof createPayload>
  ): Action<TActionName, ReturnType<typeof createPayload>> => {
    return {
      type,
      payload: createPayload(...args),
    }
  }
