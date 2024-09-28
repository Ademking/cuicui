"use client";
import { useThrottle } from "#/src/ui/cuicui/hooks/use-throttle/use-throttle";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const performSearch = (searchTerm: string) => {
  toast(`Searching for: ${searchTerm}`);
};

export const PreviewUseThrottle = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const throttledSearchTerm = useThrottle(searchTerm, 500);

  useEffect(() => {
    if (throttledSearchTerm) {
      // Perform the search operation, e.g., API call
      performSearch(throttledSearchTerm);
    }
  }, [throttledSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
