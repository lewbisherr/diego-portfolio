import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wee')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wee"!</div>
}
