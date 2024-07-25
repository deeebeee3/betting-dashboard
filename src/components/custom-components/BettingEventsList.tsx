"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BetDialog from "./BetDialog";
import { BettingEvent } from "@/interfaces/BettingEvent";

interface BettingEventsListProps {
  bettingEvents: BettingEvent[];
}

export default function BettingEventsList({
  bettingEvents,
}: BettingEventsListProps) {
  const [selectedEvent, setSelectedEvent] = useState<BettingEvent | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const placeBet = (bettingEvent: BettingEvent) => {
    setSelectedEvent(bettingEvent);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      {bettingEvents.map((bettingEvent) => (
        <Card
          key={bettingEvent.event_id}
          className="p-4 border rounded-md shadow-md"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">
                {bettingEvent.event_name}
              </h3>
              <p className="text-gray-600">Odds: {bettingEvent.odds}</p>
            </div>
            <Button onClick={() => placeBet(bettingEvent)}>Place Bet</Button>
          </div>
        </Card>
      ))}
      {selectedEvent && (
        <BetDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          eventName={selectedEvent.event_name}
        />
      )}
    </div>
  );
}
