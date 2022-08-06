export type Action<TActionName extends string, TPayload> = {
  type: TActionName
  payload: TPayload
}
