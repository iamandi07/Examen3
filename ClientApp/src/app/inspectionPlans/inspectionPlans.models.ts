import { Person } from "../persons/persons.models";

export interface InspectionPlan {
    id: number;
    description: string;
    temperature: number;
    humidity: number;
    pressure: number;
    personId: number;
}
