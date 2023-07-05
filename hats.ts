export enum Hat {
  Halloween = "halloween",
  Christmas = "christmas",
  NewYear = "newYear",
}

export const Hats = [
  {
    key: Hat.Halloween,
    width: 134 / 300,
    test: () => {
      const d = new Date();
      return d.getMonth() === 9 && d.getDate() >= 30 && d.getDate() <= 31;
    },
  },
  {
    key: Hat.Christmas,
    width: 75 / 300,
    test: () => {
      const d = new Date();
      return d.getMonth() === 11 && (d.getDate() > 18 && d.getDate() <= 25);
    },
  },
  {
    key: Hat.NewYear,
    width: 61 / 300,
    test: () => {
      if (/birthday/i.test(window.location.hash)) {
        return true;
      }

      const d = new Date();
      return (
        (d.getMonth() === 11 && d.getDate() === 31) ||
        (d.getMonth() === 0 && d.getDate() === 1)
      );
    },
  },
];
