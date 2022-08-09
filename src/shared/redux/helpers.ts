import { Action } from './types'

export const actionCreator =
  <ActionName extends string, CreatePayload extends (...args: any[]) => any>(
    type: ActionName,
    createPayload: CreatePayload
  ) =>
  (
    ...args: Parameters<typeof createPayload>
  ): Action<ActionName, ReturnType<typeof createPayload>> => {
    return {
      type,
      payload: createPayload(...args),
    }
  }
