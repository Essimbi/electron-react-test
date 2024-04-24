import { useContext } from 'react';
import { DataGraphContext } from '../contexts/DataGraphContext';

export const useDataGraphContext = () => useContext(DataGraphContext);
