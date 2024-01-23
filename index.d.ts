declare module 'streak-end-to-end' {
  function summary(props: {
    dates: (Date | string | number)[];
  }): {
    currentStreak: number;
    longestStreak: number;
    streaks: number[];
    todayInStreak: boolean;
    withinCurrentStreak: boolean;
  };
  namespace summary {}

  function streakRanges(props: {
    dates: (Date | string | number)[];
  }): {
    start: Date;
    end: Date | null;
    duration: number;
  }[];

  namespace streakRanges {}

  function trackRecord(props: {
    dates: (Date | string | number)[];
    length?: number;
  }): {
    [i: string]: boolean;
  };
  namespace trackRecord {}
}
