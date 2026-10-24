import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Hold = {
  classId: string;
  name: string;
  savedAt: string;
};

type HoldsState = {
  holds: Hold[];
  reserve: (hold: Hold) => void;
  release: (classId: string) => void;
};

export const useHolds = create<HoldsState>()(
  persist(
    (set, get) => ({
      holds: [],
      reserve: (hold) =>
        set({
          holds: [...get().holds.filter((item) => item.classId !== hold.classId), hold],
        }),
      release: (classId) =>
        set({ holds: get().holds.filter((item) => item.classId !== classId) }),
    }),
    { name: "halden-holds", skipHydration: true },
  ),
);
