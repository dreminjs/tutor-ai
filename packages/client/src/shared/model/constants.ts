export const BASE_API_URL = "http://localhost:3000";

export const API_KEYS = {
  ai: "ai",
  tasks: "tasks",
  sections: "sections",
  subjects: "subjects",
  auth: "auth",
  users: "users",
} as const;

export const SERVICE_KEYS = {
  "make-question": "make-question",
  solution: "solution",
  login: "login",
  register: "register",
  logout: "logout",
  me: "me",
} as const;

export const PAGE_KEYS = {
  home: "/",
  sections: "sections",
  tasks: "tasks",
  register: "register",
  login: "login",
};
