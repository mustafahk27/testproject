```typescript
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function App() {
  // Define time slots for the timetable
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  // Sample timetable data
  const [timetable, setTimetable] = useState(
    Array(timeSlots.length).fill(null)
  );
  const [count, setCount] = useState(0);
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to my ⚛️ React app built with ⚡ Vite!
        </h1>
        <p className="text-gray-600 mb-2">This is a tailwind template.</p>
        <Button onClick={() => setCount((count) => count + 1)}>
          Clicked {count} times
        </Button>
      </div>
    </main>
  );
}
```