import { createFileRoute } from "@tanstack/react-router";
import { LinkHub } from "@/components/link-hub";

export const Route = createFileRoute("/")({
  component: LinkHub,
});
