import { Background } from '@/components/Background'
import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import dynamic from 'next/dynamic'

// import Badge from '@/components/Badge'
const DynamicBadge = dynamic(() => import('@/components/Badge'))

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const data = await payload.find({
    collection: 'users',
  })

  return (
    <>
      <main>
        <article>
          <DynamicBadge />
          {/* <Badge /> */}
          {data.docs.map((it) => (
            <p key={it.id}>{it.email}</p>
          ))}
        </article>
      </main>
      <Background />
    </>
  )
}

export default Page
