export type Mentor = {
  initials: string;
  name: string;
  roleKey: "softwareEngineer" | "nurse" | "mscStudentDresden" | "dataAnalyst";
  city: string;
};

// Sample mentors from the design. Replace with real profiles before launch;
// an empty list renders the "joining soon" state instead of the grid.
export const mentors: Mentor[] = [
  { initials: "CO", name: "Chiamaka Okafor", roleKey: "softwareEngineer", city: "Berlin" },
  { initials: "TA", name: "Tunde Adeyemi", roleKey: "nurse", city: "Munich" },
  { initials: "NE", name: "Ngozi Eze", roleKey: "mscStudentDresden", city: "Dresden" },
  { initials: "EN", name: "Emeka Nwosu", roleKey: "dataAnalyst", city: "Hamburg" },
];
