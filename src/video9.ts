// ? enum

// * set of fixed string literal ek jaigai rakhe

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const UserRoles1 = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

// UserRoles.Admin = "hello"; // ! don't

// * 1. typeof operator
// * 2. keyof operator

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const canEdit2 = (role: (typeof UserRoles1)[keyof typeof UserRoles1]) => {
  if (role === UserRoles1.Admin || role === UserRoles1.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit(UserRoles.Admin);
const isEditPermissable1 = canEdit2(UserRoles1.Admin);
