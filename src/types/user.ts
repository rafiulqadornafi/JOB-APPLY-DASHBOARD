export type UserRole="candidate"|"employer"|"admin";
export interface User{id:string;name:string;email:string;role:UserRole;title:string;initials:string;company?:string;location?:string;}