import { createContext } from 'react';
import { AssetInfo } from '../types';

export const RatesContext = createContext<AssetInfo[]>([]);
