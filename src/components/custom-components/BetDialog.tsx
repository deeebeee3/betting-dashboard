"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface BetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
}

export default function BetDialog({
  isOpen,
  onClose,
  eventName,
}: BetDialogProps) {
  const [amount, setAmount] = useState<number | "">("");
  const { toast } = useToast();

  const handlePlaceBet = () => {
    toast({
      title: "Bet Placed",
      description: `Bet of ${amount} placed on ${eventName}`,
      className: "bg-green-500",
    });
    onClose();
    setAmount("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <h2 className="text-xl font-semibold mb-4">Place Your Bet</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter bet amount"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end space-x-2">
          <Button
            onClick={handlePlaceBet}
            className="bg-blue-500 text-white"
            disabled={!amount}
          >
            Place Bet
          </Button>
          <Button onClick={onClose} className="bg-gray-500 text-white">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
