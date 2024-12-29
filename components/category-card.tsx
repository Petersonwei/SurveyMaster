'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Category, State } from "@/lib/types"

interface CategoryCardProps {
  category: Category
  selectedState: State | null
  onSelect: (category: Category) => void
}

export function CategoryCard({ category, selectedState }: CategoryCardProps) {
  return (
    <Card className="cursor-pointer hover:bg-slate-50 transition-colors">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {category.title}
          {selectedState && (
            <Badge variant="secondary">{selectedState}</Badge>
          )}
        </CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {category.stateOptions.length} 種問卷格式可選擇
        </p>
      </CardContent>
    </Card>
  )
}