interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      description: 'En progreso: Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      createdAt: Date.now() - 1000000,
      status: 'in-progress',
    },
    {
      description: 'Terminadas: Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      createdAt: Date.now() - 100000,
      status: 'finished',
    }
  ]
}
