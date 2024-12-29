'use client'

import { useParams, useRouter } from 'next/navigation'
import { categories } from '@/lib/data'
import { StateSelector } from '@/components/state-selector'

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const category = categories.find(c => c.id === params.category)

  if (!category) {
    router.push('/404')
    return null
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <StateSelector 
        category={category}
      />
    </main>
  )
} 