// Import PersistPartial type from Redux Persist
import { PersistPartial } from "redux-persist/es/persistReducer";

// Define the original state structure without Redux Persist
export interface OriginalRootState {
  // Define the structure of your original state here
  auth: {
    isAuthenticated: boolean;
    // Other auth-related properties
  };
  postcode: {
    postcode: string;
  };
  NotificationMessage: {
    success: string;
    error: string;
  };

  // Add other slices of state as needed
}

// Combine the original state type with the persisted state type
export type RootState = OriginalRootState & PersistPartial;
