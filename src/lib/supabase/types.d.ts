import type { Workflow as InngestWorkflow } from '@inngest/workflow-kit'
import type { Database as GeneratedDB, Json } from '@/lib/supabase/database.types'

export type Database = GeneratedDB

export type Enums = Database['public']['Enums']
export type Tables = Database['public']['Tables']
export type Functions = Database['public']['Functions']

export type TableName = Extract<keyof Tables, string>
export type FunctionName = Extract<keyof Functions, string>

export type TableRow<T extends TableName> = Tables[T]['Row']
export type TableInsert<T extends TableName> = Tables[T]['Insert']
export type TableUpdate<T extends TableName> = Tables[T]['Update']

export type FunctionArgs<T extends FunctionName> = Functions[T]['Args']
export type FunctionReturns<T extends FunctionName> = Functions[T]['Returns']

// Extracted Types
export type Workflow = Omit<Database['public']['Tables']['workflows']['Row'], 'workflow'> & {
  workflow: InngestWorkflow | Json
}
