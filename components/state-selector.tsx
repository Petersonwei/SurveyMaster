'use client'

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Category, State } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface StateSelectorProps {
  category: Category
  initialState?: State | null
}

export function StateSelector({ 
  category,
  initialState = null
}: StateSelectorProps) {
  const router = useRouter()
  const [selectedState, setSelectedState] = useState<State | null>(initialState)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.push('/')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回
        </Button>
        <h2 className="text-2xl font-bold">{category.title}</h2>
      </div>

      <RadioGroup 
        value={selectedState || ''} 
        onValueChange={(value) => setSelectedState(value as State)}
      >
        {category.stateOptions.map((option) => (
          <Card key={option.state} className="p-4 mb-4">
            <div className="flex items-start space-x-4">
              <RadioGroupItem value={option.state} id={option.state} />
              <div className="grid gap-1.5">
                <Label htmlFor={option.state} className="font-bold">
                  {option.state}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="mt-2">
                  <h3 className="font-semibold">範例：</h3>
                  <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                    {option.example}
                  </p>
                  <h3 className="font-semibold">問題列表：</h3>
                  <ul className="list-disc list-inside">
                    {option.questions.map((question) => (
                      <li key={question.id} className="text-sm text-muted-foreground">
                        {question.title}
                        {question.options && question.options.length > 0 && (
                          <ul className="list-disc list-inside ml-4">
                            {question.options.map((option, index) => (
                              <li key={index} className="text-sm text-muted-foreground">
                                {option}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </RadioGroup>
    </div>
  )
}