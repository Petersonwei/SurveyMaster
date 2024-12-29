export type State = 'BNE' | 'PERTH' | 'TAS' | 'MEL' | 'ADE' | 'SYD'

export type Category = {
  id: string
  title: string
  description: string
  stateOptions: StateOption[]
}

export type StateOption = {
  state: State
  description: string
  example: string
  questions: Question[]
}

export type Question = {
  id: string
  type: 'text' | 'select' | 'multiselect' | 'radio' | 'likert'
  title: string
  options?: string[]
}