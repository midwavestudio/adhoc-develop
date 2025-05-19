'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchParamsContent() {
  const searchParams = useSearchParams();
  const referrer = searchParams.get('referrer');
  
  return referrer ? (
    <p className="text-sm text-stone-500 mb-4">
      Referred from: {referrer}
    </p>
  ) : null;
}

export function SearchParamsHandler() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent />
    </Suspense>
  );
} 