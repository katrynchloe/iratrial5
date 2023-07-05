export enum AnimalKey {
  Cow = "cow",
  Goat = "goat",
  Fox = "fox",
}

export type Animal = {
  key: AnimalKey;
  maxLevel: number;
  pointsRequired?: number;
  audioDuration: number;
  winSoundDelay: number;
  hatPosition: [number, number];
};

const cow: Animal = {
  key: AnimalKey.Cow,
  maxLevel: 11,
  audioDuration: 300,
  winSoundDelay: 1200,
  hatPosition: [0.69, 0.02],
};

const goat: Animal = {
  key: AnimalKey.Goat,
  maxLevel: 10,
  pointsRequired: 5,
  audioDuration: 300,
  winSoundDelay: 1200,
  hatPosition: [0.25, 0.06],
};

const fox: Animal = {
  key: AnimalKey.Fox,
  maxLevel: 10,
  pointsRequired: 50,
  audioDuration: 300,
  winSoundDelay: 200,
  hatPosition: [0.32, 0.04],
};

export const AnimalsArray = [cow, goat, fox];

export const AnimalsMap = new Map<AnimalKey, Animal>([
  [AnimalKey.Cow, cow],
  [AnimalKey.Goat, goat],
  [AnimalKey.Fox, fox],
]);
