// helper to ensure that each step of the workflow use
//  the original content or current AI revision
import { WorkflowAction } from '@inngest/workflow-kit'

export const addAIPublishingSuggestion = (
  workflowAction: WorkflowAction,
  additionalSuggestion: string
) => {
  // return workflowAction.id === '1' // the first action of the workflow gets assigned id: "1"
  //   ? additionalSuggestion // if we are the first action, we reset the suggestions
  //   : blogPost.ai_publishing_recommendations + `<br/ >` + additionalSuggestion // otherwise add one
}
