/** Placeholder shown in place of a price until live pricing has loaded from
 *  the API, so stale build-time prices are never flashed to the user. */
export function PriceSkeleton({ className = "h-5 w-20" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block rounded-md bg-muted/70 animate-pulse align-middle ${className}`}
    />
  );
}
