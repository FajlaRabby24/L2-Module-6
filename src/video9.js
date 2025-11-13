// ? enum
// * set of fixed string literal ek jaigai rakhe
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
var UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
// UserRoles.Admin = "hello"; // ! don't
// * 1. typeof operator
// * 2. keyof operator
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
var isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
