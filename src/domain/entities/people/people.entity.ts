import { IDoctorEntity } from "./doctor.entity";
import { IPatientEntity } from "./patient.entity";

export type PeopleEntity = IDoctorEntity | IPatientEntity;