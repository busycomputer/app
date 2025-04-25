import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { runOnDemand } from '../run-on-demand'
import { inngest } from '@/lib/inngest'
import { EVENT_RUN_ON_DEMAND } from '@/lib/constants'

// Mock the inngest dependency
jest.mock('@/lib/inngest', () => ({
  inngest: {
    send: jest.fn().mockResolvedValue({ status: 'success' }),
  },
}))

describe('runOnDemand server action', () => {
  const mockWorkflowId = 'test-workflow-123'
  const mockUserId = 'user-456'

  beforeEach(() => {
    // Clear mock calls between tests
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should successfully send an event to Inngest', async () => {
    // Call the server action
    const result = await runOnDemand({
      workflow_id: mockWorkflowId,
      user_id: mockUserId,
    })

    // Verify that inngest.send was called with the correct event
    expect(inngest.send).toHaveBeenCalledTimes(1)
    expect(inngest.send).toHaveBeenCalledWith({
      name: EVENT_RUN_ON_DEMAND,
      data: {
        workflow_id: mockWorkflowId,
      },
      user: {
        user_id: mockUserId,
      },
    })

    // Verify the return value
    expect(result).toEqual({ success: true })
  })

  it('should handle errors when sending an event fails', async () => {
    // Mock the send function to reject with an error
    const mockError = new Error('Failed to send event')
    jest.mocked(inngest.send).mockRejectedValueOnce(mockError)

    // Use try/catch to test the error handling
    try {
      await runOnDemand({
        workflow_id: mockWorkflowId,
        user_id: mockUserId,
      })
      
      // If we get here, the test should fail because an error was expected
      expect(true).toBe(false) // This line should not execute
    } catch (error) {
      expect(error).toBe(mockError)
    }

    // Verify that inngest.send was called
    expect(inngest.send).toHaveBeenCalledTimes(1)
  })

  it('should validate input parameters', async () => {
    // Test with missing workflow_id
    // @ts-expect-error - Testing invalid input
    await expect(runOnDemand({ user_id: mockUserId })).rejects.toThrow()

    // Test with missing user_id
    // @ts-expect-error - Testing invalid input
    await expect(runOnDemand({ workflow_id: mockWorkflowId })).rejects.toThrow()

    // Test with empty parameters
    // @ts-expect-error - Testing invalid input
    await expect(runOnDemand({})).rejects.toThrow()

    // Verify that inngest.send was not called in any of these cases
    expect(inngest.send).not.toHaveBeenCalled()
  })

  it('should handle different input values correctly', async () => {
    // Test with different valid values
    const testCases = [
      { workflow_id: 'workflow-1', user_id: 'user-1' },
      { workflow_id: 'workflow-2', user_id: 'user-2' },
      { workflow_id: '12345', user_id: '67890' },
    ]

    for (const testCase of testCases) {
      jest.clearAllMocks()
      
      await runOnDemand(testCase)
      
      expect(inngest.send).toHaveBeenCalledTimes(1)
      expect(inngest.send).toHaveBeenCalledWith({
        name: EVENT_RUN_ON_DEMAND,
        data: {
          workflow_id: testCase.workflow_id,
        },
        user: {
          user_id: testCase.user_id,
        },
      })
    }
  })
})
