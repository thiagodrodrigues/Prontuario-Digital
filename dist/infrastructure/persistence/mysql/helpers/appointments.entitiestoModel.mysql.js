"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(appointment) {
    const userGeneral = {
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
    return {
        userGeneral: userGeneral
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLmVudGl0aWVzdG9Nb2RlbC5teXNxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2FwcG9pbnRtZW50cy5lbnRpdGllc3RvTW9kZWwubXlzcWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsV0FBK0I7SUFFcEQsTUFBTSxXQUFXLEdBQUc7UUFDbEIsYUFBYSxFQUFFLFdBQVcsQ0FBQyxhQUFhO1FBQ3hDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtRQUMxQixNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07UUFDMUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1FBQ2hDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRztRQUNwQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7UUFDdEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1FBQzlCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztRQUNoQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7UUFDOUIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTO1FBQ2hDLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztLQUMvQixDQUFBO0lBRUQsT0FBTztRQUNILFdBQVcsRUFBRSxXQUFXO0tBQzNCLENBQUM7QUFDTixDQUFDO0FBbkJELDRCQW1CQyJ9