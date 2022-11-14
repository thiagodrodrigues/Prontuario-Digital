"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(exams) {
    if (!exams)
        return;
    let userGeneral = {
        idExams: exams.idExams,
        idUser: exams.idUser,
        exam: exams.exam,
        date: exams.date,
        status: exams.date,
        clinic: exams.clinic,
        doctor: exams.doctor,
        comments: exams.comments,
        createdAt: exams.createdAt,
        updatedAt: exams.updatedAt,
    };
    //
    if (exams.logado) {
        userGeneral.idExams = exams.idExams;
        userGeneral.idUser = exams.idUser(userGeneral).exam = exams.exam;
        userGeneral.date = exams.date;
        userGeneral.status = exams.status;
        userGeneral.clinic = exams.clinic;
        userGeneral.doctor = exams.doctor(userGeneral).comments = exams.comments;
        userGeneral.createdAt = exams.createdAt;
        userGeneral.updatedAt = exams.updatedAt;
    }
    return userGeneral;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXMubW9kZWxzdG9FbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9teXNxbC9oZWxwZXJzL2V4YW1zLm1vZGVsc3RvRW50aXRpZXMubXlzcWwuREIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQkFBeUIsS0FBUztJQUM5QixJQUFHLENBQUMsS0FBSztRQUNULE9BQU07SUFDTixJQUFJLFdBQVcsR0FBZ0I7UUFDM0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUNwQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSTtRQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1FBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtRQUN4QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0tBQzdCLENBQUE7SUFDTCxFQUFFO0lBQ0UsSUFBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1FBQ1gsV0FBMkIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwRCxXQUEyQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUNqRCxXQUEwQixDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUMsV0FBMkIsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM5QyxXQUEyQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2xELFdBQTJCLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbEQsV0FBMkIsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FDakQsV0FBMEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3RELFdBQTJCLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDeEQsV0FBMkIsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztLQUM1RDtJQUVELE9BQVEsV0FBMkIsQ0FBQztBQUN4QyxDQUFDO0FBOUJELDRCQThCQyJ9