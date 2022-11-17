import { IAppointmentEntity } from "../../../../domain/entities/appointments/appointment.entity";

export default function (appointment:any): IAppointmentEntity | undefined {
  if(!appointment)
  return
  let appointmentGeneral: IAppointmentEntity = {
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
      (appointmentGeneral as IAppointmentEntity).idAppointment = appointment.idAppointment;
      (appointmentGeneral as IAppointmentEntity).idUser = appointment.idUser
      (appointmentGeneral as IAppointmentEntity).doctor = appointment.doctor;
      (appointmentGeneral as IAppointmentEntity).hospital = appointment.hospital;
      (appointmentGeneral as IAppointmentEntity).crm = appointment.crm;
      (appointmentGeneral as IAppointmentEntity).date = appointment.date;
      (appointmentGeneral as IAppointmentEntity).symptoms = appointment.symptoms
      (appointmentGeneral as IAppointmentEntity).medicines = appointment.medicines
      (appointmentGeneral as IAppointmentEntity).comments = appointment.comments;
      (appointmentGeneral as IAppointmentEntity).createdAt = appointment.createdAt;
      (appointmentGeneral as IAppointmentEntity).updatedAt = appointment.updatedAt;
  }

  return (appointmentGeneral as IAppointmentEntity);
}