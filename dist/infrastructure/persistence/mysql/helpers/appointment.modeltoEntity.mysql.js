"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(appointment) {
    if (!appointment)
        return;
    let userGeneral = {
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
    };
    //
    if (appointment.logado) {
        userGeneral.idAppointment = appointment.idExams;
        userGeneral.idUser = appointment.idUser(userGeneral).doctor = appointment.doctor;
        userGeneral.hospital = appointment.hospital;
        userGeneral.crm = appointment.crm;
        userGeneral.date = appointment.date;
        userGeneral.symptoms = appointment.symptoms(userGeneral).medicines = appointment.medicines(userGeneral).comments = appointment.comments;
        userGeneral.createdAt = appointment.createdAt;
        userGeneral.updatedAt = appointment.updatedAt;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQubW9kZWx0b0VudGl0eS5teXNxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2FwcG9pbnRtZW50Lm1vZGVsdG9FbnRpdHkubXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsV0FBZTtJQUN0QyxJQUFHLENBQUMsV0FBVztRQUNmLE9BQU07SUFDTixJQUFJLFdBQVcsR0FBdUI7UUFDcEMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxhQUFhO1FBQ3hDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtRQUMxQixNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07UUFDMUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1FBQ2hDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRztRQUNwQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1FBQzlCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztRQUNoQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7UUFDOUIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTO1FBQ2hDLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztLQUMvQixDQUFBO0lBQ0gsRUFBRTtJQUNBLElBQUcsV0FBVyxDQUFDLE1BQU0sRUFBQztRQUNqQixXQUFrQyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3ZFLFdBQWtDLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQzlELFdBQWlDLENBQUMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUMvRCxXQUFrQyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ25FLFdBQWtDLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDekQsV0FBa0MsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMzRCxXQUFrQyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUNsRSxXQUFpQyxDQUFDLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQ3BFLFdBQWlDLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUNuRSxXQUFrQyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3JFLFdBQWtDLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7S0FDekU7SUFFRCxPQUFRLFdBQWtDLENBQUM7QUFDN0MsQ0FBQztBQWhDRCw0QkFnQ0MifQ==