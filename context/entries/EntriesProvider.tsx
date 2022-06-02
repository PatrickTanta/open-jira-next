import { FC, useReducer } from 'react'
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '../../interfaces';

import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      status: 'in-progress',
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'Duis sit magna aliquip commodo culpa ex laborum cupidatat laborum ex.',
      status: 'finished',
      createAt: Date.now() - 100000,
    }
  ],
}

export const EntriesProvider:FC = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE, )

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
