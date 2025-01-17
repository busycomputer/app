'use client'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { EditIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toggleWorkflow } from '@/app/actions/toggle-workflow'
import { useGetUserWorkflows } from '@/hooks/use-get-user-workflows'

export const WorkflowList = () => {
  const userWorkflows = useGetUserWorkflows()

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Automations</h2>
      </div>
      <div className="grid gap-6">
        {userWorkflows.map((userWorkflow) => {
          const actions: any[] = (userWorkflow.workflow as any)?.actions || []
          return (
            <Card key={userWorkflow.id}>
              <CardHeader>
                <CardTitle>{userWorkflow.name}</CardTitle>
                <CardDescription>{userWorkflow.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  {actions.length
                    ? actions.map(({ name, kind }) => name || kind).join(', ')
                    : 'No actions'}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="airplane-mode"
                    checked={userWorkflow.enabled!}
                    onCheckedChange={() => toggleWorkflow(userWorkflow.id, !userWorkflow.enabled)}
                  />
                  <Label htmlFor="airplane-mode">Active</Label>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/workflow/${userWorkflow.id}`}>
                    <EditIcon className="mr-2 h-4 w-4" /> Configure
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
