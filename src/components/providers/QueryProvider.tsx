'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  })

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient: QueryClient | undefined = createQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
