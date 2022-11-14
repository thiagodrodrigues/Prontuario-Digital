import { IAppointmentEntity } from "../../../../domain/entities/appointments/appointment.entity";

export default function (appointment:any): IAppointmentEntity | undefined {
  if(!appointment)
  return
  let userGeneral: IAppointmentEntity = {
    idAppointment: appointment.idAppointment,
    idUser: appointment.idUser,
    doctor: appointment.doctor,
    hospital: appointment.hospital,
  crm: appointment.crm,
  date: appointment.date,
  symptoms: appointment.symptoms,
  medicines: appointment.medicines,
  comments: appointment.comments,
  createdAt: appointment.createdAt,
  updatedAt: appointment.updatedAt 
  }
//
  if(appointment.logado){
      (userGeneral as IAppointmentEntity).idAppointment = appointment.idExams;
      (userGeneral as IAppointmentEntity).idUser = appointment.idUser
      (userGeneral as IAppointmentEntity).doctor = appointment.doctor;
      (userGeneral as IAppointmentEntity).hospital = appointment.hospital;
      (userGeneral as IAppointmentEntity).crm = appointment.crm;
      (userGeneral as IAppointmentEntity).date = appointment.date;
      (userGeneral as IAppointmentEntity).symptoms = appointment.symptoms
      (userGeneral as IAppointmentEntity).medicines = appointment.medicines
      (userGeneral as IAppointmentEntity).comments = appointment.comments;
      (userGeneral as IAppointmentEntity).createdAt = appointment.createdAt;
      (userGeneral as IAppointmentEntity).updatedAt = appointment.updatedAt;
  }

  return (userGeneral as IAppointmentEntity);
}