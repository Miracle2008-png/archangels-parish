import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './importMap'
import type { SanitizedConfig } from 'payload'
import React from 'react'

type Args = {
  children: React.ReactNode
}

export default async function Layout({ children }: Args) {
  return RootLayout({
    config: import('../../../payload.config').then((m) => m.default) as unknown as Promise<SanitizedConfig>,
    importMap,
    children,
  } as any)
}

