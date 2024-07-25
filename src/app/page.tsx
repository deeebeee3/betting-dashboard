import BettingEventsList from "@/components/custom-components/BettingEventsList";
import { BettingEvent } from "@/interfaces/BettingEvent";

async function fetchEvents(): Promise<BettingEvent[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const events = await fetchEvents();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sports Events</h1>
      <BettingEventsList bettingEvents={events} />
    </div>
  );
}
