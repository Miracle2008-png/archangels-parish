import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './importMap'
import React from 'react'

type Args = {
  children: React.ReactNode
}

export default async function Layout({ children }: Args) {
  return RootLayout({
    config: import('../../../payload.config'),
    importMap,
    children,
  })
}
