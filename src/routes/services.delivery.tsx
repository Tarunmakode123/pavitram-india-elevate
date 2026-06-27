import { createFileRoute } from "@tanstack/react-router";
import { Truck, Clock, Globe, ShieldCheck, Box, MapPin } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/delivery")({
  head: () => ({
    meta: [
      { title: "Pavitram Delivery — Nationwide Cooperative Logistics" },
      { name: "description", content: "Anything, anywhere, anytime — delivered with care." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "delivery",
        name: "Pavitram Delivery",
        hindi: "पवित्रम डिलीवरी",
        tagline: "Anything, anywhere, anytime — delivered with care",
        heroIcon: Truck,
        aboutTitle: "About Pavitram Delivery",
        aboutP1:
          "Pavitram Delivery is our dedicated logistics engine ensuring swift, secure, and affordable package delivery across rural and urban India.",
        aboutP2:
          "By utilizing our cooperative network hubs, we power last-mile connectivity for Pavitram Mart orders, business documents, and personal parcels.",
        pills: ["Same Day", "Last-Mile Connect", "Pan-India"],
        whyUs: [
          "Extensive last-mile reach into rural villages and urban hubs",
          "Affordable cooperative shipping rates for individuals and merchants",
          "Real-time GPS tracking and tamper-proof packaging",
        ],
        features: [
          {
            icon: Clock,
            title: "Same Day Delivery",
            desc: "Express local delivery within major city limits.",
          },
          {
            icon: Globe,
            title: "Pan-India Shipping",
            desc: "Reliable logistics connecting 15+ states.",
          },
          {
            icon: MapPin,
            title: "Real-Time Tracking",
            desc: "Live updates from dispatch to doorstep.",
          },
          {
            icon: ShieldCheck,
            title: "Cooperative Pricing",
            desc: "Maximum savings on freight and parcel delivery.",
          },
          {
            icon: Box,
            title: "Secure Packaging",
            desc: "Protected handling for delicate goods and documents.",
          },
          {
            icon: Truck,
            title: "Last-Mile Connect",
            desc: "Reaching deep into rural village centers.",
          },
        ],
        steps: [
          { num: "01", title: "Order", desc: "Book shipment via app or Pavitram Mart." },
          { num: "02", title: "Pickup", desc: "Agent collects package from your location." },
          { num: "03", title: "Track", desc: "Follow real-time progress on live map." },
          { num: "04", title: "Delivered", desc: "Safe doorstep delivery with instant OTP." },
        ],
      }}
    />
  ),
});
