import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './importMap'
import React from 'react'
import config from '@payload-config'

type Args = {
  children: React.ReactNode
}

export default async function Layout({ children }: Args) {
  return RootLayout({
    config,
    importMap,
    children,
  })
}
