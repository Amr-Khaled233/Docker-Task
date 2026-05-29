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

/** Placeholder shown in place of an image until image overrides have loaded
 *  from the dashboard, so build-time images are never flashed before the
 *  dashboard ones arrive. Fills its parent container by default. */
export function ImageSkeleton({ className = "w-full h-full" }: { className?: string }) {
  return <div aria-hidden className={`bg-muted/70 animate-pulse ${className}`} />;
}
