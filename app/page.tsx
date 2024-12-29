'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link'
import { categories } from '@/lib/data'
import { CategoryCard } from '@/components/category-card'
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        router.push('/signIn');
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">澳洲職場人活動問卷系統</h1>
        <p className="text-lg">Welcome, {user?.email || "User"}</p>
      </div>
      
      <p className="text-lg text-muted-foreground mb-8">
        請為每個類別選擇您偏好的問卷格式。每個州的格式略有不同，請選擇最適合您需求的版本。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/${category.id}`}>
            <CategoryCard
              category={category}
              selectedState={null}
              onSelect={() => {}}
            />
          </Link>
        ))}
      </div>
    </main>
  )
}